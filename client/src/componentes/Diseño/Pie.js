import React from 'react';

const Pie = () => {
    return (
        <footer>
            <div className="contenedor-pie">
                <div className="informacion-contacto">
                    <h3>Concesionaria</h3>
                    <p>Dirección: Calle Ejemplo 123</p>
                    <p>Teléfono: (123) 456-7890</p>
                    <p>Email: info@concesionaria.com</p>
                </div>
                <div className="enlaces-rapidos">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li>Inicio</li>
                        <li>Catálogo</li>
                        <li>Sobre Nosotros</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className="redes-sociales">
                    <h4>Síguenos</h4>
                    {/* Agregar iconos de redes sociales */}
                </div>
            </div>
            <div className="derechos">
                <p>&copy; 2024 Concesionaria. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Pie;