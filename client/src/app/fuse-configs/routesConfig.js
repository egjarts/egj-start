import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import RouteUtils from "routing/RouteUtils";
import LoginConfig from "app/main/login/LoginConfig";
import modules from "app/main/modules";

const routes = [
  ...RouteUtils.generateRoutes([...modules, LoginConfig]),
  {
    path: "*",
    authentication: true,
    authorization: false,
    component: React.lazy(() => import("app/main/modules/list/ModuleList"))
  }
];

export default routes;
