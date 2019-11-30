const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");

router.post("/", async (request, response) => {
  // create the firebase user
  // with a random, placeholder password

  // get the ID of the new user and use it
  // to set some initial lookup values
  //
  await admin
    .auth()
    .updateUser("fpyxnDFUiJbSSDpvQh5MvjCwI402", { password: "u8Sn8cX4" });

  response.status(200);
});

module.exports = router;
