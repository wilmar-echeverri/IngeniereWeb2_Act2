import React, { useState } from 'react';

const ProductoraForm = ({ onSubmit, initialData = {} }) => {
    const [nombre, setNombre] = useState(initialData.nombre || '');
    const [estado, setEstado] = useState(initialData.estado || '');
    const [slogan, setSlogan] = useState(initialData.slogan || '');
    const [descripcion, setDescripcion] = useState(initialData.descripcion || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, estado, slogan, descripcion });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre:</label>
            <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div>
            <label>Estado:</label>
            <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            />
        </div>
        <div>
            <label>Slogan:</label>
            <input
            type="text"
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
            />
        </div>
        <div>
            <label>Descripción:</label>
            <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            />
        </div>
        <button type="submit">Guardar</button>
        </form>
    );
};

export default ProductoraForm;
