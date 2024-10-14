import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GeneroList = () => {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        fetchGeneros();
    }, []);

    const fetchGeneros = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/genero');
            setGeneros(response.data);
        } catch (error) {
            console.error('Error fetching generos:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/api/genero/${id}`);
            fetchGeneros(); 
        } catch (error) {
            console.error('Error deleting genero:', error);
        }
    };

    return (
        <div>
            <h2>Lista de Géneros</h2>
            <ul>
                {generos.map((genero) => (
                    <li key={genero._id}>
                        {genero.nombre} - {genero.descripcion}
                        <button onClick={() => handleDelete(genero._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GeneroList;
