const service = require('../services/courseDetailService')

exports.findAll = async (req, res) => {
    try {
        const result = await service.findAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.save = async (req, res) => {
    try {
        const result = await service.save(req.body)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

exports.findById = async (req, res) => {
    try {
        const result = await service.findById(req.params.id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}