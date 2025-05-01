import { Router } from 'express'
import { addCategory,getAll, updateCategory,deleteCategory } from './category.controller.js'
import {validateJwt } from '../../middlewares/validate.jwt.js'
import { addCategoryValidator, updateCategoryValidator, deleteCategoryValidator } from '../../helpers/validators.js'


const api = Router()

api.post('/add',[validateJwt,addCategoryValidator],addCategory)

api.get('/all',[validateJwt],getAll)
api.put('/update',[validateJwt,updateCategoryValidator],updateCategory)
api.delete('/delete',[validateJwt,deleteCategoryValidator],deleteCategory)

export default api


