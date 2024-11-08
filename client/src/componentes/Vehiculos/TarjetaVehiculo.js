import React from 'react';
import { Link } from 'react-router-dom';

const TarjetaVehiculo = ({ vehiculo }) => {
    return (
        <div className="tarjeta-vehiculo">
            <img 
                src={vehiculo.imagen || '/imagen-default.jpg'} 
                alt={vehiculo.marcaModelo} 
            />
            <div className="informacion-vehiculo">
                <h3>{vehiculo.marcaModelo}</h3>
                <p>Año: {vehiculo.año}</p>
                <p>Kilometraje: {vehiculo.kilometraje} km</p>
                <p>Precio: ${vehiculo.precio.toLocaleString()}</p>
                <Link to={`/vehiculo/${vehiculo.id}`}>
                    Ver Detalles
                </Link>
            </div>
        </div>
    );
};

export default TarjetaVehiculo;