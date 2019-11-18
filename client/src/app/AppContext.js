import React from "react";

const AppContext = React.createContext({
  routes: [],
  updateUserRoutes: () => {}
});

export default AppContext;
