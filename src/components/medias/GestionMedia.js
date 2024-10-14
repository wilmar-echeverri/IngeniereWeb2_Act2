import React, { useEffect, useState } from 'react';
import { crearMedia, obtenerMedias } from '../../services/MediaService';
import Modal from './Modal';
import Table from './Table';
import Loading from './Loading';

export default function Medias() {
    const [medias, setMedias] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [media, setMedia] = useState({
        nombres: '',
        descripcion: '',
        estado: 'Inactivo', 
        fecha_creacion: new Date().toISOString()
    });

    useEffect(() => {
        listarMedias();
    }, []);

    const listarMedias = async () => {
        setCargando(true);
        try {
        const { data } = await obtenerMedias();
        setMedias(data);
        } catch (e) {
        console.log(e);
        } finally {
        setCargando(false);
        }
    };

    const guardar = async () => {
        setCargando(true);
        try {
        await crearMedia(media);
        listarMedias();
        clearMedia();
        } catch (e) {
        console.log(e);
        } finally {
        setCargando(false);
        }
    };

    const handleChange = (e) => {
        setMedia({
        ...media,
        [e.target.name]: e.target.value
        });
    };

    const clearMedia = () => {
        setMedia({
        nombres: '',
        descripcion: '',
        estado: 'Inactivo',
        fecha_creacion: new Date().toISOString()
        });
    };

    return (
        <>
        <Modal 
            media={media}
            handleChange={handleChange}
            guardar={guardar}
            clearMedia={clearMedia}
        />
        <h3>Medias</h3>
        <button onClick={clearMedia} type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Nuevo</button>
        {cargando && <Loading />}
        <Table medias={medias} />
        </>
    );
}
