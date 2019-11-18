import React from "react";

export const Config = {
  id: "module.list",
  displayName: "My Apps",
  authentication: true,
  authorization: false,
  routes: [
    {
      path: ["/module/list", "/", "/home"],
      exact: true,
      component: React.lazy(() => import("./ModuleList"))
    }
  ]
};

export default Config;
