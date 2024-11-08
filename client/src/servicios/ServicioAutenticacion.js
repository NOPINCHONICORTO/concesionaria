import axios from 'axios';

// Usa variable de entorno o IP local por defecto
const API_URL = process.env.REACT_APP_API_URL || 'http://192.168.1.100:5000';

export const iniciarSesion = async (credenciales) => {
    try {
        const respuesta = await axios.post(`${API_URL}/api/usuarios/login`, credenciales);
        return respuesta.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error de conexión');
    }
};

export const registrar = async (datos) => {
    try {
        const respuesta = await axios.post(`${API_URL}/api/usuarios/registrar`, datos);
        return respuesta.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error de conexión');
    }
};