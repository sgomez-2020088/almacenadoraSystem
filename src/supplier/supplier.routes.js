import { Router } from 'express'
import { addSupplier,getAll, deleteSupplier, updateSupplier} from './supplier.controller.js'
import {validateJwt,isAdmin } from '../../middlewares/validate.jwt.js'
import { addSupplierValidator, UpdateSupplierValidator, deleteSupplierValidator } from '../../helpers/validators.js'

const api = Router()

api.post('/add',[validateJwt,isAdmin, addSupplierValidator ],addSupplier)

api.get('/all',[validateJwt],getAll)

api.put('/update',[validateJwt,isAdmin,UpdateSupplierValidator],updateSupplier)
api.delete('/delete',[validateJwt,isAdmin,deleteSupplierValidator],deleteSupplier)

export default api


