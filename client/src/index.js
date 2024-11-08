import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProveedorAutenticacion } from './contexto/ContextoAutenticacion';
import { ProveedorVehiculos } from './contexto/ContextoVehiculos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProveedorAutenticacion>
      <ProveedorVehiculos>
        <App />
      </ProveedorVehiculos>
    </ProveedorAutenticacion>
  </React.StrictMode>
);