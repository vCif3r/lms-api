const User = require('../models/user');

exports.getAllUsers = async () => {
  return await User.find();
};

exports.getAllStudents = async () => {
  return await User.find({ role: 'student' });
}

exports.getAllTeachers = async () => {
  return await User.find({ role: 'teacher' });
}