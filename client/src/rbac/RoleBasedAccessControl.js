import React, { Component } from "react";
import RbacUtils from "./RbacUtils";
import { matchRoutes } from "react-router-config";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppContext from "app/AppContext";

class RoleBasedActionControl extends Component {
  constructor(props, context) {
    super(props);
    const { routes } = context;
    this.state = {
      accessGranted: true,
      routes
    };
  }

  componentDidMount() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  componentDidUpdate() {
    if (!this.state.accessGranted) {
      this.redirectRoute();
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { location, auth } = props;
    const { pathname } = location;

    const matched = matchRoutes(state.routes, pathname)[0];

    return {
      accessGranted: matched
        ? RbacUtils.isAuthorized(matched.route, auth)
        : true
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.accessGranted !== this.state.accessGranted;
  }

  redirectRoute() {
    const { location, auth, history } = this.props;
    const { pathname, state } = location;
    const redirectUrl =
      state && state.redirectUrl ? state.redirectUrl : "/home";

    /*
        User is guest
        Redirect to Login Page
        */
    if (!auth.login.success) {
      history.push({
        pathname: "/login",
        state: { redirectUrl: pathname }
      });
    } else {
      history.push({
        pathname: redirectUrl
      });
    }
  }

  render() {
    return this.state.accessGranted ? (
      <React.Fragment>{this.props.children}</React.Fragment>
    ) : null;
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

RoleBasedActionControl.contextType = AppContext;

export default withRouter(connect(mapStateToProps)(RoleBasedActionControl));
