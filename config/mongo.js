//Configuracion estricta 
'use strict'

import mongoose, {Mongoose} from "mongoose"

export const connect = async()=>{
    try{
        mongoose.connect.on('error', () =>{
            console.log('MongoDB | could not be connect to mongodb')
            mongoose.disconnect()
        })
        mongoose.connect.on('error', () =>{
            console.log('MongoDB | try connecting')
            //mongoose.disconnect()
        })
        mongoose.connect.on('error', () =>{
            console.log('MongoDB | conected to mongodb')
            //mongoose.disconnect()
        })
        mongoose.connect.on('err', ()=>{
            console.log('MongoDB | reconected to mongodb')
            //mongoose.disconnect()
        })
        mongoose.connection.on('err', ()=>{
            console.log('MongoDB | disconected to mongodb')
        })
        await mongoose.connect(process.env.URI_MONGO, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 50
        })
    }catch(err){
        console.error(err)
    }

}