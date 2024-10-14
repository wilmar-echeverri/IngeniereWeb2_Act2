import React, { useState } from 'react';
import axios from 'axios';

const GeneroForm = ({ onGeneroCreated }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoGenero = { nombre, descripcion };
        try {
            await axios.post('http://localhost:4000/api/genero', nuevoGenero);
            onGeneroCreated();
            setNombre('');
            setDescripcion('');
        } catch (error) {
            console.error('Error creating genero:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Crear Género</h2>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div>
                <label>Descripción:</label>
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            <button type="submit">Crear</button>
        </form>
    );
};

export default GeneroForm;
