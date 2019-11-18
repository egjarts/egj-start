const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  authentication: [
    {
      provider: {
        type: String,
        required: true
      },
      identifier: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = User = mongoose.model('user', UserSchema);
