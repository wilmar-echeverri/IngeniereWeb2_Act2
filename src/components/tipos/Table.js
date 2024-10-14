import React from 'react';
import Fila from './Fila';

export default function Table({ tipos }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Creado</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    tipos.map((tipo, index) => (
                        <Fila
                            key={tipo._id}
                            index={index}
                            tipo={tipo}
                        />
                    ))
                }
            </tbody>
        </table>
    );
}
