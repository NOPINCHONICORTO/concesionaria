const validarEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const validarPassword = (password) => {
    return password.length >= 6; // Ejemplo de validación simple
};

module.exports = { 
    validarEmail, 
    validarPassword 
};