const mongoose = require('mongoose');

const Category = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
  _deletedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model('Category', Category);
