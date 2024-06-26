const controller = require('../controllers/adminController');

const express = require('express');

const router = express.Router();

router.get('/', controller.findAll);

module.exports = router;