import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
};

const crearProductora = (productora) => {
    const data = {
        nombre: productora.nombre,
        descripcion: productora.descripcion
    };
    return axiosConfig.post('/productora', data, { headers });
};

const obtenerProductoras = () => {
    return axiosConfig.get('/productora', { headers });
};

const editarProductoraPorID = (productora, id) => {
    const data = {
        nombre: productora.nombre,
        descripcion: productora.descripcion
    };
    return axiosConfig.put('/productora/' + id, data, { headers });
};

const obtenerProductoraPorID = (id) => {
    return axiosConfig.get('/productora/' + id, { headers });
};

export {
    crearProductora,
    obtenerProductoras,
    editarProductoraPorID,
    obtenerProductoraPorID
};
