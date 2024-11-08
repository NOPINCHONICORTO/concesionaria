import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerVehiculoPorId } from '../../servicios/ServicioVehiculos';

const DetalleVehiculo = () => {
    const { id } = useParams();
    const [vehiculo, setVehiculo] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const cargarDetalles = async () => {
            try {
                const datos = await obtenerVehiculoPorId(id);
                setVehiculo(datos);
                setCargando(false);
            } catch (error) {
                console.error('Error al cargar detalles', error);
                setCargando(false);
            }
        };

        cargarDetalles();
    }, [id]);

    if (cargando) return <div>Cargando...</div>;
    if (!vehiculo) return <div>Vehículo no encontrado</div>;

    return (
        <div className="detalle-vehiculo">
            <div className="contenedor-imagen">
                <img 
                    src={vehiculo.imagen || '/imagen-default.jpg'} 
                    alt={vehiculo.marcaModelo} 
                />
            </div>
            <div className="informacion-detallada">
                <h2>{vehiculo.marcaModelo}</h2>
                <div className="especificaciones"> ```jsx
                    <p>Año: {vehiculo.año}</p>
                    <p>Kilometraje: {vehiculo.kilometraje} km</p>
                    <p>Precio: ${vehiculo.precio.toLocaleString()}</p>
                    <p>Descripción: {vehiculo.descripcion}</p>
                </div>
            </div>
        </div>
    );
};

export default DetalleVehiculo;