import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import RouteUtils from 'utils/RouteUtils';
import Login from 'app/auth/login/Login.config';
import Logout from 'app/auth/logout/Logout.config';

import modules from 'app/modules';

const routes = [
  ...RouteUtils.generateRoutes([...modules, Login, Logout]),
  {
    path: '*',
    authentication: true,
    authorization: false,
    component: React.lazy(() => import('app/modules/list/ModuleList'))
  }
];

export default routes;

export const HomeRoutes = {
  // Default home routes by role are defined as
  // Role: 'route.id'
  // or Role: 'route.path'
  Staff: 'module.list',
  Authenticated: 'staff.registration',
  Anonymous: '/login'
};

export const RoutableComponents = [...modules, Login, Logout];
