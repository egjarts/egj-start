import React from "react";
import { FuseLayout, FuseTheme } from "@fuse";
import Provider from "react-redux/es/components/Provider";
import { Router } from "react-router-dom";
import RouteUtils from "routing/RouteUtils";
import jssExtend from "jss-extend";
import history from "@history";
import { Auth } from "./auth";
import store from "./store";
import AppContext from "./AppContext";
import routes from "./fuse-configs/routesConfig";
import { create } from "jss";
import {
  StylesProvider,
  jssPreset,
  createGenerateClassName
} from "@material-ui/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import RoleBasedAccessControl from "rbac/RoleBasedAccessControl";

if (process.env.NODE_ENV === "development") {
  React.lazy(() => import("@dev"));
}

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()],
  insertionPoint: document.getElementById("jss-insertion-point")
});

const generateClassName = createGenerateClassName();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateUserRoutes = user => {
      console.log({ routes, user });
      this.setState({
        routes: user ? RouteUtils.withUserHomeRoute(routes, user) : routes
      });
    };

    this.state = {
      routes: routes,
      updateUserRoutes: this.updateUserRoutes
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <StylesProvider jss={jss} generateClassName={generateClassName}>
          <Provider store={store}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Auth>
                <Router history={history}>
                  <RoleBasedAccessControl>
                    <FuseTheme>
                      <FuseLayout />
                    </FuseTheme>
                  </RoleBasedAccessControl>
                </Router>
              </Auth>
            </MuiPickersUtilsProvider>
          </Provider>
        </StylesProvider>
      </AppContext.Provider>
    );
  }
}

export default App;
