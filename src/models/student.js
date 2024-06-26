const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    avatar: String,
    wallpaper: String,
    phone: Number,
    email: String,
    password: String,
    grade: { type: mongoose.Schema.Types.ObjectId, ref: 'Grade' },
    dni: String,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Student', StudentSchema);