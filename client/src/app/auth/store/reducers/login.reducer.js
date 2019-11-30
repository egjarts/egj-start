import * as Actions from '../actions';
import * as InitialState from '../InitialState';

const login = function(state = InitialState.login, action) {
  switch (action.type) {
    case Actions.AUTH_PROCESSING: {
      return {
        ...InitialState.login,
        processing: true
      };
    }
    case Actions.AUTH_SUCCESS: {
      return {
        ...InitialState.login,
        success: true,
        token: action.token
      };
    }
    case Actions.AUTH_ERROR: {
      return {
        ...InitialState.login,
        error: action.payload
      };
    }
    case Actions.USER_LOGGED_OUT: {
      return { ...InitialState.login };
    }
    default: {
      return state;
    }
  }
};

export default login;
