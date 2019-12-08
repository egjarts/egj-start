import _ from 'lodash';
import React, { Component } from 'react';

import { FuseSplashScreen } from '@fuse';
import { connect } from 'react-redux';
import * as userActions from 'app/auth/store/actions';
import { bindActionCreators } from 'redux';
import * as Actions from 'app/store/actions';
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
            if (this.props.login.token !== token) {
              this.props.setLoginStatus(true, token);
            }

            /**
             * Retrieve user data from Firebase
             */
            firebaseService.getUserData(user.uid).then(
              userData => {
                this.props.setUserData(_.merge({}, user, userData));

                this.props.loadUserPreferences(userData.preferences);

                resolve();
              },
              error => {
                resolve();
              }
            );
          });
        } else {
          if (this.props.login.success) this.props.setLoginStatus(false);

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

function mapStateToProps({ auth }) {
  return {
    login: auth.login
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
