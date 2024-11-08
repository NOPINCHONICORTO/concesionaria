const db = require('../config/database');

const crearVehiculo = async (vehiculoData) => {
    const { marcaModelo, kilometraje, carroceria, motor, transmision, equipamiento, combustible, color, estadoGeneral, historialMantenimiento, precio, imagen, usuario_id } = vehiculoData;
    const [result] = await db.query(
        `INSERT INTO vehiculos 
        (marcaModelo, kilometraje, carroceria, motor, transmision, 
        equipamiento, combustible, color, estadoGeneral, 
        historialMantenimiento, precio, imagen, usuario_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [marcaModelo, kilometraje, carroceria, motor, transmision, equipamiento, combustible, color, estadoGeneral, historialMantenimiento, precio, imagen, usuario_id]
    );
    return result.insertId;
};

const obtenerVehiculos = async () => {
    const [vehiculos] = await db.query('SELECT * FROM vehiculos');
    return vehiculos;
};

const obtenerVehiculoPorId = async (id) => {
    const [vehiculos] = await db.query('SELECT * FROM vehiculos WHERE id = ?', [id]);
    return vehiculos[0];
};

const eliminarVehiculo = async (id) => {
    const [result] = await db.query('DELETE FROM vehiculos WHERE id = ?', [id]);
    return result.affectedRows;
};

module.exports = {
    crearVehiculo,
    obtenerVehiculos,
    obtenerVehiculoPorId,
    eliminarVehiculo
};