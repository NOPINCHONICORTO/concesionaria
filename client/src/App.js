import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navegacion from './componentes/Diseño/Navegacion';
import PaginaInicio from './paginas/PaginaInicio';
import ListaVehiculos from './componentes/Vehiculos/ListaVehiculos';
import DetalleVehiculo from './componentes/Vehiculos/DetalleVehiculo';
import Registro from './componentes/Autenticacion/Registro';
import Login from './componentes/Autenticacion/IniciarSesion';
import FormularioVehiculo from './componentes/Administrador/FormularioVehiculo';
import Pie from './componentes/Diseño/Pie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navegacion />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/vehiculos" element={<ListaVehiculos />} />
        <Route path="/vehiculos/:id" element={<DetalleVehiculo />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nuevo-vehiculo" element={<FormularioVehiculo />} />
      </Routes>
      <Pie />
    </div>
  );
}

export default App;