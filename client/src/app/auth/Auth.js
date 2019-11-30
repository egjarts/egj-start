import React, { Component } from 'react';
import { FuseSplashScreen } from '@fuse';
import { connect } from 'react-redux';
import * as userActions from 'app/auth/store/actions';
import { bindActionCreators } from 'redux';
import * as Actions from 'app/store/actions';
import AppContext from 'app/context/AppContext';
import firebaseService from 'app/services/firebaseService';

class Auth extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      waitAuthCheck: true
    };
  }

  componentDidMount() {
    return Promise.all([this.firebaseCheck()]).then(() => {
      this.setState({ waitAuthCheck: false });
    });
  }

  firebaseCheck = () =>
    new Promise(resolve => {
      firebaseService.init(success => {
        if (!success) {
          resolve();
        }
      });

      firebaseService.onAuthStateChanged(user => {
        if (user && !user.isAnonymous) {
          // the user may have been authenticated by a cookie / persisted session
          user.getIdToken().then(token => {
            if (user.roles) {
              user.roles.unshift('Authenticated');
            } else {
              user.roles = ['Authenticated'];
            }
            this.props.setLoginStatus(true, token);
            this.props.setUserData(user);

            /**
             * Retrieve user preferences from Firebase
             */
            firebaseService.getUserPreferences(user.uid).then(
              preferences => {
                this.props.loadUserPreferences(preferences, user);
                resolve();
              },
              error => {
                resolve();
              }
            );
          });
        } else {
          this.props.setLoginStatus(false);

          resolve();
        }
      });

      return Promise.resolve();
    });

  render() {
    return this.state.waitAuthCheck ? (
      <FuseSplashScreen />
    ) : (
      <React.Fragment children={this.props.children} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logout: userActions.logoutUser,
      setLoginStatus: userActions.setLoginStatus,
      setUserPreferences: userActions.setUserPreferences,
      loadUserPreferences: userActions.loadUserPreferences,
      setUserData: userActions.setUserData,
      showMessage: Actions.showMessage,
      hideMessage: Actions.hideMessage
    },
    dispatch
  );
}

Auth.contextType = AppContext;

export default connect(null, mapDispatchToProps)(Auth);
