const mongoose = require('mongoose');

const CourseYearSchema = new mongoose.Schema({
  academicYear: { type: Date, required: true},
  teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  course: {type: mongoose.Schema.Types.ObjectId,ref: 'Course',required: true},
  startDate: {type: Date, default: Date.now},
  endDate: {type: Date}
}, {
  timestamps: true
});

module.exports = mongoose.model('CourseYear', CourseYearSchema);
