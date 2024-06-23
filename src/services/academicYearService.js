const AcademicYear = require('../models/academicYear');

exports.getAY = async () => {
    return await AcademicYear.find();
}

exports.saveAY = async (data) => {
    const ay = new AcademicYear(data);
    await ay.save();
}