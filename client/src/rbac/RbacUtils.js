class RbacUtils {
  static isAuthorized(route, auth) {
    const authenticationCheck = (route, auth) => {
      return (
        // if the route requires authentication and the user is authenticated,
        // or the route prohibits authentication and the user is not authenticated,
        route.authentication === auth.login.success ||
        // or if the route doesn't require or prohibit authentication either way,
        route.authentication === null ||
        route.authentication === undefined
        // then the authentication check passes
      );
    };

    const moduleCheck = (route, auth) => {
      if (
        // if the route's module is not restricted, the module check passes
        route.module === null ||
        route.module === undefined ||
        !route.module.restricted
      )
        return true;

      // if the route's module id is in the list of allowed modules for the user,
      // the module check passes
      return (
        auth.user.modules &&
        auth.user.modules.filter(module => module.id === route.module.id)
          .length > 0
      );
    };

    return authenticationCheck(route, auth) && moduleCheck(route, auth);
  }
}

export default RbacUtils;
