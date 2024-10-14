import React, { useState } from 'react';

const DirectorForm = ({ onSubmit, initialData = {} }) => {
    const [nombre, setNombre] = useState(initialData.nombre || '');
    const [biografia, setBiografia] = useState(initialData.biografia || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ nombre, biografia });
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
                <label>Biografía:</label>
                <textarea
                    value={biografia}
                    onChange={(e) => setBiografia(e.target.value)}
                />
            </div>
        <button type="submit">Guardar</button>
        </form>
    );
};

export default DirectorForm;
