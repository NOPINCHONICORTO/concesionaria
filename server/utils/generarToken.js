const jwt = require('jsonwebtoken');

const generarToken = (usuario) => {
    return jwt.sign(
        { 
            id: usuario.id, 
            email: usuario.email, 
            rol: usuario.rol 
        }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    );
};

module.exports = { generarToken };