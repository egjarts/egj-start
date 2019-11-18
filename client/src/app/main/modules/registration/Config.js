import React from "react";

const Config = {
  id: "staff.registration",
  displayName: "New Staff Registration",
  authentication: true,
  authorization: false,
  routes: [
    {
      path: "/register",
      component: React.lazy(() => import("./Registration"))
    }
  ]
};

export default Config;
