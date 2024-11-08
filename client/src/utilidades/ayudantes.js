export const formatearPrecio = (precio) => {
    return precio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });
};

export const validarEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};