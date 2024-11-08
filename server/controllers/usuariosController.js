const db = require('../config/database');
const bcrypt = require('bcrypt');
const { generarToken } = require('../middleware/autenticacion');

const registrarUsuario = async (req, res, next) => {
    try {
        const { nombre, email, password, rol = 'usuario' } = req.body;

        // Verificar si el usuario ya existe
        const [existingUser ] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        
        if (existingUser .length > 0) {
            return res.status(400).json({ mensaje: 'El usuario ya existe' });
        }

        // Hashear la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insertar nuevo usuario
        const [result] = await db.query(
            'INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)',
            [nombre, email, hashedPassword, rol]
        );

        res.status(201).json({ 
            mensaje: 'Usuario registrado exitosamente', 
            usuarioId: result.insertId 
        });
    } catch (error) {
        next(error);
    }
};

const iniciarSesion = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Buscar usuario
        const [usuarios] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        
        if (usuarios.length === 0) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        const usuario = usuarios[0];

        // Verificar contraseña
        const esPasswordCorrecto = await bcrypt.compare(password, usuario.password);
        
        if (!esPasswordCorrecto) {
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

        // Generar token
        const token = generarToken(usuario);

        res.json({ 
            mensaje: 'Inicio de sesión exitoso', 
            token,
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol
            }
        });
    } catch (error) {
        next(error);
    }
};

const obtenerPerfil = async (req, res, next) => {
    try {
        const usuarioId = req.usuario.id;

        const [usuarios] = await db.query(
            'SELECT id, nombre, email, rol FROM usuarios WHERE id = ?', 
            [usuarioId]
        );

        if (usuarios.length === 0) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        res.json(usuarios[0]);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registrarUsuario,
    iniciarSesion,
    obtenerPerfil
};