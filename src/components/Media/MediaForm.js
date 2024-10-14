import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MediaForm = ({ onSubmit, initialData = {} }) => {
    const [serial, setSerial] = useState(initialData.serial || '');
    const [titulo, setTitulo] = useState(initialData.titulo || '');
    const [sinopsis, setSinopsis] = useState(initialData.sinopsis || '');
    const [url, setUrl] = useState(initialData.url || '');
    const [portada, setPortada] = useState(initialData.portada || '');
    const [anioEstreno, setAnioEstreno] = useState(initialData.anio_estreno || '');
    const [genero, setGenero] = useState(initialData.genero || '');
    const [director, setDirector] = useState(initialData.director || '');
    const [productora, setProductora] = useState(initialData.productora || '');
    const [tipo, setTipo] = useState(initialData.tipo || '');

    useEffect(() => {
        // Fetch the list of generos, directores, productoras, and tipos for dropdowns
        const fetchData = async () => {
        // Fetch all required data
        };
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
        serial,
        titulo,
        sinopsis,
        url,
        portada,
        anio_estreno: anioEstreno,
        genero,
        director,
        productora,
        tipo,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Serial:</label>
            <input
            type="text"
            value={serial}
            onChange={(e) => setSerial(e.target.value)}
            />
        </div>
        <div>
            <label>Título:</label>
            <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            />
        </div>
        <div>
            <label>Sinopsis:</label>
            <textarea
            value={sinopsis}
            onChange={(e) => setSinopsis(e.target.value)}
            />
        </div>
        <div>
            <label>URL:</label>
            <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            />
        </div>
        <div>
            <label>Portada:</label>
            <input
            type="text"
            value={portada}
            onChange={(e) => setPortada(e.target.value)}
            />
        </div>
        <div>
            <label>Año de Estreno:</label>
            <input
            type="text"
            value={anioEstreno}
            onChange={(e) => setAnioEstreno(e.target.value)}
            />
        </div>
        <div>
            <label>Género:</label>
            <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            />
        </div>
        <div>
            <label>Director:</label>
            <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            />
        </div>
        <div>
            <label>Productora:</label>
            <input
            type="text"
            value={productora}
            onChange={(e) => setProductora(e.target.value)}
            />
        </div>
        <div>
            <label>Tipo (Película o Serie):</label>
            <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            />
        </div>
        <button type="submit">Guardar</button>
        </form>
    );
};

export default MediaForm;
