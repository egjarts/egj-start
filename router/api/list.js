const express = require('express');
const router = express.Router();
const authenticate = require('./../../authentication/authenticate');

const { google } = require('googleapis');
const apis = google.getSupportedAPIs();

router.get('/list', authenticate, (request, response) => {
  response.json(apis);
});

module.exports = router;
