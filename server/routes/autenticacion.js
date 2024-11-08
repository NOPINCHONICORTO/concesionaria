const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../db/db');

// Registro de usuario
router.post('/registro', async (req, res) => {
    try {
        const { nombre, email, password, rol } = req.body;

        // Validaciones básicas
        if (!nombre || !email || !password) {
            return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
        }

        // Verificar si el usuario ya existe
        const [existingUsers] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        
        if (existingUsers.length > 0) {
            return res.status(400).json({ mensaje: 'El usuario ya existe' });
        }

        // Hashear contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insertar nuevo usuario
        const [result] = await db.query(
            'INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)', 
            [nombre, email, hashedPassword, rol || 'usuario']
        );

        res.status(201).json({ 
            mensaje: 'Usuario registrado exitosamente',
            usuarioId: result.insertId 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            mensaje: 'Error en el registro', 
            error: error.message 
        });
    }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar usuario
        const [usuarios] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        
        if (usuarios.length === 0) {
            return res.status(400).json({ mensaje: 'Credenciales inválidas' });
        }

        const usuario = usuarios[0];

        // Verificar contraseña
        const esPasswordCorrecto = await bcrypt.compare(password, usuario.password);
        
        if (!esPasswordCorrecto) {
            return res.status(400).json({ mensaje: 'Credenciales inválidas' });
        }

        // Generar token
        const token = jwt.sign(
            { 
                id: usuario.id, 
                email: usuario.email, 
                rol: usuario.rol 
            }, 
            'tu_secreto_jwt', 
            { expiresIn: '1h' }
        );

        res.json({
            token,
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre,
                email: usuario.email,
                rol: usuario.rol
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            mensaje: 'Error en el inicio de sesión', 
            error: error.message 
        });
    }
});

module.exports = router;