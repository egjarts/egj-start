const express = require('express');
const router = express.Router();
const controller = require('../../controller');

router.post('/q/staff/', async (request, response) => {
  const queryOptions = request.body;
  response.json(await controller.staff.query(request.user, queryOptions));
});
//router.post('/u/staff/', controller.staff.update);

router.all('/update-cache/staff/', async (request, response) => {
  response.json(await controller.staff.updateCache());
});

module.exports = router;
