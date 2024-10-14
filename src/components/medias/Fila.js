import React from 'react';

export default function Fila({ media, index }) {
    return (
        <tr key={media._id}>
            <th scope="row">{index + 1}</th>
            <td>{media.serial}</td>
            <td>{media.titulo}</td>
            <td>{media.sinopsis}</td>
            <td>{media.productora.nombre}</td>
            <td>{media.tipo.nombre}</td>
            <td>{new Date(media.fecha_creacion).toLocaleDateString()}</td>
            <td>
                <button type="button" className="btn btn-outline-success">Editar</button>
            </td>
        </tr>
    );
}
