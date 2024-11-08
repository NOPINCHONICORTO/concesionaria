// routes/vehiculos.js
const express = require('express');
const router = express.Router();

// Ruta de prueba
router.get('/', (req, res) => {
    res.json({ mensaje: 'Rutas de vehículos funcionando' });
});

module.exports = router;