import React from 'react';

export default function Modal({ productora, handleChange, guardar, clearProductora }) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva Productora</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                <div className="mb-3">
                    <label htmlFor="nombres" className="col-form-label">Nombres:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="nombres"
                    name='nombres'
                    onChange={handleChange}
                    value={productora.nombres}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="col-form-label">Descripción:</label>
                    <textarea 
                    className="form-control" 
                    id="descripcion"
                    name='descripcion'
                    onChange={handleChange}
                    value={productora.descripcion}
                    ></textarea>
                </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearProductora}>Cerrar</button>
                <button onClick={guardar} type="button" className="btn btn-primary">Enviar</button>
            </div>
            </div>
        </div>
        </div>
    );
}
