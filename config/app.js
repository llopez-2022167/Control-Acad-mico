//La importaciones
import express from 'express'
import { config } from 'dotenv' 

import userRoutes from '../src/curse/curse.routes.js'
import curseRoutes from '../src/curse/curse.routes.js'

//Configuraciones
const app = express()
config()
const port = process.env.PORT || 3056

//Configuracion del servidor
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Configuraciones de rutas
app.use(userRoutes)
app.use('/curse', curseRoutes)

//Levantando el servidor
export const initServer= ()=>{
    app.listen(port)
    console.log(`Server HTTP runnig in port ${port}`)
}