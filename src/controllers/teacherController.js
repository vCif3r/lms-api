const service = require('../services/teacherService');

exports.findAll = async (req, res) => {
    try {
        const teachers = await service.findAll();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.create = async (req, res) => {
    try {
        const teacher = await service.create(req.body);
        res.status(201).json(teacher);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}