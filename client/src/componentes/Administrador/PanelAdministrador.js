import React, { useContext, useState } from 'react';
import { ContextoAutenticacion } from '../../contexto/ContextoAutenticacion';
import FormularioVehiculo from './FormularioVehiculo';
import ListaVehiculos from '../Vehiculos/ListaVehiculos';

const PanelAdministrador = () => {
    const { usuario } = useContext(ContextoAutenticacion);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    if (!usuario || usuario.rol !== 'admin') {
        return <div>Acceso denegado</div>;
    }

    return (
        <div className="panel-administrador">
            <h1>Panel de Administración</h1>
            <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
                {mostrarFormulario ? 'Cancelar' : 'Agregar Nuevo Vehículo'}
            </button>

            {mostrarFormulario && <FormularioVehiculo />}

            <h2>Listado de Vehículos</h2>
            <ListaVehiculos esAdmin={true} />
        </div>
    );
};

export default PanelAdministrador;