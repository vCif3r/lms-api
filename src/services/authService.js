// services/userService.js
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (email, password) => {
    const usuario = await User.findOne({ email });
    if (!usuario) {
        throw new Error('Credenciales inválidas');
    }

    const validPassword = await bcrypt.compare(password, usuario.password);
    if (!validPassword) {
        throw new Error('Credenciales inválidas');
    }

    const token = jwt.sign(
        { _id: usuario._id, name: usuario.name, email: usuario.email, role: usuario.role },
        "secret",
        { expiresIn: "12h" }
    );

    return token;
};

const register = async (userData) => {
    const { email, password } = userData;
    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
        throw new Error('El correo electrónico ya está registrado');
    }

    userData.password = await bcrypt.hash(password, 10);

    const nuevoUsuario = new User(userData);
    await nuevoUsuario.save();

    return nuevoUsuario;
};

module.exports = {
    login,
    register,
};
