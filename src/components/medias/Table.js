import React from 'react';
import Fila from './Fila';

export default function Table({ medias }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Serial</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Sinopsis</th>
                    <th scope="col">Productora</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Creado</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    medias.map((media, index) => (
                        <Fila
                            key={media._id}
                            index={index}
                            media={media}
                        />
                    ))
                }
            </tbody>
        </table>
    );
}
