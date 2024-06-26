const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  image: {type: String, required: false},
  title: {type: String, required: true},
  description: {type: String, required: false},
  grade: { type: mongoose.Schema.Types.ObjectId, ref: 'Grade' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', CourseSchema);