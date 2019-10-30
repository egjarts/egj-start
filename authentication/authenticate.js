const passport = require('passport');

module.exports = function(request, response, next) {
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
