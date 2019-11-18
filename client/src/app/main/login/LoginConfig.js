import Login from "./Login";

const LoginConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false
        },
        toolbar: {
          display: false
        },
        footer: {
          display: false
        },
        leftSidePanel: {
          display: false
        },
        rightSidePanel: {
          display: false
        }
      }
    }
  },
  authentication: false,
  routes: [
    {
      path: "/login",
      component: Login
    }
  ],
  hostedDomains: ["egjarts.org", "egjpress.org"]
};

export default LoginConfig;
