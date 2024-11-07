const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const db = require('../db/db');


// Configuración de multer para almacenar imágenes en una carpeta 'uploads'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Ruta para manejar la carga de datos de vehículo
router.post('/vehiculos', upload.single('imagen'), (req, res) => {
    const { marcaModelo, kilometraje, carroceria, motor, transmision, equipamiento, combustible, color, estadoGeneral, historialMantenimiento, precio } = req.body;
    const imagen = req.file ? req.file.filename : null;

    const query = `
        INSERT INTO vehiculos 
        (marcaModelo, kilometraje, carroceria, motor, transmision, equipamiento, combustible, color, estadoGeneral, historialMantenimiento, precio, imagen)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    db.query(query, [marcaModelo, kilometraje, carroceria, motor, transmision, equipamiento, combustible, color, estadoGeneral, historialMantenimiento, precio, imagen], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al guardar el vehículo', error: err });
        }
        res.status(200).json({ message: 'Vehículo guardado exitosamente', data: result });
    });
});

module.exports = router;
