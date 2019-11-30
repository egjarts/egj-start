const firebase = require("firebase-admin");

const AuthenticationError = require("./error");

module.exports = async function(request, response, next) {
  const providerName = request.params["provider"] || "token";
  switch (providerName) {
    case "otp":
      // look up the invitation that matches this code
      const authenticationCode = request.params["data"];
      const firestore = firebase.firestore();

      const invitation = await firestore
        .collection("invitations")
        .doc(authenticationCode)
        .get()
        .then(invitation => {
          return invitation.exists ? invitation.data() : null;
        });

      if (!invitation) {
        return next(new AuthenticationError("Invitation code has expired."));
      }

      // find the user by UID
      const user = await firebase.auth().getUser(invitation.uid);

      return response.json({ email: user.email });

      // return a credential object with the matching email

      // thrown an error if the code is expired
      break;
    default:
      const token = request.header("x-auth-token");
      if (!token) {
        return next(new AuthenticationError("Missing authentication token."));
      }
  }

  /* const email = request.query.email;
  const password = request.query.password;

  const credential = firebase.auth.EmailAuthProvider.credential(
    email,
    password
  );

  response.json(credential);
  */
  return next();
};
