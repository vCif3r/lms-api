const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
    name: String,
    description: String
});
module.exports = mongoose.model('Grade', GradeSchema);