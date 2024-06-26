const controller = require('../controllers/teacherController');

const express = require('express');

const router = express.Router();

router.get('/', controller.findAll);
router.post('/', controller.create);

module.exports = router;