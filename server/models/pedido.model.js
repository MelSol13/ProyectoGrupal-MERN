const mongoose = require("mongoose");

const EsquemaPedido = new mongoose.Schema({
    producto: {
        type: String,
    },
    cantidad: {
    type: Number,
    },
    imagen:{
        type: String,
    },
    comentarios:{
        type: String,
    },
    
}, {timestamps:true, versionKey:false});


const Pedido= mongoose.model("pedidos", EsquemaPedido);
module.exports = Pedido;