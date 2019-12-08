import _ from 'lodash';
import React, { Fragment } from 'react';
import * as Config from 'app/config/routes.config';
import * as RouteActions from '../actions/routes.actions';
import * as AuthActions from 'app/auth/store/actions';
import RandomString from 'crypto-random-string';
import { AccessControl, Can } from 'app/auth/AccessControl';

export const routeMiddleware = store => next => action => {
  switch (action.type) {
    case '@@INIT':
    case AuthActions.USER_LOGGED_OUT:
      next(action);
      return store.dispatch(RouteActions.resetRoutes());
    case AuthActions.SET_USER_DATA:
      next(action);
      return store.dispatch(
        RouteActions.setUserRoutes({ roles: action.user.roles })
      );
    default:
      return next(action);
  }
};

const routes = function(
  state = getUserRoutes({ roles: ['Anonymous'] }),
  action
) {
  switch (action.type) {
    case RouteActions.RESET_ROUTES:
      return getUserRoutes({ roles: ['Anonymous'] });
    case RouteActions.SET_USER_ROUTES:
      return getUserRoutes(action.user);
    default: {
      return state;
    }
  }
};

export default routes;

const setRoutes = component => {
  if (!component.routes) return;
  let routes = [...component.routes];

  routes = routes.map(route => {
    // Get the default values from the component configration
    let id = component.id ? component.id : RandomString({ length: 10 });
    let displayName = component.displayName ? component.displayName : id;

    // by default, all routes require authentication,
    // so if the route doesn't specify any access control
    // we'll add only that one
    let accessControl =
      component.accessControl !== undefined
        ? component.accessControl
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
        ...component.settings,
        ...route.settings
      },
      accessControl // retained for later reference but probably not needed
    };
  });

  return [...routes];
};

const AllRoutes = (function() {
  let allRoutes = [];
  Config.RoutableComponents.forEach(component => {
    allRoutes = [...allRoutes, ...setRoutes(component)];
  });

  return allRoutes;
})();

const getUserRoutes = user => {
  if (!user || !user.roles) return AllRoutes;

  const userRoutes = _.clone(AllRoutes);

  const homeRouteName =
    Config.HomeRoutes[
      _.find(Object.keys(Config.HomeRoutes), roleName =>
        user.roles.includes(roleName)
      )
    ] || '*';

  const homeRoute = _.cloneDeep(
    _.find(userRoutes, route => [route.id, route.path].includes(homeRouteName))
  );

  userRoutes.push({ ...homeRoute, path: ['/home', '*'], exact: true });

  return userRoutes;
};
