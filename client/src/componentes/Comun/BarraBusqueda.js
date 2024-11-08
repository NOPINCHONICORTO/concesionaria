import React, { useState } from 'react';

const BarraBusqueda = ({ onBuscar }) => {
    const [termino, setTermino] = useState('');

    const manejarCambio = (e) => {
        setTermino(e.target.value);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        onBuscar(termino);
    };

    return (
        <form onSubmit={manejarEnvio} className="barra-busqueda">
            <input
                type="text"
                placeholder="Buscar vehículos..."
                value={termino}
                onChange={manejarCambio}
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default BarraBusqueda;