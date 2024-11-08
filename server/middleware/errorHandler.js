// middleware/errorHandler.js
function errorHandler(err, req, res, next) {
    console.error(err.stack);

    // Manejar diferentes tipos de errores
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            mensaje: 'Error de validación',
            errores: err.errors
        });
    }

    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({
            mensaje: 'No autorizado'
        });
    }

    // Error genérico del servidor
    res.status(err.status || 500).json({
        mensaje: err.message || 'Error interno del servidor',
        error: process.env.NODE_ENV === 'production' ? {} : err.stack
    });
}

module.exports = errorHandler;