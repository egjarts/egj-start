import * as Config from 'app/config/routes.config';
import * as Actions from '../actions/routes.actions';

const initialState = [
  {
    path: '*',
    component: React.lazy(() => (
      <Fragment>
        <h1>404 Not Found</h1>
      </Fragment>
    ))
  }
];

const routes = function(state = initialState, action) {
  switch (action.type) {
    case Actions.RESET_ROUTES:
      return initialState;
    case Actions.SET_USER_ROUTES:
      const user = action.user;
      if (!user || !user.roles) return initialRoutes;

      const userRoutes = getAllRoutes().filter(route =>
        Can(user).read(route.id)
      );

      const homeRouteName =
        _.find(Config.HomeRoutes, routeName =>
          user.roles.includes(homeRoute[routeName])
        ) || '*';

      const homeRoute = _.cloneDeep(
        _.find(userRoutes.concat(initialRoutes), route =>
          [route.id, route.path].includes(homeRouteName)
        )
      );

      userRoutes.push({ ...homeRoute, path: '/home', exact: true });

      return userRoutes;
    default: {
      return state;
    }
  }
};

export default routes;

const getAllRoutes = () => {
  let allRoutes = [];
  Config.RoutableComponents.forEach(component => {
    allRoutes = [...allRoutes, ...setRoutes(component)];
  });

  return allRoutes;
};

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
    console.group('setRoutes');
    console.info(grants);
    console.info({
      ...route,
      id,
      displayName,
      settings: {
        ...component.settings,
        ...route.settings
      },
      accessControl // retained for later reference but probably not needed
    });
    console.groupEnd();
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
