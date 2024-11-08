require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Configuración de CORS para red local
app.use(cors({
    origin: [
        'http://localhost:3000', 
        'http://192.168.1.100:3000',
        'http://127.0.0.1:3000'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
    console.log(`Accesible localmente en http://192.168.1.100:${PORT}`);
});