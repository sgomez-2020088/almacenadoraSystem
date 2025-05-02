import { Router } from 'express'
import {validateJwt,isAdmin} from '../../middlewares/validate.jwt.js'
import { addCustomer, getAll, updateCustomer, deleteCustomer} from './customer.controller.js'
import { addCustomerValidator, updateCustomerValidator, deleteCustomerValidator } from '../../helpers/validators.js'

const api = Router()

api.post('/add',[validateJwt,isAdmin,addCustomerValidator ], addCustomer)

api.get('/all',[validateJwt],getAll)

api.put('/update',[validateJwt,isAdmin,updateCustomerValidator],updateCustomer)
api.delete('/delete',[validateJwt,isAdmin,deleteCustomerValidator],deleteCustomer)

export default api


