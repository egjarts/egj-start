import _ from 'lodash';
import RandomString from 'crypto-random-string';
import { AccessControl } from 'app/auth/AccessControl';

class RouteUtils {
  static setRoutes(config) {
    if (!config.routes) return;
    let routes = [...config.routes];

    routes = routes.map(route => {
      // Get the default values from the config
      let id = config.id ? config.id : RandomString({ length: 10 });
      let displayName = config.displayName ? config.displayName : id;

      // by default, all routes require authentication,
      // so if the route doesn't specify any access control
      // we'll add only that one
      let accessControl =
        config.accessControl !== undefined
          ? config.accessControl
          : {
              grant: {
                Authenticated: 'read'
              }
            };

      // apply route-specific overrides, if any
      if (route.id) id = route.id;

      if (route.displayName) displayName = route.displayName;

      if (route.accessControl !== undefined) {
        accessControl = route.accessControl;
      }

      // Parse the route's access control shorthand to create
      // global access control
      let grants = [];
      Object.keys(accessControl).map(type => {
        // we don't yet have route-specific attribute filtering needs
        const attributes =
          type === 'grant'
            ? AccessControl.attributes.any
            : AccessControl.attributes.denyAll;

        Object.keys(accessControl[type]).map(role => {
          let actions = accessControl[type][role];
          if (!_.isArray(actions)) {
            actions = actions.split(',');
          }
          actions.map(action => {
            action = action.trim();
            grants.push({
              role,
              resource: id,
              action,
              attributes
            });
          });
        });
      });

      AccessControl.merge(grants);

      return {
        ...route,
        id,
        displayName,
        settings: {
          ...config.settings,
          ...route.settings
        },
        accessControl // retained for later reference but probably not needed
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
    if (!user || !user.home) {
      return routes;
    }

    return routes;
  }
}

export default RouteUtils;
