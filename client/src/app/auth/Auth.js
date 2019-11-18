import React, { Component } from "react";
import { FuseSplashScreen } from "@fuse";
import { connect } from "react-redux";
import * as userActions from "app/auth/store/actions";
import { bindActionCreators } from "redux";
import * as Actions from "app/store/actions";
import AppContext from "app/AppContext";
import firebaseService from "app/services/firebaseService";

class Auth extends Component {
  constructor(props, context) {
    super(props);
    this.updateUserRoutes = context.updateUserRoutes;
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

      firebaseService.onAuthStateChanged(authUser => {
        if (authUser) {
          // the user may have been authenticated by a cookie / persisted session
          this.props.setLoginStatus(true);

          /**
           * Retrieve user data from Firebase
           */
          firebaseService.getUserData(authUser.uid).then(
            user => {
              this.props.loadUserPreferences(user, authUser);
              resolve();
            },
            error => {
              resolve();
            }
          );
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
      setUserData: userActions.setUserPreferences,
      loadUserPreferences: userActions.loadUserPreferences,
      showMessage: Actions.showMessage,
      hideMessage: Actions.hideMessage
    },
    dispatch
  );
}

Auth.contextType = AppContext;

export default connect(null, mapDispatchToProps)(Auth);
