const jwt = require('jsonwebtoken');

const autenticarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
        if (err) return res.sendStatus(403);
        req.usuario = usuario;
        next();
    });
};

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

module.exports = { 
    autenticarToken, 
    generarToken 
};