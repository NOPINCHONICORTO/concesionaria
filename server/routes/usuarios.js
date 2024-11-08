const express = require('express');
const router = express.Router();
const { 
    registrarUsuario, 
    iniciarSesion, 
    obtenerPerfil 
} = require('../controllers/usuariosController');
const { 
    autenticarToken 
} = require('../middleware/autenticacion');

router.post('/registrar', registrarUsuario);
router.post('/login', iniciarSesion);
router.get('/perfil', autenticarToken, obtenerPerfil);

module.exports = router;