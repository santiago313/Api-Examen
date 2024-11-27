import { Router } from "express";
import {
    getALLEjemplos,
    getEjemploById,
    postEjemplo,
    putEjemplo,
    deleteEejmplo
} from '../controllers/ejemplo.controller.js';
const ejemplo = Router();


ejemplo.get('/', getALLEjemplos);

ejemplo.get('/:id', getEjemploById);

ejemplo.put('/:id',putEjemplo);

ejemplo.post('/',postEjemplo);

ejemplo.delete('/:id',deleteEejmplo);

export default ejemplo; 