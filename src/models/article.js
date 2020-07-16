const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  body: {
    type: String,
    required: false,
  }
}, {
  timestamps: true,
})