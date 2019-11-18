const config = require('config');
const firebase = require('firebase-admin');
require('firebase');

const firebaseConfig = config.get('firebase');

firebase.initializeApp(firebaseConfig);

module.exports = async function(request, response, next) {
  const providerName = request.params['provider'] || 'token';

  const email = request.query.email;
  const password = request.query.password;

  const credential = firebase.auth.EmailAuthProvider.credential(
    email,
    password
  );

  response.json(credential);
};
