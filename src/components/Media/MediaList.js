import React, { useEffect, useState } from 'react';
import axios from 'axios';

    const MediaList = () => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const fetchMedia = async () => {
        const result = await axios.get('/api/media');
        setMedia(result.data);
        };
        fetchMedia();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`/api/media/${id}`);
        setMedia(media.filter(m => m._id !== id));
    };

    return (
        <div>
        <h2>Lista de Medios</h2>
        <ul>
            {media.map(m => (
            <li key={m._id}>
                {m.titulo} - {m.tipo}
                <button onClick={() => handleDelete(m._id)}>Eliminar</button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default MediaList;
