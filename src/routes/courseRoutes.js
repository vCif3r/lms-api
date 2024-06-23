
const courseController = require('../controllers/courseController')
const express = require('express');
const router = express.Router();

router.get('/', courseController.getCourses);
router.post('/', courseController.saveCourse);

module.exports = router;