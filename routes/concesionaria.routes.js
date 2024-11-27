import { Router } from "express";
import { getAllCarros, getIdCarros, postCarros, putCarros, deleteCarros } from "../controllers/concesionaria.controller.js";

const carro = Router();

carro.get('/', getAllCarros)
carro.get('/:id', getIdCarros)
carro.post('/', postCarros)
carro.put('/:id', putCarros)
carro.delete('/:id', deleteCarros)

export default carro