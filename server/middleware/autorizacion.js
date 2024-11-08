const esAdmin = (req, res, next) => {
    if (req.usuario.rol !== 'admin') {
        return res.status(403).json({ mensaje: 'Acceso denegado. Se requieren permisos de administrador.' });
    }
    next();
};

const tienePermiso = (rolesPermitidos) => {
    return (req, res, next) => {
        if (!rolesPermitidos.includes(req.usuario.rol)) {
            return res.status(403).json({ 
                mensaje: 'No tienes permisos suficientes',
                rolesRequeridos: rolesPermitidos
            });
        }
        next();
    };
};

const puedeAccederRecurso = (req, res, next) => {
    const esPropioDato = req.usuario.id === parseInt(req.params.id);
    const esAdmin = req.usuario.rol === 'admin';

    if (!esPropioDato && !esAdmin) {
        return res.status(403).json({ 
            mensaje: 'No tienes autorización para acceder a este recurso' 
        });
    }

    next();
};

module.exports = { 
    esAdmin, 
    tienePermiso,
    puedeAccederRecurso 
}; 