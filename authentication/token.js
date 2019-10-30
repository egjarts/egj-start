const jwt = require('jsonwebtoken');
const config = require('config');

const providerConfig = config.get('authentication.provider.token');

module.exports = {
  sign: (subject, payload) => {
    const expiresIn = '1 hour';
    const audience = providerConfig.audience;
    const issuer = providerConfig.issuer;
    const secret = providerConfig.secret;

    const token = jwt.sign(payload, secret, {
      expiresIn: expiresIn,
      audience: audience,
      issuer: issuer,
      subject: subject.toString()
    });

    return token;
  }
};
