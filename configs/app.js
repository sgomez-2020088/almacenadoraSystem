'use strict'

import express from 'express' 
import morgan from 'morgan' 
import helmet from 'helmet' 
import cors from 'cors' 

import { limiter } from '../middlewares/rate.limit.js'
import authRoutes from '../src/auth/auth.routes.js'
import categoryRoutes from '../src/category/category.routes.js'
import  {createDefaultAdmin} from '../configs/setUpData.js'
import supplierRoutes from '../src/supplier/supplier.routes.js'
import customerRoutes from '../src/customer/customer.routes.js'
import productRoutes from '../src/product/product.routes.js'


const configs = (app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use(cors())
    app.use(helmet())
    app.use(limiter)
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use('/v1/auth', authRoutes)
    app.use('/v1/category', categoryRoutes)
    app.use('/v1/supplier', supplierRoutes)
    app.use('/v1/customer', customerRoutes)
    app.use('/v1/product', productRoutes)

}

export const initServer = async()=> {
    const app = express()

    try{
        await createDefaultAdmin()
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`)
    }catch(err){
        console.log('Server init failed', err)
    }
    
}