import { Router } from 'express'
import { addSupplier,getAll, deleteSupplier, updateSupplier} from './supplier.controller.js'
import {validateJwt } from '../../middlewares/validate.jwt.js'
import { addSupplierValidator, UpdateSupplierValidator, deleteSupplierValidator } from '../../helpers/validators.js'

const api = Router()

api.post('/add',[validateJwt, addSupplierValidator ],addSupplier)

api.get('/all',[validateJwt],getAll)

api.put('/update',[validateJwt, UpdateSupplierValidator],updateSupplier)
api.delete('/delete',[validateJwt,deleteSupplierValidator],deleteSupplier)

export default api


