import React from 'react';

export default function Loading() {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
        </div>
    );
}
