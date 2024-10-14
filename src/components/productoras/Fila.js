import React from 'react';

export default function Fila({ productora, index }) {
    return (
        <tr key={productora._id}>
        <th scope="row">{index + 1}</th>
        <td>{productora.nombre}</td>
        <td>{productora.descripcion}</td>
        <td>{productora.estado}</td>
        <td>{new Date(productora.fecha_creacion).toLocaleDateString()}</td>
        <td>
            <button type="button" className="btn btn-outline-success">Editar</button>
        </td>
        </tr>
    );
}
