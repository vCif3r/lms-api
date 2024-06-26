const Teacher = require('../models/teacher');

exports.findAll = async (data) => {
    return await Teacher.find(data);
}

exports.findById = async (id) => {
    return await Teacher.findById(id);
}

exports.create = async (data) => {
    const teacher = new Teacher(data);
    return await teacher.save();
}