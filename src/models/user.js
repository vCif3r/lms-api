const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  avatar: String,
  wallpaper: String,
  phone: Number,
  email: String,
  password: String,
  role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' }
}, {
  timestamps: true
});
module.exports = mongoose.model('User', UserSchema);