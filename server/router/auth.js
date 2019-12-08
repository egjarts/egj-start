const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/start/:provider/:data?');

module.exports = router;
