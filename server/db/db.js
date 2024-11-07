const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',     // Cambia esto si tu base de datos está en otro host
    user: 'root',     // Tu usuario de MySQL
    password: 'riverplate123', // Tu contraseña de MySQL
    database: 'concesionaria_db' // Nombre de la base de datos
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos.');
});

module.exports = connection;
