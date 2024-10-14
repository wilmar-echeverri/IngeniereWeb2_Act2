import React from 'react';

export default function Loading() {
    return (
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
            <p>Cargando, por favor espera...</p>
        </div>
    );
}
