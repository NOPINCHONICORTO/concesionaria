const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'riverplate123', // Tu contraseña actual
    database: 'db' // Nombre de tu base de datos
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos.');
});

// Convertir a promesas para usar async/await
const promiseConnection = connection.promise();

module.exports = promiseConnection;