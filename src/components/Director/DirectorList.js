import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DirectorList = () => {
    const [directores, setDirectores] = useState([]);

    useEffect(() => {
        const fetchDirectores = async () => {
        const result = await axios.get('/api/director');
        setDirectores(result.data);
        };
        fetchDirectores();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`/api/director/${id}`);
        setDirectores(directores.filter(director => director._id !== id));
    };

    return (
        <div>
        <h2>Lista de Directores</h2>
        <ul>
            {directores.map(director => (
            <li key={director._id}>
                {director.nombre} - {director.biografia}
                <button onClick={() => handleDelete(director._id)}>Eliminar</button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default DirectorList;
