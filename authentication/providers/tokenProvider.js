const passport = require('passport');
const provider = require('passport-jwt');
const config = require('config');

const providerConfig = config.get('authentication.provider.token');

const options = {
  jwtFromRequest: provider.ExtractJwt.fromHeader('x-auth-token'),
  secretOrKey: providerConfig.secret,
  issuer: providerConfig.issuer,
  audience: providerConfig.audience
};

passport.use(
  new provider.Strategy(options, (profile, done) => {
    console.log(profile);

    let user = null;
    if (profile) {
      user = { id: profile.id };
    }
    return done(null, user, profile);
  })
);
