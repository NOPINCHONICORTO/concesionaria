const db = require('../config/database');

const crearMantenimiento = async (mantenimientoData) => {
    const { vehiculo_id, fecha, descripcion, costo, tipo_mantenimiento } = mantenimientoData;
    const [result] = await db.query(
        `INSERT INTO historial_mantenimiento 
        (vehiculo_id, fecha, descripcion, costo, tipo_mantenimiento) 
        VALUES (?, ?, ?, ?, ?)`,
        [vehiculo_id, fecha, descripcion, costo, tipo_mantenimiento]
    );
    return result.insertId;
};

const obtenerMantenimientosPorVehiculo = async (vehiculo_id) => {
    const [mantenimientos] = await db.query(
        `SELECT * FROM historial_mantenimiento 
        WHERE vehiculo_id = ? 
        ORDER BY fecha DESC`, 
        [vehiculo_id]
    );
    return mantenimientos;
};

module.exports = {
    crearMantenimiento,
    obtenerMantenimientosPorVehiculo
};