"use strict";

var authenticate = require('./middleware/authentication/authenticate');

var firebase = require('firebase-admin');

require('firebase');

firebase.initializeApp();

var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authenticate, require('./router/auth'));
app.use('/api', authenticate, require('./router/api'));
app.use([handleError]);
app.listen(process.env['PORT'] || 8080);

function handleError(error, request, response, next) {
  var status = error.status || 500;
  var message = error.message;
  /*   switch (status) {
    case 401:
      message = "Not Authenticated";
  } */

  var output = {
    status: status
  };
  output[error.name] = message;
  response.status(status).json(output);
}