import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TipoList = () => {
    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        const fetchTipos = async () => {
        const result = await axios.get('/api/tipo');
        setTipos(result.data);
        };
        fetchTipos();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`/api/tipo/${id}`);
        setTipos(tipos.filter(tipo => tipo._id !== id));
    };

    return (
        <div>
        <h2>Lista de Tipos</h2>
        <ul>
            {tipos.map(tipo => (
            <li key={tipo._id}>
                {tipo.nombre} - {tipo.descripcion}
                <button onClick={() => handleDelete(tipo._id)}>Eliminar</button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default TipoList;
