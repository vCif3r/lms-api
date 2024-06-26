const controller = require('../controllers/studentController');

const express = require('express');
const router = express.Router();

router.get('/grade/:idgrade', controller.findByGrade);
router.get('/', controller.findAll);
router.post('/', controller.saveStudent);
router.get('/:id', controller.findById);

module.exports = router;