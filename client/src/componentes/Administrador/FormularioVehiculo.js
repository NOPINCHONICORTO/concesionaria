import React, { useState } from 'react';
import { crearVehiculo } from '../../servicios/ServicioVehiculos';

const FormularioVehiculo = () => {
    const [datosVehiculo, setDatosVehiculo] = useState({
        marcaModelo: '',
        año: '',
        kilometraje: '',
        precio: '',
        descripcion: '',
        imagen: null
    });

    const manejarCambio = (e) => {
        const { name, value, files } = e.target;
        setDatosVehiculo(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        Object.keys(datosVehiculo).forEach(key => {
            formData.append(key, datosVehiculo[key]);
        });

        try {
            await crearVehiculo(formData);
            alert('Vehículo creado exitosamente');
            // Resetear formulario
            setDatosVehiculo({
                marcaModelo: '',
                año: '',
                kilometraje: '',
                precio: '',
                descripcion: '',
                imagen: null
            });
        } catch (error) {
            console.error('Error al crear vehículo', error);
            alert('Error al crear vehículo');
        }
    };

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                name="marcaModelo"
                placeholder="Marca y Modelo"
                value={datosVehiculo.marcaModelo}
                onChange={manejarCambio}
                required
            />
            <input
                type="number"
                name="año"
                placeholder="Año"
                value={datosVehiculo.año}
                onChange={manejarCambio}
                required
            />
            <input
                type="number"
                name="kilometraje"
                placeholder="Kilometraje"
                value={datosVehiculo.kilometraje}
                onChange={manejarCambio}
                required
            />
            <input
                type="number"
                name="precio"
                placeholder="Precio"
                value={datosVehiculo.precio}
                onChange={manejarCambio}
                required
            />
            <textarea
                name="descripcion"
                placeholder="Descripción"
                value={datosVehiculo.descripcion}
                onChange={manejarCambio}
                required
            />
            <input
                type="file"
                name="imagen"
                accept="image/*"
                onChange={manejarCambio}
            />
            <button type="submit">Crear Vehículo</button>
        </form>
    );
};

export default FormularioVehiculo;