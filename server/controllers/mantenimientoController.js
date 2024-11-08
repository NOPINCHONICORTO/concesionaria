const db = require('../config/database');

const registrarMantenimiento = async (req, res, next) => {
    try {
        const { 
            vehiculo_id, 
            fecha, 
            descripcion, 
            costo, 
            tipo_mantenimiento 
        } = req.body;

        const [result] = await db.query(
            `INSERT INTO historial_mantenimiento 
            (vehiculo_id, fecha, descripcion, costo, tipo_mantenimiento, usuario_id) 
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                vehiculo_id, 
                fecha, 
                descripcion, 
                costo, 
                tipo_mantenimiento,
                req.usuario.id
            ]
        );

        res.status(201).json({ 
            mensaje: 'Mantenimiento registrado exitosamente', 
            mantenimientoId: result.insertId 
        });
    } catch (error) {
        next(error);
    }
};

const obtenerMantenimientosVehiculo = async (req, res, next) => {
    try {
        const { vehiculo_id } = req.params;

        const [mantenimientos] = await db.query(
            `SELECT * FROM historial_mantenimiento 
            WHERE vehiculo_id = ? 
            ORDER BY fecha DESC`, 
            [vehiculo_id]
        );

        res.json(mantenimientos);
    } catch (error) {
        next(error);
    }
};

const actualizarMantenimiento = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { 
            fecha, 
            descripcion, 
            costo, 
            tipo_mantenimiento 
        } = req.body;

        const [result] = await db.query(
            `UPDATE historial_mantenimiento 
            SET fecha = ?, descripcion = ?, costo = ?, tipo_mantenimiento = ? 
 WHERE id = ? AND usuario_id = ?`,
            [
                fecha, 
                descripcion, 
                costo, 
                tipo_mantenimiento,
                id,
                req.usuario.id
            ]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Mantenimiento no encontrado o no autorizado' });
        }

        res.json({ mensaje: 'Mantenimiento actualizado exitosamente' });
    } catch (error) {
        next(error);
    }
};

const eliminarMantenimiento = async (req, res, next) => {
    try {
        const { id } = req.params;

        const [result] = await db.query(
            `DELETE FROM historial_mantenimiento 
            WHERE id = ? AND usuario_id = ?`,
            [id, req.usuario.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: 'Mantenimiento no encontrado o no autorizado' });
        }

        res.json({ mensaje: 'Mantenimiento eliminado exitosamente' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registrarMantenimiento,
    obtenerMantenimientosVehiculo,
    actualizarMantenimiento,
    eliminarMantenimiento
};