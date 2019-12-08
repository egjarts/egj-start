import history from '@history';
import { setDefaultSettings, setInitialSettings } from 'app/store/actions/fuse';
import _ from '@lodash';
import store from 'app/store';
import * as Actions from 'app/store/actions';
import firebase from 'firebase/app';
import firebaseService from 'app/services/firebaseService';
import * as InitialState from '../InitialState';

export const SET_USER_DATA = '[USER] Load user data';
export const SET_USER_PREFERENCES = '[USER] Apply user preferences';
export const USER_LOGGED_OUT = '[USER] Signed out';

/*
Load user data from Firebase auth info
*/
export function setUserData(user) {
  return dispatch => {
    dispatch({
      type: SET_USER_DATA,
      user
    });
  };
}

/**
 * Load user preferences from Firebase data
 */
export function loadUserPreferences(preferences) {
  if (preferences) {
    // User preferences have already been loaded and merged;
    // apply them to the UI
    return setUserPreferences(preferences);
  } else {
    // Create missing user preferences
    return createUserPreferences();
  }
}

/**
 * Create a user preferences profile in Firebase
 */
export function createUserPreferences() {
  return (dispatch, getState) => {
    const context = getState().auth;

    let photoURL = context.user.photoURL;
    if (!photoURL && context.user.providerData) {
      const photoProvider = _.find(context.user.providerData, provider => {
        return provider.photoURL ? true : false;
      });
      if (photoProvider) photoURL = photoProvider.photoURL;
    }
    const user = _.merge({}, context.user, {
      preferences: {
        ...InitialState.preferences,
        displayName: context.user.displayName,
        email: context.user.email,
        photoURL: photoURL
      }
    });

    firebaseService.updateUserPreferences(user).catch(error => {
      store.dispatch(Actions.showMessage({ message: error.message }));
    });

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
      pathname: '/'
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
  if (!user || !user.uid) return;
  firebaseService
    .updateUserPreferences(user)
    .then(() => {
      store.dispatch(Actions.showMessage({ message: 'User settings saved' }));
    })
    .catch(error => {
      store.dispatch(Actions.showMessage({ message: error.message }));
    });
}
