const service = require('../services/academicYearService')

exports.list = async (req, res) => {
    try {
        const academicYears = await service.getAY();
        res.status(200).json(academicYears);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}