const controller = require('../controllers/courseDetailController')
const express = require('express');
const router = express.Router();

router.get('/', controller.findAll);
router.post('/', controller.save);
router.get('/:id', controller.findById);

module.exports = router;