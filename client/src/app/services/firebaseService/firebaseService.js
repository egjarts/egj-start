import config from './firebaseServiceConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

class firebaseService {
  init(success) {
    if (Object.entries(config).length === 0 && config.constructor === Object) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          'Missing Firebase Configuration at src/app/services/firebaseService/firebaseServiceConfig.js'
        );
      }
      success(false);
      return;
    }

    if (firebase.apps.length) {
      return;
    }
    firebase.initializeApp(config);
    this.db = firebase.database();
    this.auth = firebase.auth();
    this.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
    success(true);
  }

  getUserPreferences = userId => {
    if (!firebase.apps.length) {
      return;
    }
    return new Promise((resolve, reject) => {
      this.db
        .ref(`users/${userId}/preferences`)
        .once('value')
        .then(snapshot => {
          const user = snapshot.val();
          resolve(user);
        });
    });
  };

  updateUserPreferences = user => {
    if (!firebase.apps.length || !user || !user.uid) {
      return Promise.reject();
    }
    return this.db.ref(`users/${user.uid}/preferences`).set(user.preferences);
  };

  onAuthStateChanged = callback => {
    if (!this.auth) {
      return;
    }
    this.auth.onAuthStateChanged(callback);
  };

  signOut = () => {
    if (!this.auth) {
      return;
    }
    this.auth.signOut();
  };

  dataType = {
    preferences: '/preferences'
  };
}

const instance = new firebaseService();

export default instance;
