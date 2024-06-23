const service = require('../services/courseYearService')

exports.list = async (req, res) => {
    try {
        const result = await service.getCY()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.create = async (req, res) => {
    try {
        const result = await service.saveCY(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}