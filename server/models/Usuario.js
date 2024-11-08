const db = require('../config/database');

const crearUsuario = async (usuarioData) => {
    const { nombre, email, password, rol } = usuarioData;
    const [result] = await db.query(
        'INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)', 
        [nombre, email, password, rol]
    );
    return result.insertId;
};

const obtenerUsuarioPorEmail = async (email) => {
    const [usuarios] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    return usuarios[0];
};

module.exports = {
    crearUsuario,
    obtenerUsuarioPorEmail
};