import log from '../../log';
import config from '../../config/config';
import cache, { keys } from '../../middleware/cache/cache';
import { parse } from 'set-cookie-parser';
import { post } from 'axios';
import moment from 'moment';

// authenticate to submittable
export default async function(forceRefresh = false) {
  // get the authentication token from cache
  let token = cache.get(keys.submittable.authentication.token);

  // if it is missing or expired, or if forceRefresh = true,
  // sign in to Submittable and get a new token
  if (!token || forceRefresh) {
    const data = config.submittable.serviceAccount;
    const smm = await post(
      'https://egjpress.submittable.com/api/account/signin',
      data
    ).then(response => {
      return parse(response, { map: true }).smm;
    });
    token = smm.value;
    const ttl = moment(smm.expires).diff(moment(), 'seconds') - 600;
    log.trace(
      `Caching Submittable authentication token for ${ttl}s (${moment()
        .seconds(ttl)
        .hours()}h)`
    );

    // cache the new token
    cache.set(keys.submittable.authentication.token, token, ttl);
  }

  // return the new token
  return token;
}

export const ApiToken = config.submittable.ApiToken;
