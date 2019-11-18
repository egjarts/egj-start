import * as Actions from "../actions";

const emptyState = {
  preferences: {
    displayName: "Guest",
    photoURL: "",
    email: "",
    shortcuts: []
  },
  modules: []
};

const user = function(state = emptyState, action) {
  switch (action.type) {
    case Actions.SET_USER_PREFERENCES: {
      return {
        ...state,
        preferences: {
          ...action.preferences
        }
      };
    }
    case Actions.USER_LOGGED_OUT: {
      return emptyState;
    }
    default: {
      return state;
    }
  }
};

export default user;
