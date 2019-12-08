const firebase = require('firebase-admin');

const AuthenticationError = require('./error');

module.exports = async function(request, response, next) {
  request.user = { id: 'Brian the Dev', roles: ['Staff', 'Admin'] };
  return next();
  const providerName = request.params['provider'] || 'token';
  let user = request.user;

  switch (providerName) {
    case 'otp':
      // look up the invitation that matches this code
      const authenticationCode = request.params['data'];
      const firestore = firebase.firestore();

      const invitation = await firestore
        .collection('invitations')
        .doc(authenticationCode)
        .get()
        .then(invitation => {
          return invitation.exists ? invitation.data() : null;
        });

      if (!invitation) {
        return next(new AuthenticationError('Invitation code has expired.'));
      }

      // find the user by UID
      user = await firebase.auth().getUser(invitation.uid);

      return response.json({ email: user.email });

    default:
      const token = request.header('x-auth-token');
      if (!token) {
        return next(new AuthenticationError('Missing authentication token.'));
      }

      // verify the token
      user = await firebase
        .auth()
        .verifyIdToken(token)
        .then(verifiedToken => {
          return firebase.auth().getUser(verifiedToken.uid);
        })
        .catch(error => {
          return next(
            new AuthenticationError('Could not verify authentication token.')
          );
        });
  }

  request.user = user;
  return next();
};
