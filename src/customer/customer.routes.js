import { Router } from 'express'
import {validateJwt } from '../../middlewares/validate.jwt.js'
import { addCustomer, getAll } from './customer.controller.js'

const api = Router()

api.post('/add',[validateJwt ], addCustomer)

api.get('/all',[validateJwt],getAll)

//api.put('/update',[validateJwt, UpdateSupplierValidator],updateSupplier)
//api.delete('/delete',[validateJwt,deleteSupplierValidator],deleteSupplier)

export default api


