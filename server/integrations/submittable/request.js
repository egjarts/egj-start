import log from '../../log';
import getAuthToken, {
  ApiToken
} from '../../integrations/submittable/authenticate';
import { create } from 'axios';
import { parse } from 'set-cookie-parser';
import qs from 'qs';

const submittableRequest = create({
  paramsSerializer: function(params) {
    return qs.stringify(params, { arrayFormat: 'repeat' });
  }
});

submittableRequest.interceptors.request.use(async function(request) {
  const tokenType = getTokenType(request.url);

  switch (tokenType) {
    case TokenType.API:
      request.auth = { username: ApiToken, password: ApiToken };
      break;
    case TokenType.JWT:
      await getAuthToken().then(token => {
        request.headers['cookie'] = `smm=${token}`;
      });
      break;
  }

  return request;
});

submittableRequest.interceptors.response.use(async function(response) {
  const smm = parse(response, { map: true }).smm;
  if (smm) {
    const token = smm.value;
    const ttl = moment(smm.expires).diff(moment(), 'seconds') - 600;

    log.trace(
      `Caching Submittable authentication token for ${ttl}s (${moment()
        .seconds(ttl)
        .hours()}h)`
    );

    // cache the new token
    cache.set(keys.submittable.authentication.token, token, ttl);
  }
  return response;
});

export default submittableRequest;

// TODO: cache whatever smm cookie comes back from the request, too

// determine whether this request needs an API token or a JWT
const TokenType = {
  API: 'API',
  JWT: 'JWT'
};

const getTokenType = url => {
  if (url.startsWith('https://api.submittable.com')) return TokenType.API;

  return TokenType.JWT;
};

submittableRequest.interceptors.request.use(async function(request) {
  log.trace(request, 'Request to submittable');
  return request;
});

submittableRequest.interceptors.response.use(async function(response) {
  log.trace(response, 'Response from submittable');
  return response;
});
