import React, { Fragment } from "react";
import Welcome from "./Welcome";
import AcceptAgreement from "./AcceptAgreement";
import SetPassword from "./SetPassword";
import ConnectAccount from "./ConnectAccount";

const RegistrationSteps = [
  {
    id: "welcome",
    title: "Welcome",
    component: Welcome
  },
  {
    id: "agreement",
    title: "Agreement",
    component: AcceptAgreement
  },
  {
    id: "password",
    title: "Password",
    component: SetPassword
  },
  {
    id: "connect",
    title: "Connect",
    component: ConnectAccount
  }
];

export default RegistrationSteps;
