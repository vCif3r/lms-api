const CourseDetail = require('../models/courseDetail')

exports.findAll = async () => {
    return await CourseDetail.find().populate('course').populate('teacher');
}

exports.save = async (data) => {
    const c = new CourseDetail(data)
    return await c.save()
}

exports.findById = async (id) => {
    return await CourseDetail.findById(id).populate('course').populate('teacher');
}