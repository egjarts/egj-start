import _ from 'lodash';
import * as Actions from '../actions';
import * as InitialState from '../InitialState';

const user = function(state = InitialState.user, action) {
  switch (action.type) {
    case Actions.AUTH_SUCCESS: {
      const user = { ...state };
      if (user.roles) {
        // if the user currently has either auth role
        // (Anonymous or Authenticated), remove it
        const authRoles = [
          InitialState.roles.anonymous,
          InitialState.roles.authenticated
        ];
        _.remove(user.roles, role => {
          return authRoles.includes(role);
        });
        // Apply the Authenticated role (and we know there's
        // just one because we cleared any extras above)
        user.roles.unshift(InitialState.roles.authenticated);
      } else {
        user.roles = [InitialState.roles.authenticated];
      }
      console.group(action.type);
      console.info(user);
      console.groupEnd();

      return user;
    }
    case Actions.SET_USER_DATA: {
      const userData = Object.keys(action.user)
        .filter(key => {
          return InitialState.user.hasOwnProperty(key);
        })
        .reduce((data, key) => {
          return { ...data, [key]: action.user[key] };
        }, {});
      const user = { ...state, ...userData };
      console.group(action.type);
      console.info(user);
      console.groupEnd();
      return user;
    }
    case Actions.SET_USER_PREFERENCES: {
      let preferences = InitialState.preferences;
      if (action)
        preferences = action.preferences ? action.preferences : action;

      const user = {
        ...state,
        preferences: {
          ...preferences
        }
      };

      console.group(action.type);
      console.info(user);
      console.groupEnd();

      return user;
    }
    case Actions.USER_LOGGED_OUT: {
      return { ...InitialState.user, roles: [InitialState.roles.anonymous] };
    }
    default: {
      return state;
    }
  }
};

export default user;
