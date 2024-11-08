import axios from 'axios';

const URL_API_VEHICULOS = 'http://localhost:5000/api/vehiculos';

export const obtenerVehiculos = async () => {
    const respuesta = await axios.get(URL_API_VEHICULOS);
    return respuesta.data;
};

export const crearVehiculo = async (datosVehiculo) => {
    const respuesta = await axios.post(URL_API_VEHICULOS, datosVehiculo, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return respuesta.data;
};

export const obtenerVehiculoPorId = async (id) => {
    const respuesta = await axios.get(`${URL_API_VEHICULOS}/${id}`);
    return respuesta.data;
};