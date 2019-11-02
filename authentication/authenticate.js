const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function(request, response, next) {
  // first look for a token in the request header, since that's
  // where it will be if the user has already been authenticated
  var token = request.header('x-auth-token');

  // if there wasn't one, check to see if there's a token in the
  // request body instead
  if (!token) {
    token = request.body;
  }

  

  const provider = request.params['provider'] || 'jwt';
  if (provider == 'token') provider = 'jwt';

  let options = {
    session: false,
    failWithError: true
  };

  switch (provider) {
    case 'google':
      options.callbackURL = `/auth/success/${provider}`;
      options.scope = ['openid', 'profile', 'email'];
      options.hd = '*';
      break;
  }
  console.log(`Attempting to authenticate with ${provider}`);
  console.log(request.user);

  return passport.authenticate(provider, options)(request, response, next);
};
