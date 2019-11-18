import history from "@history";
import { setDefaultSettings, setInitialSettings } from "app/store/actions/fuse";
import _ from "@lodash";
import store from "app/store";
import * as Actions from "app/store/actions";
import firebase from "firebase/app";
import firebaseService from "app/services/firebaseService";

export const SET_USER_PREFERENCES = "[USER] SET USER DATA";
export const USER_LOGGED_OUT = "[USER] LOGGED OUT";

/**
 * Set user data from Firebase data
 */
export function loadUserPreferences(user, authUser) {
  if (user && user.preferences) {
    // User preferences have already been loaded and merged;
    // apply them to the UI
    return setUserPreferences(user.preferences);
  } else {
    // Create missing user preferences
    return createUserPreferences(authUser);
  }
}

/**
 * Create a user preferences profile in Firebase
 */
export function createUserPreferences(authUser) {
  return (dispatch, getState) => {
    const context = getState().auth;
    const fuseDefaultSettings = getState().fuse.settings.defaults;
    const currentUser = firebase.auth().currentUser;

    /**
     * Merge with current Settings
     */
    const user = _.merge({}, context.user, {
      uid: authUser.uid,
      preferences: {
        displayName: authUser.displayName,
        email: authUser.email,
        settings: { ...fuseDefaultSettings }
      }
    });
    currentUser.updateProfile(user.preferences);

    saveUserPreferences(user);

    return dispatch(setUserPreferences(user.preferences));
  };
}

/**
 * Set User Preferences
 */
export function setUserPreferences(preferences) {
  return dispatch => {
    /*
        Apply preferred settings to the UI
         */
    dispatch(setDefaultSettings(preferences.settings));

    // Let the store know that user preferences have changed

    dispatch({
      type: SET_USER_PREFERENCES,
      preferences
    });
  };
}

/**
 * Update User Settings
 */
export function updateUserSettings(settings) {
  return (dispatch, getState) => {
    const context = getState().auth;

    const user = _.merge({}, context.user, {
      preferences: { settings }
    });

    if (context.login.success) saveUserPreferences(user);

    return dispatch(setUserPreferences(user.preferences));
  };
}

/**
 * Update User Shortcuts
 */
export function updateUserShortcuts(shortcuts) {
  return (dispatch, getState) => {
    const context = getState().auth;

    const user = _.merge({}, context.user, {
      preferences: { shortcuts }
    });

    // if the user has been authenticated, save the
    // new preferences to Firebase
    if (context.login.success) saveUserPreferences(user);

    return dispatch(setUserPreferences(user.preferences));
  };
}

/**
 * Logout
 */
export function logoutUser() {
  return (dispatch, getState) => {
    const auth = getState().auth;

    if (!auth.login.success) {
      // is guest
      return null;
    }

    history.push({
      pathname: "/"
    });

    firebaseService.signOut();

    dispatch(setInitialSettings());

    dispatch({
      type: USER_LOGGED_OUT
    });
  };
}

/**
 * Persist user preferences to Firebase
 */
function saveUserPreferences(user) {
  firebaseService
    .updateUserData(user, firebaseService.dataType.preferences)
    .then(() => {
      store.dispatch(Actions.showMessage({ message: "User settings saved" }));
    })
    .catch(error => {
      store.dispatch(Actions.showMessage({ message: error.message }));
    });
}
