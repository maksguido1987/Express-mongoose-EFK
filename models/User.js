const { Schema, model } = require('mongoose');

const User = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    unique: true,
  },
});

module.exports = model('User', User);
