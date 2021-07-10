const mongoose = require('mongoose');

const Card = new mongoose.Schema({
  word: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  srcAudio: {
    type: String,
  },
  _deletedAt: {
    type: Date,
    default: null,
  },
})

module.exports = mongoose.model('Card', Card);