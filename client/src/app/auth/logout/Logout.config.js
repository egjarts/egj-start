import Logout from "./Logout";

const Config = {
  authentication: true,
  routes: [
    {
      path: ["/logout", "/signout", "/sign-out"],
      component: Logout
    }
  ],
};

export default Config;

// TODO: make sure that we don't get stuck in a loop of login/logout