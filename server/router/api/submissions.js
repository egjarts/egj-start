const express = require('express');
const router = express.Router();
const controller = require('../../controller');

router.post('/q/submissions/', async (request, response) => {
  const queryOptions = request.body;
  response.json(await controller.submissions.query(request.user, queryOptions));
});

module.exports = router;
