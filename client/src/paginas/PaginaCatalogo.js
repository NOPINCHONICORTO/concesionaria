import React, { useContext } from 'react';
import { ContextoVehiculos } from '../contexto/ContextoVehiculos';
import BarraBusqueda from '../componentes/Comun/BarraBusqueda';
import Filtros from '../componentes/Comun/Filtros';
import ListaVehiculos from '../componentes/Vehiculos/ListaVehiculos';

const PaginaCatalogo = () => {
    const { vehiculos } = useContext(ContextoVehiculos);

    const manejarBusqueda = (termino) => {
        // Implementar lógica de búsqueda
    };

    const manejarFiltros = (filtros) => {
        // Implementar lógica de filtros
    };

    return (
        <div className="pagina-catalogo">
            <h1>Catálogo de Vehículos</h1>
            <BarraBusqueda onBuscar={manejarBusqueda} />
            <Filtros onFiltrar={manejarFiltros} />
            <ListaVehiculos vehiculos={vehiculos} />
        </div>
    );
};

export default PaginaCatalogo;