'use strict'

import {Routes} from 'express'

import {
    add_Curse, search
}from './curse.controller.js'

import {
    validateJwt, isAdmin
}from '../middlewares/valide-jwt.js'

const api= Routes()

api.post('/add_Curse', add_Curse)
api.post('/search',search)

export default api