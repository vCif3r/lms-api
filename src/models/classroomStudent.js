const mongoose = require('mongoose');

const ClassroomStudentSchema = new mongoose.Schema({
  status: {type: Boolean, default: true},
  classroom: {type: mongoose.Schema.Types.ObjectId, ref: 'Classroom', required: true},
  student: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
}, {
  timestamps: true
});
module.exports = mongoose.model('Classroom', ClassroomStudentSchema);