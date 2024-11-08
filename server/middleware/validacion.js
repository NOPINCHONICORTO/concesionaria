const { body, validationResult } = require('express-validator');

const validarCreacionVehiculo = [
    body('marcaModelo').not().isEmpty().withMessage('Marca y modelo son obligatorios'),
    body('precio').isFloat({ min: 0 }).withMessage('Precio debe ser un número positivo'),
    body('kilometraje').optional().isInt({ min: 0 }).withMessage('Kilometraje debe ser un número positivo'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                mensaje: 'Error de validación',
                errores : errors.array() 
            });
        }
        next();
    }
];

module.exports = {
    validarCreacionVehiculo
};