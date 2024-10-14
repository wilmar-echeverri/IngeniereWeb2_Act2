import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductoraList = () => {
    const [productoras, setProductoras] = useState([]);

    useEffect(() => {
        const fetchProductoras = async () => {
        const result = await axios.get('/api/productora');
        setProductoras(result.data);
        };
        fetchProductoras();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`/api/productora/${id}`);
        setProductoras(productoras.filter(productora => productora._id !== id));
    };

    return (
        <div>
        <h2>Lista de Productoras</h2>
        <ul>
            {productoras.map(productora => (
            <li key={productora._id}>
                {productora.nombre} - {productora.slogan}
                <button onClick={() => handleDelete(productora._id)}>Eliminar</button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ProductoraList;
