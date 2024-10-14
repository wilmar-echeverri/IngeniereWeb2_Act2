import React from 'react';
import Fila from './Fila';

export default function Table({ productoras }) {
    return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombres</th>
            <th scope="col">Descripción</th>
            <th scope="col">Estado</th>
            <th scope="col">Creado</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {
            productoras.map((productora, index) => (
                <Fila
                key={productora._id}
                index={index}
                productora={productora}
                />
            ))
            }
        </tbody>
        </table>
    );
}
