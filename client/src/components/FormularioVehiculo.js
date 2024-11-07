import React, { useState } from 'react';
import axios from 'axios';
import './FormularioVehiculo.css';

function FormularioVehiculo() {
    const [formData, setFormData] = useState({
        marcaModelo: '',
        kilometraje: '',
        carroceria: '',
        motor: '',
        transmision: '',
        equipamiento: '',
        combustible: '',
        color: '',
        estadoGeneral: '',
        historialMantenimiento: '',
        precio: '',
        imagen: null, // Nuevo campo para imagen
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            imagen: e.target.files[0], // Se guarda el archivo de imagen
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();

        // Añadir los datos del formulario
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.post('http://localhost:5000/api/vehiculos', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Vehículo guardado:', response.data);
        } catch (error) {
            console.error('Error al guardar el vehículo:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Agregar Vehículo</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label>Marca y Modelo</label>
                    <input
                        type="text"
                        name="marcaModelo"
                        value={formData.marcaModelo}
                        onChange={handleChange}
                        required
                    />
                </div>
                {/* Los demás campos siguen el mismo patrón */}
                <div className="form-group">
                    <label>Imagen</label>
                    <input
                        type="file"
                        name="imagen"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Guardar Vehículo</button>
                </div>
            </form>
        </div>
    );
}

export default FormularioVehiculo;
