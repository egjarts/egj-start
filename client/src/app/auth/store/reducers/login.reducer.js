import * as Actions from "../actions";

const initialState = {
  success: false,
  error: {
    username: null,
    password: null
  },
  processing: false
};

const login = function(state = initialState, action) {
  switch (action.type) {
    case Actions.AUTH_PROCESSING: {
      return {
        ...initialState,
        processing: true
      };
    }
    case Actions.AUTH_SUCCESS: {
      return {
        ...initialState,
        success: true
      };
    }
    case Actions.AUTH_ERROR: {
      return {
        ...initialState,
        error: action.payload
      };
    }
    case Actions.USER_LOGGED_OUT: {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default login;
