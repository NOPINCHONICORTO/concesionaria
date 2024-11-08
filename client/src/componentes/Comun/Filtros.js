import React, { useState } from 'react';

const Filtros = ({ onFiltrar }) => {
    const [filtros, setFiltros] = useState({
        marcaModelo: '',
        precioMinimo: '',
        precioMaximo: '',
        añoDesde: '',
        añoHasta: ''
    });

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFiltros(prevFiltros => ({
            ...prevFiltros,
            [name]: value
        }));
    };

    const aplicarFiltros = () => {
        onFiltrar(filtros);
    };

    return (
        <div className="filtros">
            <input
                type="text"
                name="marcaModelo"
                placeholder="Marca/Modelo"
                value={filtros.marcaModelo}
                onChange={manejarCambio}
            />
            <div className="filtro-precio">
                <input
                    type="number"
                    name="precioMinimo"
                    placeholder="Precio Mínimo"
                    value={filtros.precioMinimo}
                    onChange={manejarCambio}
                />
                <input
                    type="number"
                    name="precioMaximo"
                    placeholder="Precio Máximo"
                    value={filtros.precioMaximo}
                    onChange={manejarCambio}
                />
            </div>
            <div className="filtro-año">
                <input
                    type="number"
                    name="añoDesde"
                    placeholder="Año Desde"
                    value={filtros.añoDesde}
                    onChange={manejarCambio}
                />
                <input
                    type="number"
                    name="añoHasta"
                    placeholder="Año Hasta"
                    value={filtros.añoHasta}
                    onChange={manejarCambio}
                />
            </div>
            <button onClick={aplicarFiltros}>Aplicar Filtros</button>
        </div>
    );
};

export default Filtros;