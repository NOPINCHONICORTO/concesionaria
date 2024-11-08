import React, { useState, useEffect } from 'react';
import TarjetaVehiculo from './TarjetaVehiculo';
import { obtenerVehiculos } from '../../servicios/ServicioVehiculos';

const ListaVehiculos = () => {
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

     if (cargando) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="lista-vehiculos">
            {vehiculos.map(vehiculo => (
                <TarjetaVehiculo 
                    key={vehiculo.id} 
                    vehiculo={vehiculo} 
                />
            ))}
        </div>
    );
};

export default ListaVehiculos;