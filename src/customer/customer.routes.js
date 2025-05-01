import { Router } from 'express'
import {validateJwt } from '../../middlewares/validate.jwt.js'
import { addCustomer, getAll, updateCustomer, deleteCustomer} from './customer.controller.js'
import { addCustomerValidator, updateCustomerValidator, deleteCustomerValidator } from '../../helpers/validators.js'

const api = Router()

api.post('/add',[validateJwt, addCustomerValidator ], addCustomer)

api.get('/all',[validateJwt],getAll)

api.put('/update',[validateJwt, updateCustomerValidator],updateCustomer)
api.delete('/delete',[validateJwt, deleteCustomerValidator],deleteCustomer)

export default api


