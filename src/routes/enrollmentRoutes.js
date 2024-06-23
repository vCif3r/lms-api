const enrollmentController = require('../controllers/enrollmentController');

const express = require('express');
const router = express.Router();

router.get('/', enrollmentController.listEnrollments);
router.post('/', enrollmentController.saveEnrollment);
router.get('/student/:studentId', enrollmentController.listEnrollmentsByStudent);
router.get('/active/student/:studentId', enrollmentController.listActiveEnrollmentsByStudent);

module.exports = router;