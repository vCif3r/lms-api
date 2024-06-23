const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({
    status: {type: Boolean, default: true},
    grade: {type: Number},
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
},  {
  timestamps: true
});
module.exports = mongoose.model('Classroom', ClassroomSchema);