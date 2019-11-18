//require('./authentication/providers');
const authenticate = require('./authentication/authenticate');

const express = require('express');
//const passport = require('passport');
const cors = require('cors');

// Create a new Express application.
var app = express();
app.use(cors());

//app.use(passport.initialize());

app.use('/auth', require('./router/auth'));
app.use('/api/admin/users', require('./router/api/admin/users'));

app.use([handleError]);

app.listen(process.env['PORT'] || 8080);

function handleError(error, request, response, next) {
  var status = error.status || 500;
  switch (status) {
    case 401:
      error.message = 'Not Authenticated';
  }

  var output = { status: status };
  output[error.name] = error.message;
  response.status(status).json(output);
}
