const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
  courseyear: {type: mongoose.Schema.Types.ObjectId,ref: 'CourseYear',required: true},
  enrollmentDate: {type: Date, default: Date.now},
  status: {type: Boolean, default: true}
}, {
  timestamps: true
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);
