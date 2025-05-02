import { Router } from 'express'
import { addProduct, getAll, updateProduct, deleteProduct, getByCategory, getByName } from './product.controller.js'
import {validateJwt } from '../../middlewares/validate.jwt.js'

const api = Router()

api.post('/add',[validateJwt ],addProduct)

api.get('/all',[validateJwt],getAll)

api.put('/update',[validateJwt],updateProduct)
api.delete('/delete',[validateJwt],deleteProduct)

api.get('/category',[validateJwt],getByCategory)
api.get('/name',[validateJwt],getByName)

export default api


