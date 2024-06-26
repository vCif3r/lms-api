const controller = require('../controllers/gradeController');

const express = require('express');
const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findGradeById);
router.post('/', controller.saveGrade);

module.exports = router;