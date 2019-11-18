const passport = require('passport');
const provider = require('passport-google-oauth20');
const config = require('config');
const User = require('../model/User');

const providerConfig = config.get('authentication.provider.google');

const options = {
  clientID: providerConfig.clientId,
  clientSecret: providerConfig.clientSecret,
  passReqToCallback: true
};

passport.use(
  new provider.Strategy(
    options,
    (request, accessToken, refreshToken, params, profile, done) => {
      console.log('Google Authentication Provider');
      let user = null;

    

      /*       // if there is no user on the request, the user is not logged in at all.
      // Authenticate with Google credentials.
      if (!request.user) {
        // look up the user by provider id first
        user = User.findOne({
          'authentication.provider': 'google',
          'authentication.id': profile.id
        });

        // if there's no user with that provider id, check to see if they
        // have an account with a matching email address
      }

      // if there is no user with that provider id, look to see if they
      if (!user) {
        user = users.createUser(profile.displayName, 'google', profile.id);
      } */
      user = { id: profile.id };
      return done(null, user, profile);
    }
  )
);
