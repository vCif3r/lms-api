// controllers/userController.js
const authService = require('../services/authService');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.login(email, password);
        res.status(200).json({ success: true, token });
    } catch (error) {
        res.status(401).json({ success: false, message: error.message });
    }
};

// const register = async (req, res) => {
//     const userData = req.body;

//     try {
//         const nuevoUsuario = await authService.register(userData);
//         res.status(201).json({ success: true, message: "Usuario registrado correctamente", nuevoUsuario });
//     } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//     }
// };

module.exports = {
    login,
};
