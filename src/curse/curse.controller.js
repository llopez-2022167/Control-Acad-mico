'use strict'


import User from '../user/user.model.js'
import Curse from '../curse/curse.model.js'
import {checkUpdate} from '../utils/validator.js'

export const add_Curse = async (req, res)=>{
    try{
        let data = req.body
        //Crear instancia de curse
        let curse = new Curse(data)
        //Guardar en la db
        await curse.save()
        //Responde si todo esta bien 
        return res.send({message: `You create a new curse called: ${curse.name}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error addin a curse'})
    }
}

export const search = async(req, res)=>{
    try{
        let curse = await Curse.fin()
        return res.send({curse})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error gettin curse'})
    }
}