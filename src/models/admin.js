const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    avatar: String,
    wallpaper: String,
    phone: Number,
    email: String,
    password: String,
    dni: Number,
});
module.exports = mongoose.model('Admin', AdminSchema);