export const RESET_ROUTES = '[ROUTING] Reset Routes';
export const SET_USER_ROUTES = '[ROUTING] Set User Routes';

export function resetRoutes() {
  return dispatch => {
    dispatch({
      type: RESET_ROUTES
    });
  };
}

export function setUserRoutes(user) {
  if (!user) {
    return dispatch => {
      dispatch({
        type: RESET_ROUTES
      });
    };
  }

  return dispatch => {
    dispatch({
      type: SET_USER_ROUTES,
      user
    });
  };
}
