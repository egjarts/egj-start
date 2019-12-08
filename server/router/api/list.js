const express = require('express');
const router = express.Router();

const { google } = require('googleapis');
const apis = google.getSupportedAPIs();

router.get('/list', (request, response) => {
  response.json(apis);
});

module.exports = router;
