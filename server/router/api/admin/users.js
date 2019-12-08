const express = require('express');
const router = express.Router();

const { google } = require('googleapis');

router.get('/users', async (request, response) => {
  const Auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes:
      'https://www.googleapis.com/auth/admin.directory.user https://www.googleapis.com/auth/admin.directory.group'
  });

  const auth = await Auth.getClient();
  auth.subject = 'brian@egjarts.org';

  const service = google.admin('directory_v1');

  const list = await service.users.list({ auth: auth, customer: 'C0430mqjw' });
  response.json(list.data.users);
});

module.exports = router;
