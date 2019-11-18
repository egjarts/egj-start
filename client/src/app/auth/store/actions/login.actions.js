import firebaseService from "app/services/firebaseService";
import * as Actions from "app/store/actions";
import * as userActions from "./user.actions";

export const AUTH_PROCESSING = "AUTH_PROCESSING";
export const AUTH_ERROR = "AUTH_ERROR";
export const AUTH_SUCCESS = "AUTH_SUCCESS";

export function setLoginStatus(status) {
  return dispatch =>
    dispatch({ type: status ? AUTH_SUCCESS : userActions.USER_LOGGED_OUT });
}

export function authenticate(provider, data) {
  return dispatch => {
    switch (provider) {
      case "google":
        return authenticateWithGoogle(data)(dispatch);
      case "password":
        return authenticateWithEmail(data)(dispatch);
      default:
        return dispatch({
          type: AUTH_ERROR
        });
    }
  };
}

// todo: make error codes more secure
function authenticateWithEmail({ username, password }) {
  return dispatch =>
    firebaseService.auth &&
    firebaseService.auth
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        return dispatch({
          type: AUTH_SUCCESS
        });
      })
      .catch(error => {
        const usernameErrorCodes = [
          "auth/email-already-in-use",
          "auth/invalid-email",
          "auth/operation-not-allowed",
          "auth/user-not-found",
          "auth/user-disabled"
        ];
        const passwordErrorCodes = [
          "auth/weak-password",
          "auth/wrong-password"
        ];

        const response = {
          username: usernameErrorCodes.includes(error.code)
            ? error.message
            : null,
          password: passwordErrorCodes.includes(error.code)
            ? error.message
            : null
        };

        if (error.code === "auth/invalid-api-key") {
          dispatch(Actions.showMessage({ message: error.message }));
        }

        return dispatch({
          type: AUTH_ERROR,
          payload: response
        });
      });
}

function authenticateWithGoogle(options) {
  // todo: check to see if we're on mobile, then use
  // redirect instead of popup

  const provider = firebaseService.GoogleAuthProvider;
  provider.setCustomParameters({
    hd: options.hostedDomain
  });
  return dispatch =>
    firebaseService.auth &&
    firebaseService.auth &&
    firebaseService.auth.signInWithPopup(provider).then(() => {
      return dispatch({
        type: AUTH_SUCCESS
      });
    });
}
