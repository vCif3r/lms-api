const express = require('express');
const courseRoutes = require('./courseRoutes');
const courseDetailRoutes = require('./courseDetailRoutes');
const academicYearRoutes = require('./academicYearRoutes');
const enrollmentRoutes = require('./enrollmentRoutes');
const teacherRoutes = require('./teacherRoutes');
const authRoutes = require('./authRoutes');
const studentRoutes = require('./studentRoutes');
const gradeRoutes = require('./gradeRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/academic-years', academicYearRoutes);
router.use('/courses', courseRoutes);
router.use('/course-detail', courseDetailRoutes);
router.use('/enrollments', enrollmentRoutes);
router.use('/teachers', teacherRoutes);
router.use('/students', studentRoutes);
router.use('/grades', gradeRoutes);

module.exports = router;