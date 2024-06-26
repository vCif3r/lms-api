const service = require('../services/studentService');

exports.findAll = async (req, res) => {
    try {
        const students = await service.findAll();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findByGrade = async (req, res) => {
    try {
        const students = await service.findByGrade(req.params.idgrade);
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.saveStudent = async (req, res) => {
    try {
        const student = await service.createStudent(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findById = async (req, res) => {
    try {
        const student = await service.findById(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}