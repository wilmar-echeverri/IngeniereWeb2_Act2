import React from 'react';

export default function Modal({ media, handleChange, guardar, clearMedia }) {
    return (
        <div className="modal fade" id="mediaModal" tabIndex="-1" aria-labelledby="mediaModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="mediaModalLabel">Gestionar Media</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={clearMedia}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="serial" className="form-label">Serial</label>
                            <input
                                type="text"
                                className="form-control"
                                id="serial"
                                name="serial"
                                value={media.serial}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="titulo" className="form-label">Titulo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="titulo"
                                name="titulo"
                                value={media.titulo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="sinopsis" className="form-label">Sinopsis</label>
                            <textarea
                                className="form-control"
                                id="sinopsis"
                                name="sinopsis"
                                value={media.sinopsis}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productora" className="form-label">Productora</label>
                            <input
                                type="text"
                                className="form-control"
                                id="productora"
                                name="productora"
                                value={media.productora}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tipo" className="form-label">Tipo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tipo"
                                name="tipo"
                                value={media.tipo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={clearMedia}>Cerrar</button>
                        <button type="button" className="btn btn-primary" onClick={guardar}>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
