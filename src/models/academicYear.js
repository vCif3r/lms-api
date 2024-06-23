const mongoose = require('mongoose');

const AcademicYearSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  startDate: { type: Date, required: true, default: new Date() },
  endDate: { type: Date, required: true },
  status: { type: Boolean, default: true },
}, {
  timestamps: true
});
module.exports = mongoose.model('AcademicYear', AcademicYearSchema);