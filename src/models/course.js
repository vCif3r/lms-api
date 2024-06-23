const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  image: String,
  title: {type: String, required: true},
  description: {type: String, required: false},
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', CourseSchema);