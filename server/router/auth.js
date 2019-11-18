const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const authenticate = require('../authentication/authenticate');
const Token = require('../authentication/token');

router.use(bodyParser.json());

router.get('/start/:provider', authenticate);

router.get('/success/:provider', authenticate, (request, response) => {
  const payload = {
    user: {
      id: request.user.id
    }
  };
  const token = Token.sign(request.user.id.toString(), payload);
  const provider = request.params['provider'];
  console.log(`authenticated with ${provider}`);
  response.json(token);
});

router.get('/logout', (request, response) => {
  request.logout();
  response.redirect('/');
});

module.exports = router;
