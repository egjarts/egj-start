import React from "react";

export const HomeConfig = {
  settings: {
    layout: {}
  },
  authentication: true,
  routes: [
    {
      path: "/home",
      component: React.lazy(() => import("app/main/modules/home/Home"))
    }
  ]
};
