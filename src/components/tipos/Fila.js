import React from 'react';

export default function Fila({ tipo, index }) {
    return (
        <tr key={tipo._id}>
            <th scope="row">{index + 1}</th>
            <td>{tipo.nombre}</td>
            <td>{tipo.descripcion}</td>
            <td>{new Date(tipo.fecha_creacion).toLocaleDateString()}</td>
            <td>
                <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { /* lógica para editar */ }}>Editar</button>
            </td>
        </tr>
    );
}
