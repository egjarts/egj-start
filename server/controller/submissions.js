import log from '../log';
import { isString, isUndefined } from 'lodash';
import cache, { keys } from '../middleware/cache/cache';
import submittable from '../integrations/submittable/request';
import firebase from 'firebase-admin';

const submissions = {
  query: async function(user, queryOptions) {
    // let Submittable do as much of the initial filtering as possible
    let submittableQuery = { archived: false };

    if (queryOptions.categories)
      submittableQuery.categoryList = queryOptions.categories;

    return submittable
      .get(
        'https://egjpress.submittable.com/api/org/submissions/current',
        submittableQuery
      )
      .then(submittableResponse => {
        const idList = submittableResponse.data; // parse the whole list of requested submission IDs
        // and import them from submittable
        return Promise.all(
          idList.map(id => {
            const submission = cache.get(keys.submittable.submission(id));
            return (
              submission ||
              submittable
                .get(
                  `https://egjpress.submittable.com/api/org/submissions/${id}`
                )
                .then(submission => {
                  //console.info(`getting submission ${id} from submittable`);

                  cache.set(keys.submittable.submission(id), submission.data);
                  return submission.data;
                })
            );
          })
        );
      });
  }
};
export default submissions;
