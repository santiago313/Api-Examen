import mongoose from "mongoose";
import Carro from "../models/concesionaria.model.js";

export const getAllCarros = async(req, res)=>{
    console.log('obtiene todos los autos')
    try {
        const autos = await Carro.find({},{__v:0})
        if(autos.length === 0){
            return res.status(404).json({
                msg: 'No se encontraron autos'
            });
        }

        return res.status(200).json({
            autos
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los Autos'
        });
    }
}

export const getIdCarros = async(req, res) =>{
    console.log('AUTOS POR ID')
    const id = req.params.id
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const autosPID = await Carro.findById(id)

        if(!autosPID){
            return res.status(404).json({
                msg:'Ejemplo no encontrado'
            });
        }

        return res.status(200).json({
            autosPID
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los Autos'
        });
    }
}

export const postCarros = async(req, res) => {
    console.log('Agregando autos')
    const body = req.body
    const autos = new Carro(body)

    try {
        const validar = autos.validateSync()
        if(validar){
            const errorMessages = Object.values(validar.errors).map(error => error.message)
            return res.status(404).json({
                errorMessages
            })
        }
        await autos.save();
        return res.status(200).json({
            autos
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los Autos'
        });
    }
}

export const putCarros = async(req, res) => {
    console.log('Actualizando autos')
    const id = req.params.id
    const body = req.body

    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const autos = await Carro.findByIdAndUpdate(id, body, {new:true, runValidators:true})
        if(!autos){
            return res.status(404).json({
                msg: 'Auto no encontrado'
            });
        }

        return res.status(200).json({
            autos
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los Autos'
        });
    }
}

export const deleteCarros = async(req, res) => {
    console.log('Eliminando auto')
    const id = req.params.id
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const auto = await Carro.findByIdAndDelete(id)
        if(!auto){
            return res.status(404).json({
                msg: 'Auto no encontrado'
            });
        }
        return res.status(200).json({
            msg: 'Auto eliminado'
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los Autos'
        });
    }
}