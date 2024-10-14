import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
};

const crearTipo = (tipo) => {
    const data = {
        nombre: tipo.nombre,
        descripcion: tipo.descripcion
    };
    return axiosConfig.post('/tipo', data, { headers });
};

const obtenerTipos = () => {
    return axiosConfig.get('/tipo', { headers });
};

const editarTipoPorID = (tipo, id) => {
    const data = {
        nombre: tipo.nombre,
        descripcion: tipo.descripcion
    };
    return axiosConfig.put('/tipo/' + id, data, { headers });
};

const obtenerTipoPorID = (id) => {
    return axiosConfig.get('/tipo/' + id, { headers });
};

export {
    crearTipo,
    obtenerTipos,
    editarTipoPorID,
    obtenerTipoPorID
};