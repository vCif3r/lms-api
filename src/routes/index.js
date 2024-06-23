const express = require('express');
const userRoutes = require('./userRoutes');
const courseRoutes = require('./courseRoutes');
const courseYearRoutes = require('./courseYearRoutes');
const academicYearRoutes = require('./academicYearRoutes');
const enrollmentRoutes = require('./enrollmentRoutes');
const authRoutes = require('./authRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/academic-years', academicYearRoutes);
router.use('/users', userRoutes);
router.use('/courses', courseRoutes);
router.use('/course-years', courseYearRoutes);
router.use('/enrollments', enrollmentRoutes);

module.exports = router;