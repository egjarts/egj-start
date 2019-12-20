import _ from 'lodash';
import log from '../log';
import { isArray } from 'lodash';
import firebase from 'firebase-admin';

import Can from '../middleware/AccessControl/AccessControl';
import submissions from './submissions';
import { google } from 'googleapis';
import Submittable from '../integrations/submittable/request';
import Slack from '../integrations/slack/webClient';
import config from '../config/config';

require('firebase');
require('@google-cloud/firestore');

/*const axiosP = require('axios');

const axios = axiosP.create();
axios.interceptors.request.use(request => {
  console.log('Starting Request', request);
  return request;
}); */

export async function query(user, queryOptions) {
  const queryDefaults = {
    where: [['status', '==', 'Active']]
  };

  if (!queryOptions.where) queryOptions.where = queryDefaults.where;
  if (!queryOptions.orderBy) queryOptions.orderBy = queryDefaults.orderBy;

  const permissions = {
    readAny: Can(user).read('staff'),
    readOwn: Can(user).readOwn('staff'),
    readProspective: Can(user).read('staff:prospective'),
    readInactive: Can(user).read('staff:inactive'),
    readArchived: Can(user).read('staff:archived')
  };

  const read = permissions.readAny.granted
    ? permissions.readAny
    : permissions.readOwn;

  // TODO: return some kind of 403 error instead
  if (!read.granted) return null;

  const firestore = firebase.firestore();
  let query = firestore.collection('staff');

  // if the user only has permission to read their
  // own staff record, return it and ignore
  // any `where` clause
  if (read === permissions.readOwn) {
    query = query.where(firestore.FieldPath.documentId(), '==', user.uid);
  } else {
    if (queryOptions.where) {
      query = queryOptions.where.reduce((query, condition) => {
        log.warn({ ...parseCondition(condition) });
        return query.where(...parseCondition(condition));
      }, query);

      if (queryOptions.orderBy) {
        query = query.orderBy(queryOptions.orderBy);
      }
    }
  }

  if (queryOptions.select) {
    const select = isArray(queryOptions.select)
      ? queryOptions.select
      : [queryOptions.select];

    query = query.select(...select);
  }

  return query
    .get()
    .then((snapshot) => {
      return snapshot.docs
        .filter((document) => !document.isHidden)
        .map((document) => document.data());
    })
    .catch((error) => log.error(error, 'Firestore error'));
}

export async function updateCache() {
  // get everyone from G Suite
  const GoogleAuth = new google.auth.GoogleAuth({
    credentials: config.google.serviceAccount.credentials,
    projectId: config.google.serviceAccount.credentials.project_id,
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes:
      'https://www.googleapis.com/auth/admin.directory.user https://www.googleapis.com/auth/admin.directory.group'
  });

  const auth = await GoogleAuth.getClient();
  auth.subject = 'brian@egjarts.org'; // TODO: Move to config

  const service = google.admin('directory_v1');

  const staffUserAccounts = await service.users
    .list({
      auth: auth,
      customer: 'C0430mqjw', // TODO: Move to config
      query: { includeInGlobalAddressList: true },
      maxResults: 1
    })
    .catch((err) => {
      return { error: err };
    }); // todo: handle multiple pages of staff results
  if (staffUserAccounts.error) {
    log.error(staffUserAccounts.error);
    return null;
  }

  let staff = staffUserAccounts.data.users.map((user) => {
    return {
      name: {
        givenName: user.name.givenName || null,
        familyName: user.name.familyName || null,
        fullName: user.name.fullName || null,
        displayName: user.name.displayName || user.name.fullName
      },
      email: user.primaryEmail.toLowerCase(),
      // TODO: set business logic for determining whether a user is "Active" or "Inactive"
      status: user.suspended || user.archived ? 'Disabled' : 'Active',
      photoUrl: user.thumbnailPhotoUrl || null,
      dataSources: {
        google: {
          id: 106857903685852341871,
          emails: user.emails,
          thumbnailPhotoUrl: user.thumbnailPhotoUrl || null
        }
      },
      services: {
        gmail: {
          enabled: user.isMailboxSetup
        }
      },
      isDeleted: false
    };
  });

  let guests = await Promise.all([
    slackGuestStaff(staff),
    submittableGuestStaff(staff),
    submittableProspects(staff)
  ]).then((data) => data.flat());

  log.trace({ guests }, `Found ${guests.length} guest accounts`);
  return staff.concat(guests);
  const firestore = firebase.firestore();
  return staff.concat(guests).map((data) => {
    return firestore
      .collection('staff')
      .where('email', '==', data.email)
      .limit(1)
      .get()
      .then((snapshot) => {
        const size = snapshot.size || 0;
        log.trace(
          { size, snapshot, email: data.email },
          'Found {size} records for {email}'
        );
        if (snapshot.empty) {
          log.trace({ email: data.email }, 'Adding {email} to firestore');
          return firestore
            .collection('staff')
            .add(data)
            .get();
        } else {
          log.trace({ email: data.email }, 'Updating {email} in firestore');
          return snapshot.docs.reduce((document) =>
            document.ref
              .update(
                {
                  dataSources: data.dataSources
                },
                { merge: true }
              )
              .then(() => document.ref.get())
          );
        }
      })
      .then((document) => {
        log.trace(
          { document, type: typeof document },
          'Output document from Firestore'
        );
        return document.ref.get();
      })
      .catch((error) => log.error(error));
  });
}

const slackGuestStaff = async (staff) => {
  const slackUsers = await Slack.web.users.list();
  return slackUsers.members
    .filter((user) => {
      if (!user.profile.email) return false;

      const matched = staff.findIndex((item) =>
        item.dataSources.google.emails.some(
          (email) =>
            email.address.toLowerCase() === user.profile.email.toLowerCase()
        )
      );
      if (matched >= 0) {
        _.merge(staff[matched].dataSources, {
          slack: {
            id: user.id,
            email: user.profile.email.toLowerCase()
          }
        });
        _.merge(staff[matched].services, {
          slack: {
            id: user.id,
            email: user.profile.email.toLowerCase(),
            enabled: !user.deleted,
            team: user.team_id
          }
        });
        _.merge(staff[matched], {
          photoUrl: user.profile.image_original || user.profile.image_48,
          displayName: user.profile.display_name
        });
        return false;
      }
      return true;
    })
    .map((user) => {
      return {
        name: {
          givenName: user.profile.first_name || null,
          familyName: user.profile.last_name || null,
          fullName: user.profile.real_name,
          displayName: user.profile.display_name
        },
        email: user.profile.email.toLowerCase(),
        status: user.deleted ? 'Disabled' : 'Guest',
        photoUrl: user.profile.image_original || user.profile.image_48,
        services: {
          slack: {
            id: user.id,
            email: user.profile.email.toLowerCase(),
            enabled: !user.deleted,
            team: user.team_id
          }
        },
        dataSources: {
          slack: {
            id: user.id,
            email: user.profile.email.toLowerCase()
          }
        },
        isDeleted: user.deleted
      };
    });
};

const submittableProspects = async (staff) => {
  // get prospects from Submittable
  const submissionQuery = {
    categories: [58031, 74474]
  };
  return submissions.query(null, submissionQuery).then((staffSubmissions) => {
    return staffSubmissions
      .filter((submission) => {
        // try to find the prospect in G Suite by personal email
        const matched = staff.findIndex((item) =>
          item.dataSources.google.emails.some(
            (email) =>
              email.address.toLowerCase() ===
              submission.submitter.email.toLowerCase()
          )
        );
        if (matched >= 0) {
          _.merge(staff[matched].dataSources, {
            submittable: {
              personal: {
                email: submission.submitter.email.toLowerCase(),
                id: submission.submitter.user_id || null,
                application: submission.submission_id || null
              }
            }
          });
          return false;
        }
        return true;
      })
      .map((submission) => {
        const firstNameAndMiddle = [
          submission.submitter.first_name || '',
          submission.submitter.middle_initial || ''
        ]
          .join(' ')
          .trim();
        const fullName = [
          firstNameAndMiddle,
          submission.submitter.last_name || ''
        ]
          .join(' ')
          .trim();
        return {
          name: {
            givenName: firstNameAndMiddle,
            familyName: submission.submitter.last_name || null,
            fullName: fullName,
            displayName: submission.title
          },
          email: submission.submitter.email.toLowerCase(),
          status: submission.is_archived ? 'Archived' : 'Applied',
          photoUrl: null,
          dataSources: {
            submittable: {
              personal: {
                email: submission.submitter.email.toLowerCase(),
                id: submission.submitter.user_id || null,
                application: submission.id || null
              }
            }
          },
          isDeleted: false
        };
      });
  });
};

const submittableGuestStaff = (staff) => {
  return Submittable.get('https://egjpress.submittable.com/api/team/')
    .then((submittableTeam) => {
      // Any staff in Submittable who are not in Google get a status of "Guest"
      return submittableTeam.data.team
        .filter((user) => {
          if (!user.email) return false;

          // map the submittable account to the G Suite account
          const matched = staff.findIndex((item) =>
            item.dataSources.google.emails.some(
              (email) =>
                email.address.toLowerCase() === user.email.toLowerCase()
            )
          );

          if (matched >= 0) {
            _.merge(staff[matched].dataSources, {
              submittable: {
                staff: {
                  email: user.email.toLowerCase(),
                  id: user.userId
                }
              }
            });
            _.merge(staff[matched].services, {
              submittable: {
                id: user.userId,
                email: user.email.toLowerCase(),
                enabled: user.enabled
              }
            });
            log.trace(
              { user, matchingUser: staff[matched] },
              `Found an existing G Suite user for ${user.email}`
            );
            return false;
          }

          log.trace(
            { user },
            `Looks like ${user.email} doesn't have a G Suite account`
          );
          return true;
        })
        .map((user) => {
          return {
            name: {
              givenName: null,
              familyName: null,
              fullName: user.name,
              displayName: user.name
            },
            email: user.email.toLowerCase(),
            status: 'Guest',
            photoUrl: null,
            services: {
              submittable: {
                id: user.userId,
                email: user.email.toLowerCase(),
                enabled: user.enabled
              }
            },
            dataSources: {
              submittable: {
                staff: {
                  email: user.email.toLowerCase(),
                  id: user.userId
                }
              }
            },
            isDeleted: false
          };
        });
    })
    .catch((err) => log.error(err));
};

const parseCondition = (condition) => {
  if (_.isArray(condition)) return condition;
  const parsed = Object.entries(condition)[0];

  const operator = _.isArray(parsed[1]) ? 'in' : '==';

  parsed.splice(1, 0, operator);
  return parsed;
};
