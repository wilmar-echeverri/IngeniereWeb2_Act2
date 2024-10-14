import React from 'react';

export default function Fila({ director, index }) {
    return (
        <tr key={director._id}>
            <th scope="row">{index + 1}</th>
            <td>{director.nombres}</td>
            <td>{director.estado}</td>
            <td>{new Date(director.fecha_creacion).toLocaleDateString()}</td>
            <td>
                <button type="button" className="btn btn-outline-success">Editar</button>
            </td>
        </tr>
    );
}
