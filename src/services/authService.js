// services/userService.js
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (email, password) => {
    // Intenta encontrar el usuario en la colección de estudiantes
    let usuario = await Student.findOne({ email });
    let userType = 'student'; 

    if (!usuario) {
        
        usuario = await Teacher.findOne({ email });
        userType = 'teacher';
    }

    if (!usuario) {
      
        usuario = await Admin.findOne({ email });
        userType = 'admin';
    }

    if (!usuario) {
        throw new Error('Credenciales inválidas');
    }

    const validPassword = await bcrypt.compare(password, usuario.password);
    if (!validPassword) {
        throw new Error('Credenciales inválidas');
    }

    const token = jwt.sign(
        { _id: usuario._id, name: usuario.name, lastname: usuario.lastname, email: usuario.email, role: userType },
        "secret",
        { expiresIn: "12h" }
    );

    return token;
};


// const register = async (userData) => {
//     const { email, password } = userData;
//     const usuarioExistente = await User.findOne({ email });
//     if (usuarioExistente) {
//         throw new Error('El correo electrónico ya está registrado');
//     }

//     userData.password = await bcrypt.hash(password, 10);

//     const nuevoUsuario = new User(userData);
//     await nuevoUsuario.save();

//     return nuevoUsuario;
// };

module.exports = {
    login,
};
