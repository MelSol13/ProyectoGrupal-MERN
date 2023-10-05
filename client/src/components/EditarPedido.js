import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


const ActualizarPedido = () => {

    const { id } = useParams();
    const [pedido, setPedido] = useState({});
    const [producto, setProducto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [imagen, setImagen] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    const [errores, setErrores] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pedidos/${id}`, { withCredentials: true })
            .then(res => {
                const pedido = res.data;
                setProducto(pedido.producto);
                setCantidad(pedido.cantidad);
                setImagen(pedido.imagen);
                setComentarios(pedido.comentarios);
                setFecha(pedido.fecha);
                setHora(pedido.hora);
                
            })
            .catch(err => {
                if (err.response.status === 401) {
                    navigate("/iniciar-sesion");
                }
            });
    }, [id]);

        const editarPedido = (e) => {
            e.preventDefault();
            axios.put(`http://localhost:8000/api/pedidos/${id}`, {
                producto,
                cantidad,
                imagen,
                comentarios,
                fecha,
                hora
            }, { withCredentials: true })
                .then(res => navigate(`/hacerpedido/${res.data._id}`))
                .catch(err => setErrores(err.response.data.errors))
        };


        return (
            <div className='container-4'>
                <div className='row'>
                    <h1 className='pedido-edit'>Editar Pedido</h1>
                    <form className='form' onSubmit={editarPedido}>
                        <div className='col-md-4'>
                            <div className='form-group'>
                                <label>Producto:</label>
                                <input type="text" name="producto" className="form-control" value={producto} onChange={e => setProducto(e.target.value)} />
                                {errores.producto ? <span className='text-danger'>{errores.producto.message}</span> : null}
                            </div>
                            <div>
                                <label>Cantidad:</label>
                                <input type="text" name="cantidad" className="form-control" value={cantidad} onChange={e => setCantidad(e.target.value)} />
                                {errores.cantidad ? <span className='text-danger'>{errores.cantidad.message}</span> : null}
                            </div>
                            <div className='form-group'>
                                <label>Imagen :</label>
                                <input type="text" className="form-control" value={imagen} onChange={(e) => setImagen(e.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label>Comentarios:</label>
                                <input type="text" className="form-control" value={comentarios} onChange={(e) => setComentarios(e.target.value)} />
                                {errores.comentarios ? <span className='text-danger'>{errores.comentarios.message}</span> : null}
                            </div>
                            <div className='form-group'>
                                <label>Fecha De Retiro:</label>
                                <textarea className="form-control" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                                {errores.fecha ? <span className='text-danger'>{errores.fecha.message}</span> : null}
                            </div>
                            <div className='form-group'>
                                <label>Hora De Retiro:</label>
                                <textarea className="form-control" value={hora} onChange={(e) => setHora(e.target.value)} />
                                {errores.hora ? <span className='text-danger'>{errores.hora.message}</span> : null}
                            </div>
                            <div>
                            <button type="submit" className="btn-vista" onClick={editarPedido}>
                                Confirmar Pedido
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
    
    export default ActualizarPedido;