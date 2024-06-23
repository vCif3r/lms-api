const controller = require('../controllers/academicYearController')

const express = require('express');
const router = express.Router();

router.get('/', controller.list);

module.exports = router;