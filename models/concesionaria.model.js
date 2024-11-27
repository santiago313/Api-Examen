import mongoose from "mongoose";

const CarroSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    kilometraje: {
        type: Number,
        required: false,
        default: 0
    },
    color: {
        type: String,
        required: true
    },
    numeroPuertas: {
        type: Number,
        required: false,
        default: 4
    },
    ubicacion: {
        type: String,
        required: false
    },
    descripcion: {
        type: String,
        required: false
    },
});


const Carro = mongoose.model("Carro", CarroSchema);
export default Carro;
