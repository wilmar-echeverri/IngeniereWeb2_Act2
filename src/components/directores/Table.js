import React from 'react';
import Fila from './Fila';

export default function Table({ directores }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Fecha de Creación</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    directores.map((director, index) => 
                        (
                            <Fila
                            key={director._id}
                            index={index}
                            director={director}
                            />
                        )
                    )
                }
            </tbody>
        </table>
    );
}
