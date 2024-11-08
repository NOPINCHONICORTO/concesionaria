import React, { useState, useContext } from 'react';
import { ContextoAutenticacion } from '../../contexto/ContextoAutenticacion';

const Registro = () => {
    const [datosRegistro, setDatosRegistro] = useState({
        nombre: '',
        correo: '',
        contraseña: '',
        confirmarContraseña: ''
    });

    const { registrar } = useContext(ContextoAutenticacion);

    const manejarCambio = (e) => {
        setDatosRegistro({
            ...datosRegistro,
            [e.target.name]: e.target.value
        });
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        
        if (datosRegistro.contraseña !== datosRegistro.confirmarContraseña) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            await registrar({
                nombre: datosRegistro.nombre,
                email: datosRegistro.correo,
                password: datosRegistro.contraseña
            });
        } catch (error) {
            console.error('Error en registro', error);
        }
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            <form onSubmit={manejarEnvio}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre Completo"
                    value={datosRegistro.nombre}
                    onChange={manejarCambio}
                    required
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo Electrónico"
                    value={datosRegistro.correo}
                    onChange={manejarCambio}
                    required
                />
                <input
                    type="password"
                    name="contraseña"
                    placeholder="Contraseña"
                    value={datosRegistro.contraseña}
                    onChange={manejarCambio}
                    required
                />
                <input
                    type="password"
                    name="confirmarContraseña"
                    placeholder="Confirmar Contraseña"
                    value={datosRegistro.confirmarContraseña}
                    onChange={manejarCambio}
                    required
                />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Registro;