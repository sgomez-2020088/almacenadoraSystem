import { Router } from 'express'
import { 
    addProduct, 
    getAll, 
    updateProduct, 
    deleteProduct,
     getByCategory, 
     getByName,
     getByDate,
     getStockProducto,
     getAllStock,
     getInvetory 
    } from './product.controller.js'
    
import {validateJwt,isAdmin } from '../../middlewares/validate.jwt.js'

import { addProductValidator, 
    updateProductValidator, 
    deleteProductValidator,
    productCategoryValidator,
    productNameValidator,
    productDateValidator,
    productStockValidator 
} from '../../helpers/validators.js'

const api = Router()

api.post('/add',[validateJwt,addProductValidator ],addProduct)

api.get('/all',[validateJwt],getAll)

api.put('/update',[validateJwt,isAdmin,updateProductValidator],updateProduct)
api.delete('/delete',[validateJwt,isAdmin,deleteProductValidator],deleteProduct)

api.get('/category',[validateJwt,productCategoryValidator],getByCategory)
api.get('/name',[validateJwt,productNameValidator],getByName)
api.get('/date',[validateJwt,productDateValidator],getByDate)
api.get('/stock',[validateJwt,productStockValidator],getStockProducto)
api.get('/allStock',[validateJwt],getAllStock)
api.get('/inventory',[validateJwt],getInvetory)

export default api


