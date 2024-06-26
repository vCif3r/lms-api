const mongoose = require('mongoose');

const CourseDetailSchema = new mongoose.Schema({
  teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true},
  course: {type: mongoose.Schema.Types.ObjectId,ref: 'Course',required: true},
  startDate: {type: Date, default: Date.now},
  endDate: {type: Date}
});

module.exports = mongoose.model('CourseDetail', CourseDetailSchema);