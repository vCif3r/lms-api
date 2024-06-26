const service = require('../services/gradeService');

exports.findAll = async (req, res) => {
    try {
        const grades = await service.findAll();
        res.status(200).json(grades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.findGradeById = async (req, res) => {
    try {
        const grade = await service.findGradeById(req.params.id);
        if (!grade) {
            return res.status(404).json({ message: 'Grade not found' });
        }
        res.status(200).json(grade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.saveGrade = async (req, res) => {
    try {
        const grade = await service.saveGrade(req.body);
        res.status(201).json(grade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}