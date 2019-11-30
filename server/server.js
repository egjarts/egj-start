const config = require("config");
const firebase = require("firebase-admin");
require("firebase");

const firebaseConfig = config.get("firebase");

firebase.initializeApp();

//require('./authentication/providers');
//const authenticate = require("./authentication/authenticate");

const express = require("express");
//const passport = require('passport');
const cors = require("cors");

// Create a new Express application.
var app = express();
app.use(cors());

//app.use(passport.initialize());

app.use("/auth", require("./router/auth"));
app.use("/api/admin/users", require("./router/api/admin/users"));
app.use("/api/admin/email", require("./router/api/admin/email"));

app.use([handleError]);

app.listen(process.env["PORT"] || 8080);

function handleError(error, request, response, next) {
  console.log("Custom Error Handler:");
  console.log(error);

  const status = error.status || 500;
  let message = error.message;
  /*   switch (status) {
    case 401:
      message = "Not Authenticated";
  } */

  var output = { status: status };
  output[error.name] = message;
  response.status(status).json(output);
}
