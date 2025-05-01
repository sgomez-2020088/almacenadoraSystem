import { Router } from 'express'
import { addSupplier,getAll} from './supplier.controller.js'
import {validateJwt } from '../../middlewares/validate.jwt.js'
import { addSupplierValidator } from '../../helpers/validators.js'

const api = Router()

api.post('/add',[validateJwt, addSupplierValidator ],addSupplier)

api.get('/all',[validateJwt],getAll)

//api.put('/update',[validateJwt,updateCategoryValidator],updateCategory)
//api.delete('/delete',[validateJwt,deleteCategoryValidator],deleteCategory)

export default api


