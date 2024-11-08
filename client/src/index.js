import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProveedorAutenticacion } from './contexto/ContextoAutenticacion';
import { ProveedorVehiculos } from './contexto/ContextoVehiculos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProveedorAutenticacion>
        <ProveedorVehiculos>
          <App />
        </ProveedorVehiculos>
      </ProveedorAutenticacion>
    </BrowserRouter>
  </React.StrictMode>
);