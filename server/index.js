const express = require('express');
const cors = require('cors');
const vehiculosRoutes = require('./routes/vehiculos');

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para cargar imágenes de la carpeta 'uploads'
app.use('/uploads', express.static('uploads'));

// Rutas
app.use('/api', vehiculosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
