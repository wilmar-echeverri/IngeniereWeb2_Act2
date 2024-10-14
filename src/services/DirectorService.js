import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
};

const crearDirector = (director) => {
    const data = {
        nombres: director.nombres,
        estado: director.estado,
        fecha_creacion: director.fecha_creacion
    };
    return axiosConfig.post('/director', data, { headers });
};

const obtenerDirectores = () => {
    return axiosConfig.get('/director', { headers });
};

const editarDirectorPorID = (director, id) => {
    const data = {
        nombres: director.nombres,
        estado: director.estado,
        fecha_creacion: director.fecha_creacion
    };
    return axiosConfig.put('/director/' + id, data, { headers });
};

const obtenerDirectorPorID = (id) => {
    return axiosConfig.get('/director/' + id, { headers });
};

export {
    crearDirector,
    obtenerDirectores,
    editarDirectorPorID,
    obtenerDirectorPorID
};
