import React, { createContext, useState } from 'react';
import { iniciarSesion, registrar } from '../servicios/ServicioAutenticacion';

export const ContextoAutenticacion = createContext();

export const ProveedorAutenticacion = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [estaAutenticado, setEstaAutenticado] = useState(false);

    const iniciarSesionUsuario = async (credenciales) => {
        const usuarioAutenticado = await iniciarSesion(credenciales);
        setUsuario(usuarioAutenticado);
        setEstaAutenticado(true);
    };

    const cerrarSesion = () => {
        setUsuario(null);
        setEstaAutenticado(false);
    };

    return (
        <ContextoAutenticacion.Provider value={{ usuario, estaAutenticado, iniciarSesionUsuario, cerrarSesion, registrar }}>
            {children}
        </ContextoAutenticacion.Provider>
    );
};