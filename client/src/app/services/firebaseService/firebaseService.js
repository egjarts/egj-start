import config from './firebaseServiceConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

class FirebaseService {
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

  getUserData = (userId, dataField = FirebaseService.dataField.all) => {
    if (!firebase.apps.length) {
      return;
    }
    return new Promise((resolve, reject) => {
      this.db
        .ref(`users/${userId}${dataField}`)
        .once('value')
        .then(snapshot => {
          const data = snapshot.val();
          resolve(data);
        });
    });
  };

  getUserPreferences = userId => {
    return this.getUserData(userId, FirebaseService.dataField.preferences);
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

  static get dataField() {
    return {
      all: '',
      preferences: '/preferences'
    };
  }
}

const instance = new FirebaseService();

export default instance;
