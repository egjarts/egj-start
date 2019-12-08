const express = require('express');
const router = express.Router();

router.use('/', require('./submissions'));

router.use('/', require('./staff'));

module.exports = router;
