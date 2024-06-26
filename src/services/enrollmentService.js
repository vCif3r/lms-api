const Enrollment = require('../models/enrollment');
const CourseDetail = require('../models/courseDetail');
const Course = require('../models/course');
const Teacher = require('../models/teacher');

exports.list = async () => {
  return await Enrollment.find().populate('student').populate({
    path: 'courseDetail',
    model: CourseDetail,
    populate: [
      { path: 'course', model: Course },
      { path: 'teacher', model: Teacher }
    ]
  });
}

exports.listByStudent = async (studentId) => {
  try {
    const enrollments = await Enrollment.find({ student: studentId }).populate('student').populate({
      path: 'courseDetail',
      model: CourseDetail,
      populate: [
        { path: 'course', model: Course },
        { path: 'teacher', model: Teacher }
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
      path: 'courseDetail',
      model: CourseDetail,
      populate: [
        { path: 'course', model: Course },
        { path: 'teacher', model: Teacher }
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