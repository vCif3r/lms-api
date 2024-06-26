const Grade = require('../models/grade');

exports.findAll = async () => {
    return await Grade.find();
}

exports.findById = async (id) => {
    return await Grade.findById(id);
}

exports.saveGrade = async (data) => {
    const grade = new Grade(data);
    return await grade.save();
}