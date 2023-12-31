const mongoose = require("mongoose");

const EsquemaPedido = new mongoose.Schema({
    producto: {
        type: String,
        required:["Producto requerido"],
    },
    cantidad: {
        type: Number,
        required:["Cantidad requerida"],
    },
    imagen:{
        type: String,
        required:["Cantidad requerida"],
    },
    comentarios:{
        type: String,
        required:["Comentarios requerido"],
    },
    fecha:{
        type:String,
        required:["Fecha requerida"],
    },
    hora:{
        type: String,
        required:["Hora requerida"],
    }
}, {timestamps:true, versionKey:false});


const Pedido= mongoose.model("pedidos", EsquemaPedido);
module.exports = Pedido;