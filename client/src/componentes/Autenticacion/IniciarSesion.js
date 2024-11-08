import React, { useState, useContext } from 'react';
import { ContextoAutenticacion } from '../../contexto/ContextoAutenticacion';

const IniciarSesion = () => {
    const [credenciales, setCredenciales] = useState({
        correo: '',
        contraseña: ''
    });

    const { iniciarSesion } = useContext(ContextoAutenticacion);

    const manejarCambio = (e) => {
        setCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value
        });
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        try {
            await iniciarSesion(credenciales);
        } catch (error) {
            console.error('Inicio de sesión fallido', error);
        }
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={manejarEnvio}>
                <input 
                    type="email" 
                    name="correo"
                    placeholder="Correo Electrónico"
                    value={credenciales.correo}
                    onChange={manejarCambio}
                    required
                />
                <input 
                    type="password" 
                    name="contraseña"
                    placeholder="Contraseña"
                    value={credenciales.contraseña}
                    onChange={manejarCambio}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default IniciarSesion;