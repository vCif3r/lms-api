const service = require('../services/enrollmentService');

exports.listEnrollments = async (req, res) => {
    try {
        const enrollments = await service.list();
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.listEnrollmentsByStudent = async (req, res) => {
    const studentId = req.params.studentId;
    try {
        const enrollments = await service.listByStudent(studentId);
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.listActiveEnrollmentsByStudent = async (req, res) => {
    const studentId = req.params.studentId;
    try {
        const enrollments = await service.listActiveByStudent(studentId);
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.saveEnrollment = async (req, res) => {
    try {
        const enrollment = await service.saveEnrollment(req.body);
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}