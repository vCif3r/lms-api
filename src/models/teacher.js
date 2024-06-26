const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    avatar: String,
    wallpaper: String,
    phone: Number,
    email: String,
    password: String,
    dni: Number,
},{
    timestamps: true
});
module.exports = mongoose.model('Teacher', TeacherSchema);