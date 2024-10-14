import { axiosConfig } from "../config/axiosConfig";

const headers = {
    'Content-Type' : 'application/json'
}

const crearGenero = (genero) => {
    const data = {
        nombre : genero.nombre,
        descripcion : genero.descripcion
    }
    return axiosConfig.post('/genero', data, {
        headers : headers
    })
}

const obtenerGeneros = () => {
    return axiosConfig.get('/genero', {
        headers : headers
    })
}

const editarGeneroPorID = (genero, id) => {
    const data = {
        nombre : genero.nombre,
        descripcion : genero.descripcion
    }
    return axiosConfig.put('/genero/'+id, data, {
        headers : headers
    })
}

const obtenerGeneroPorID = (id) => {
    return axiosConfig.get('/genero/'+id, {
        headers : headers
    })
}

export {
    crearGenero,
    obtenerGeneros,
    editarGeneroPorID,
    obtenerGeneroPorID
}