import firebaseService from 'app/services/firebaseService';
import * as Actions from 'app/store/actions';
import * as userActions from './user.actions';

export const AUTH_PROCESSING =
  '[AUTHENTICATION] Processing Authentication Request';
export const AUTH_ERROR = '[AUTHENTICATION] ERROR';
export const AUTH_SUCCESS = '[AUTHENTICATION] Successfully Authenticated';

export function setLoginStatus(status, token) {
  return dispatch =>
    dispatch(
      !status
        ? { type: userActions.USER_LOGGED_OUT }
        : { type: AUTH_SUCCESS, token }
    );
}

export function authenticate(provider, data) {
  return dispatch => {
    switch (provider) {
      case 'google':
        return authenticateWithGoogle(data)(dispatch);
      case 'password':
        return authenticateWithEmail(data)(dispatch);
      default:
        return dispatch({
          type: AUTH_ERROR
        });
    }
  };
}

function authenticateWithEmail({ username, password }) {
  return dispatch =>
    firebaseService.auth &&
    firebaseService.auth
      .signInWithEmailAndPassword(username, password)
      .then(result => {
        result.user.getIdToken().then(token => {
          return dispatch({
            type: AUTH_SUCCESS,
            token
          });
        });
      })
      .catch(error => {
        console.error(error);
        if (error.code === 'auth/invalid-api-key') {
          dispatch(Actions.showMessage({ message: error.message }));
        }

        const response = {
          password: 'Either the email or password was incorrect.'
        };

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
    firebaseService.auth.signInWithPopup(provider).then(result => {
      result.user.getIdToken().then(token => {
        return dispatch({
          type: AUTH_SUCCESS,
          token
        });
      });
    });
}
