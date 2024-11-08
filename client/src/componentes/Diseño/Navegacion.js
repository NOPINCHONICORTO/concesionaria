import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/vehiculos">Vehículos</Link></li>
        <li><Link to="/nuevo-vehiculo">Agregar Vehículo</Link></li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
    </nav>
  );
};

export default Navegacion;