const Student = require('../models/student');
const bcrypt = require('bcrypt');

exports.findByGrade = async (data) => {
    return await Student.find({ grade: data });
}

exports.findById = async (data) => {
    return await Student.findById(data);
}

exports.createStudent = async (data) => {
    const { password, ...otherData } = data;
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // 10 rondas de hashing
        const newStudent = new Student({
            ...otherData,
            password: hashedPassword,
        });
        const savedStudent = await newStudent.save();
        return savedStudent;
    } catch (error) {
        throw new Error(`Error creating student: ${error.message}`);
    }
};

exports.updateStudent = async (id, data) => {
    return await Student.findByIdAndUpdate(id, data, { new: true });
}

exports.findAll = async () => {
    return await Student.find();
}