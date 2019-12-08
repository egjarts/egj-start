import config from './config/config';
import log from './log';
import authenticate from './middleware/authentication/authenticate';
import firebase from 'firebase-admin';
import 'firebase';

firebase.initializeApp();

import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

var app = express();
app.use(cors());
app.use(json());

app.use('/auth', authenticate, require('./router/auth'));
app.use('/api', authenticate, require('./router/api'));

app.use([handleError]);

const port = process.env['PORT'] || 8080;
app.listen(port);
log.info({ port }, 'Server restarted');
log.trace({ env: process.env, config }, 'Loaded environment configuration');

function handleError(error, request, response, next) {
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
