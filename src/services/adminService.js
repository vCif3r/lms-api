const Admin = require('../models/admin');

exports.findAdmin = async () => {
    return await Admin.findOne();
}