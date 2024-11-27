import Ejemplo from "../models/ejemplo.model.js";
import mongoose from "mongoose";
import express from 'express'; 

export const getALLEjemplos = async (req, res) => {
    console.log('obtiene todos los ejemplos');
    try{
        const ejemplos = await Ejemplo.find({},{__v:0});
        if(ejemplos.length === 0){
            return res.status(404).json({
                msg: 'No se encontraron ejemplo'
            });
        }
        return res.status(200).json({
            ejemplos
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los ejemplos'
        });
    }
};

export const getEjemploById = async (req, res) => {
    console.log('EJEMPLO POR ID');
    const id = req.params.id;
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const ejemplo = await Ejemplo.findById(id);
        if(!ejemplo){
            return res.status(404).json({
                msg:'Ejemplo no encontrado'
            });
        }
        return res.status(200).json({
            ejemplo
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener el ejemplo'
        });
    }
}

export const postEjemplo = async (req,res) =>   {
    console.log('POST EJEMPLO');
    const body = req.body;
    const ejemplo = new Ejemplo(body);
    try {
        const validationError = ejemplo.validateSync();
        if(validationError){
            const errorMessages = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                error: errorMessages
            });
        }
        await ejemplo.save();
        return res.status(201).json({
            ejemplo
        });
    } catch (error) {
        return res.status(500).json({
            msg:'Error al guardar el ejemplo'
        });
    }
}

//export const postEjemplo = async (req, res) => {

//};

export const putEjemplo = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const ejemplo = await Ejemplo.findByIdAndUpdate(id,body,{new:true, runValidators:true});
        if(!ejemplo){
            return res.status(404).json({
                msg: 'Ejemplo no encontrado'
            });
        }

        return res.status(200).json({
            ejemplo
        });
    }catch (error) {
        return res.status(500).json({
                msg: 'Error al actualizar el ejemplo'
            });
    }
};


export const deleteEejmplo = async (req, res) => {
    console.log('DELETE EJEMPLO');
    const id = req.params.id;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'ID no valido'
            });
        }
        const ejemplo = await Ejemplo.findByIdAndDelete(id);
        if(!ejemplo){
            return res.status(404).json({
                msg: 'Ejemplo no encontrado'
            });
        }
        return res.status(200).json({
            msgg: 'Ejemplo eliminado',
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar el ejemplo'
        });
    }
};

