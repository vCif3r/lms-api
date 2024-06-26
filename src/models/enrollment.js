const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId,ref: 'Student',required: true},
  courseDetail: [{type: mongoose.Schema.Types.ObjectId,ref: 'CourseDetail',required: true}],
  enrollmentDate: {type: Date, default: Date.now},
  status: {type: Boolean, default: true}
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);