const Course = require('../models/course')

exports.getAll = async () => {
    return await Course.find().populate('grade');
}

exports.save = async (data) => {
    const newCourse = new Course(data);
    return await newCourse.save();
}