class RouteUtils {
  static setRoutes(config) {
    let routes = [...config.routes];

    routes = routes.map(route => {
      // by default, all routes require authentication
      let authentication =
        config.authentication !== undefined ? config.authentication : true;

      authentication =
        route.authentication !== undefined
          ? route.authentication
          : authentication;

      // by default, routes do not require any specific
      // authorization
      let authorization =
        config.authorization !== undefined ? config.authorization : true;

      authorization =
        route.authorization !== undefined ? route.authorization : authorization;

      return {
        ...route,
        settings: { ...config.settings, ...route.settings },
        authentication,
        authorization,
        module: { ...config.module, ...route.module }
      };
    });

    return [...routes];
  }

  static generateRoutes(configs) {
    let allRoutes = [];
    configs.forEach(config => {
      allRoutes = [...allRoutes, ...this.setRoutes(config)];
    });

    return allRoutes;
  }

  static withUserHomeRoute(routes, user) {
    console.log({ routes, user });
    if (!user || !user.home) {
      return routes;
    }

    return routes;
  }
}

export default RouteUtils;
