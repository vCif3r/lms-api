const courseService = require('../services/courseService')

exports.getCourses = async (req, res) => {
    try {
        const courses = await courseService.getAll();
        res.status(200).json(courses)
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

exports.saveCourse = async (req, res) => {
    try {
        const newcourse = await courseService.save(req.body);
        res.status(201).json(newcourse)
    } catch(error){
        res.status(400).json({ message: error.message });
    }
}