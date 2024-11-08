import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://192.168.1.100:5000';

export const obtenerVehiculos = async () => {
    const respuesta = await axios.get(`${API_URL}/api/vehiculos`);
    return respuesta.data;
};

export const crearVehiculo = async (datosVehiculo) => {
    const respuesta = await axios.post(`${API_URL}/api/vehiculos`, datosVehiculo, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return respuesta.data;
};

export const obtenerVehiculoPorId = async (id) => {
    const respuesta = await axios.get(`${API_URL}/api/vehiculos/${id}`);
    return respuesta.data;
};