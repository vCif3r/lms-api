const CourseYear = require('../models/courseYear')

exports.getCY = async () => {
    return await CourseYear.find().populate('course').populate('teacher');
}

exports.saveCY = async (data)=>{
    const cy = new CourseYear(data)
    return await cy.save()
}