import React, { useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from "react-router-dom";

const HacerPedido = () => {

    const { id } = useParams();
    const [pedido, setPedido]=useState({});
    const [sitio, setSitio]=useState({});
    const [producto, setProducto] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [imagen, setImagen] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    const [errores, setErrores] = useState({});

    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pedidos/" + id, { withCredentials: true })
            .then(res => setPedido(res.data))
            .catch(err => {
                if (err.response.status === 401) {
                    navigate("/iniciar-sesion");
                }
            });
    }, [id])

    const limpiarFormulario = () => {
        setProducto('');
        setCantidad('');
        setImagen('');
        setComentarios('');
        setFecha('');
        setHora('');
    };

    const guardarPedido = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pedidos", {
            producto,
            cantidad,
            imagen,
            comentarios,
            fecha,
            hora
        }, { withCredentials: true })
        .then(res => {
            setPedido(res.data);
            limpiarFormulario();
        })
        .catch(err => {
            if (err.response.status === 401) {
                navigate("/iniciar-sesion");
            } else {
                setErrores(err.response.data.errors);
            }
        });
};

const borrarPedido = (id) => {
    axios.delete("http://localhost:8000/api/pedidos/" + id, { withCredentials: true })
    .then(res => {
        setPedido(res.data);
    })
        .catch(err => console.log(err));
}

    return (
        <div className='container-4'>
            <div className='row'>
                <img src={sitio.logo} className='logo' alt="logo"></img>
                <h1 className='pedido-tit'>Realizar Pedido</h1>
                <form className='form' onSubmit={guardarPedido}>
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
                            <textarea type="text" className="form-control" value={comentarios} onChange={(e) => setComentarios(e.target.value)} />
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
                        <button type="submit" className="btn-vista" onClick={guardarPedido}>
                            Realizar Pedido
                        </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='card'>
                <h1>Mis Pedidos</h1>
                <p>Producto:{pedido.producto}</p>
                <p>Cantidad:{pedido.cantidad}</p>
                <p>Comentarios:{pedido.comentarios}</p>
                <p>Fecha de Retiro:{pedido.fecha}</p>
                <p>Hora de Retiro:{pedido.hora}</p>
                <img src={pedido.imagen} alt="imagen referencia"></img>
            </div>
            <div>
                <Link className="btn-cambios" to={"/editarpedido/" + pedido._id}>Editar</Link>
                <button className="btn-borrar" onClick={() => borrarPedido(pedido._id)}>Borrar</button>
                <button>Confirmar</button>
            </div>
        </div>
    );
};


export default HacerPedido;