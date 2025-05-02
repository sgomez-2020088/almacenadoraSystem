import { Router } from 'express'
import { addCategory,getAll, updateCategory,deleteCategory } from './category.controller.js'
import {validateJwt,isAdmin } from '../../middlewares/validate.jwt.js'
import { addCategoryValidator, updateCategoryValidator, deleteCategoryValidator } from '../../helpers/validators.js'


const api = Router()

api.post('/add',[validateJwt,isAdmin,addCategoryValidator],addCategory)

api.get('/all',[validateJwt],getAll)
api.put('/update',[validateJwt,isAdmin,updateCategoryValidator],updateCategory)
api.delete('/delete',[validateJwt,isAdmin,deleteCategoryValidator],deleteCategory)

export default api


