import React from 'react';

export default function Modal({ tipo, handleChange, guardar, clearTipo }) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Nuevo Tipo</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                    name='nombre'
                                    onChange={handleChange}
                                    value={tipo.nombre}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message-text" className="col-form-label">Descripción:</label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    name='descripcion'
                                    onChange={handleChange}
                                    value={tipo.descripcion}
                                ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearTipo}>Cerrar</button>
                        <button onClick={guardar} type="button" className="btn btn-primary">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
