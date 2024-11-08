import React, { createContext, useState, useEffect } from 'react';
import { obtenerVehiculos } from '../servicios/ServicioVehiculos';

export const ContextoVehiculos = createContext();

export const ProveedorVehiculos = ({ children }) => {
    const [vehiculos, setVehiculos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarVehiculos = async () => {
            try {
                const datos = await obtenerVehiculos();
                setVehiculos(datos);
                setCargando(false);
            } catch (error) {
                setError('No se pudieron cargar los vehículos');
                setCargando(false);
            }
        };

        cargarVehiculos();
    }, []);

    return (
        <ContextoVehiculos.Provider value={{ vehiculos, cargando, error }}>
            {children}
        </ContextoVehiculos.Provider>
    );
};