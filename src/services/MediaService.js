import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type': 'application/json'
};

const crearMedia = (media) => {
    const data = {
        titulo: media.titulo,
        descripcion: media.sinopsis,
        tipo: media.tipo,
        fechaEstreno: media.fechaEstreno
    };
    return axiosConfig.post('/media', data, { headers });
};

const obtenerMedias = () => {
    return axiosConfig.get('/media', { headers });
};

const editarMediaPorID = (media, id) => {
    const data = {
        titulo: media.titulo,
        descripcion: media.sinopsis,
        tipo: media.tipo,
        fechaEstreno: media.fechaEstreno
    };
    return axiosConfig.put('/media/' + id, data, { headers });
};

const obtenerMediaPorID = (id) => {
    return axiosConfig.get('/media/' + id, { headers });
};

export {
    crearMedia,
    obtenerMedias,
    editarMediaPorID,
    obtenerMediaPorID
};
