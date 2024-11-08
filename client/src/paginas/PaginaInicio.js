import React from 'react';
import { Link } from 'react-router-dom';

const PaginaInicio = () => {
  return (
    <div className="pagina-inicio">
      <h1>Bienvenido a nuestra Concesionaria</h1>
      <div className="acciones-principales">
        <Link to="/vehiculos" className="boton">Ver Vehículos</Link>
        <Link to="/nuevo-vehiculo" className="boton">Agregar Vehículo</Link>
      </div>
    </div>
  );
};

export default PaginaInicio;