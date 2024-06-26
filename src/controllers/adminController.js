const service = require('../services/adminService');

exports.findAll = async (req, res) => {
    try {
        const admins = await service.findAdmin();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}