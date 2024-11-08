const express = require('express');
const router = express.Router();
const { 
    registrarMantenimiento, 
    obtenerMantenimientosVehiculo, 
    actualizarMantenimiento, 
    eliminarMantenimiento 
} = require('../controllers/mantenimientoController');
const { 
    autenticarToken 
} = require('../middleware/autenticacion');
const { 
    esAdmin 
} = require('../middleware/autorizacion');

router.post('/', autenticarToken, registrarMantenimiento);
router.get('/:vehiculo_id', autenticarToken, obtenerMantenimientosVehiculo);
router.put('/:id', autenticarToken, esAdmin, actualizarMantenimiento);
router.delete('/:id', autenticarToken, esAdmin, eliminarMantenimiento);

module.exports = router;