const db = require('../config/database');
const fs = require('fs').promises;
const path = require('path');

const crearVehiculo = async (req, res, next) => {
    try {
        const { 
            marcaModelo, kilometraje, carroceria, motor, transmision, 
            equipamiento, combustible, color, estadoGeneral, 
            historialMantenimiento, precio 
        } = req.body;

        const imagen = req.file ? req.file.filename : null;

        const [result] = await db.query(
            `INSERT INTO vehiculos 
            (marcaModelo, kilometraje, carroceria, motor, transmision, 
            equipamiento, combustible, color, estadoGeneral, 
            historialMantenimiento, precio, imagen, usuario_id) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                marcaModelo, kilometraje, carroceria, motor, transmision, 
                equipamiento, combustible, color, estadoGeneral, 
                historialMantenimiento, precio, imagen, req.usuario.id
            ]
        );

        res.status(201).json({ 
            mensaje: 'Vehículo creado exitosamente', 
            vehiculoId: result.insertId 
        });
    } catch (error) {
        next(error);
    }
};

const obtenerVehiculos = async (req, res, next) => {
    try {
        const [vehiculos] = await db.query('SELECT * FROM vehiculos');
        res.json(vehiculos);
    } catch (error) {
        next(error);
    }
};

const obtenerVehiculoPorId = async (req, res, next) => {
    try {
        const { id } = req.params;
        const [vehiculos] = await db.query('SELECT * FROM vehiculos WHERE id = ?', [id]);

        if (vehiculos.length === 0) {
            return res.status(404).json({ mensaje: 'Vehículo no encontrado' });
        }

        res.json(vehiculos[0]);
    } catch (error) {
        next(error);
    }
};

const eliminarVehiculo = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        // Primero obtener la imagen para eliminarla
        const [vehiculo] = await db.query('SELECT imagen FROM vehiculos WHERE id = ?', [id]);
        
        if (vehiculo[0].imagen) {
            const rutaImagen = path.join(__dirname, '../uploads', vehiculo[0].imagen);
            await fs.unlink(rutaImagen).catch(() => {});
        }

        const [result] = await db.query('DELETE FROM vehiculos WHERE id = ?', [id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Vehículo no encontrado' });
        }

        res.json({ mensaje: 'Vehículo eliminado exitosamente' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    crearVehiculo,
    obtenerVehiculos,
    obtenerVehiculoPorId,
    eliminarVehiculo
};