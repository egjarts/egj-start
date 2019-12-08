import _ from 'lodash';
import React, { Component } from 'react';
import { matchRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppContext from 'app/context/AppContext';
import axios from 'axios';
import * as authActions from 'app/auth/store/actions';
import AccessControlBase from 'accesscontrol';

class AccessControlComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessGranted: true,
      match: null
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

  static getDerivedStateFromProps(props) {
    const { location, auth, routes } = props;
    const { pathname } = location;

    let match = null,
      accessGranted = false;

    const matched = matchRoutes(routes, pathname)[0];
    if (matched) {
      const permission = Can(auth.user).read(matched.route.id);

      accessGranted = permission.granted;
      match = matched.match;
    }

    return {
      accessGranted,
      match
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.accessGranted !== this.state.accessGranted;
  }

  redirectRoute() {
    const { match } = this.state;
    const { location, auth, history } = this.props;
    const { pathname, state } = location;

    /*
      User is not currently logged in
    */
    if (!auth.login.success) {
      // check to see if the path has a one-time password
      if (match && match.params && match.params.otp) {
        // pass the otp to the server
        axios
          .get(`/auth/start/otp/${match.params.otp}`)
          .then(response => {
            if (!response.data || !response.data.email) throw new Error();

            const email = response.data.email;
            this.props.authenticate('password', {
              username: email,
              password: match.params.otp
            });
            history.replace({
              pathname: match.url.replace('/' + match.params.otp, '')
            });
          })
          .catch(error => {
            history.push({
              pathname: '/login',
              state: { redirectUrl: pathname }
            });
          });
      } else {
        history.push({
          pathname: '/login',
          state: { redirectUrl: pathname }
        });
      }
    } else {
      history.push({
        pathname: state && state.redirectUrl ? state.redirectUrl : '/home'
      });
    }
  }

  render() {
    return this.state.accessGranted ? (
      <React.Fragment>{this.props.children}</React.Fragment>
    ) : null;
  }
}

function mapStateToProps({ auth, routes }) {
  return {
    auth,
    routes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      authenticate: authActions.authenticate
    },
    dispatch
  );
}

AccessControlComponent.contextType = AppContext;

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AccessControlComponent)
);

const acInstance = new AccessControlBase(
  ['Staff', 'Authenticated', 'Anonymous', 'Default'].map(role => {
    return {
      role: role,
      resource: 'app',
      action: 'read'
    };
  })
);

class AccessControl extends AccessControlBase {
  static get global() {
    return acInstance;
  }
  static get actions() {
    return {
      create: 'create:any',
      createAny: 'create:any',
      createOwn: 'create:own',
      read: 'read:any',
      readAny: 'read:any',
      readOwn: 'read:own',
      update: 'update:any',
      updateAny: 'update:any',
      updateOwn: 'update:own',
      delete: 'delete:any',
      deleteAny: 'delete:any',
      deleteOwn: 'delete:own'
    };
  }
  static get attributes() {
    return {
      any: ['*'],
      except: function() {
        let except = Array.isArray(arguments[0])
          ? arguments[0]
          : Array.from(arguments);
        return ['*'].concat(except.map(item => `!${item}`));
      },
      only: function() {
        return Array.isArray(arguments[0])
          ? arguments[0]
          : Array.from(arguments);
      },
      denyAll: []
    };
  }
  static merge(grants) {
    return AccessControl.global.setGrants(
      _.merge(
        {},
        AccessControl.global.getGrants(),
        new AccessControlBase(grants).getGrants()
      )
    );
  }

  static get grants() {
    return AccessControl.global.getGrants();
  }

  static set grants(value) {
    return AccessControl.global.setGrants(value);
  }

  static can(query) {
    var safeQuery = query;

    // Make sure the query is safe by only including roles
    // the global access control object actually holds
    if (_.isArray(query.roles)) {
      // enables a shorthand where we simply
      // pass in a user object with a roles
      // property already attached to it
      safeQuery = query.roles.filter(role =>
        AccessControl.global.hasRole(role)
      );
    } else if (_.isArray(query)) {
      // Uses the default behavior for passing an array of roles,
      // but filters out any roles not managed by AccessControl
      safeQuery = query.filter(role => AccessControl.global.hasRole(role));
    } else if (_.isString(query)) {
      // Uses the default behavior for passing a string role name,
      // but replaces it with "Default" if the role isn't managed by AccessControl
      safeQuery = AccessControl.global.hasRole(query) ? query : 'Default';
    }

    return AccessControl.global.can(safeQuery);
  }
}

export { AccessControl };
export function Can(query) {
  return AccessControl.can(query);
}
