const passport = require('passport');
const provider = require('passport-google-id-token');
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
    (request, token, id, done) => {
      console.log('Google ID Token Provider');
      let user = null;

      user = { id: profile.id };
      return done(null, user, profile);
    }
  )
);
