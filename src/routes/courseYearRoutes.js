const controller = require('../controllers/courseYearController')
const express = require('express');
const router = express.Router();

router.get('/', controller.list);
router.post('/', controller.create);

module.exports = router;