const Enrollment = require('../models/enrollment');
const CourseYear = require('../models/courseYear');
const Course = require('../models/course');
const User = require('../models/user');

exports.list = async () => {
  return await Enrollment.find().populate('student').populate({
    path: 'courseyear',
    model: CourseYear,
    populate: [
      { path: 'course', model: Course },
      { path: 'teacher', model: User }
    ]
  });
}

exports.listByStudent = async (studentId) => {
  try {
    const enrollments = await Enrollment.find({ student: studentId }).populate('student').populate({
      path: 'courseyear',
      model: CourseYear,
      populate: [
        { path: 'course', model: Course },
        { path: 'teacher', model: User }
      ]
    });

    return enrollments;
  } catch (error) {
    console.error('Error fetching enrollments by student:', error);
    throw error;
  }
};

exports.listActiveByStudent = async (studentId) => {
  try {
    const enrollments = await Enrollment.find({ student: studentId, status: true }).populate('student').populate({
      path: 'courseyear',
      model: CourseYear,
      populate: [
        { path: 'course', model: Course },
        { path: 'teacher', model: User }
      ]
    });

    return enrollments;
  } catch (error) {
    console.error('Error fetching enrollments by student:', error);
    throw error;
  }
};

exports.saveEnrollment = async (enrollment) => {
  const newEnrollment = new Enrollment(enrollment);
  return await newEnrollment.save();
}