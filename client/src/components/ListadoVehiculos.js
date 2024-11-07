import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListadoVehiculos() {
    const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        const fetchVehiculos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/vehiculos');
                setVehiculos(response.data);
            } catch (error) {
                console.error('Error al obtener los vehículos:', error);
            }
        };
        fetchVehiculos();
    }, []);

    return (
        <div className="vehiculos-list">
            <h2>Vehículos Disponibles</h2>
            {vehiculos.length === 0 ? (
                <p>No hay vehículos disponibles</p>
            ) : (
                <div className="vehiculos-container">
                    {vehiculos.map((vehiculo) => (
                        <div className="vehiculo" key={vehiculo.id}>
                            <img src={`http://localhost:5000/uploads/${vehiculo.imagen}`} alt={vehiculo.marcaModelo} />
                            <p>{vehiculo.marcaModelo}</p>
                            <p>{vehiculo.precio}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ListadoVehiculos;
