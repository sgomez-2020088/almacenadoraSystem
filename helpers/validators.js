import { body, ExpressValidator } from 'express-validator' 
import { validateErrors} from './validate.errors.js'
import { exitEmailUser, exitEmailCustomer, exitEmailSupplier, exitsUsername } from './db.validators.js'

export const registerValidator = [
    body('name', 'Name cannot be empty').notEmpty(),
    body('surname', 'Name cannot be empty').notEmpty(),
    body('email', 'Email cannot be empty').notEmpty().isEmail().custom(exitEmailUser),
    body('password', 'Password cannot be empty').notEmpty().isStrongPassword().withMessage('Password must be strong').isLength({min:8}),
    body('username', 'Username cannot be empty').notEmpty().custom(exitsUsername),
    body('phone', 'Phone cannot be empty').notEmpty().isMobilePhone(),
    validateErrors       
]


export const loginValidator = [
    body('userInformation','Your information cannot be empty').notEmpty().toLowerCase(),
    body('password', 'Password cannot be empty').notEmpty().isStrongPassword().isLength({min:8}),
    validateErrors       
]

export const addCategoryValidator = [
    body('name', 'name cannot be empty').notEmpty(),
    body('description', 'Description cannot be empty').notEmpty(),
    validateErrors
]

export const updateCategoryValidator = [
    body('name', 'Name cannot be a blank').optional().notEmpty(),
    body('description', 'Description cannot be a blank').optional().notEmpty(),
    validateErrors
]

export const deleteCategoryValidator = [
    body('id','Id category is necesary').notEmpty(),
    validateErrors
]

export const addSupplierValidator = [
    body('name', 'Name cannot be empty').notEmpty(),
    body('contactEmail', 'Email cannot be empty').notEmpty().isEmail().custom(exitEmailSupplier),
    body('contactPhone', 'Phone cannot be empty').notEmpty().isMobilePhone(),
    body('product', 'Product name cannot be empty').notEmpty(),
    validateErrors
]

export const UpdateSupplierValidator = [
    body('id','You must need a supplier ID').optional().notEmpty(),
    body('name', 'Name cannot be empty').optional().notEmpty(),
    body('contactEmail', 'Email cannot be empty').optional().notEmpty().isEmail(),
    body('contactPhone', 'Phone cannot be empty').optional().notEmpty().isMobilePhone(),
    body('product', 'Product name cannot be empty').optional().notEmpty(),
    validateErrors
]

export const deleteSupplierValidator = [
    body('id','You must need a supplier ID').notEmpty(),
    validateErrors
]

export const addCustomerValidator = [
    body('name', 'Name cannot be empty').notEmpty(),
    body('email', 'Email cannot be empty').notEmpty().isEmail().custom(exitEmailCustomer),
    body('phone', 'Phone cannot be empty').notEmpty().isMobilePhone(),
    body('product', 'Product name cannot be empty').notEmpty(),
    validateErrors
]

export const updateCustomerValidator = [
    body('id','You must need a customer ID').optional().notEmpty(),
    body('name', 'Name cannot be empty').optional().notEmpty(),
    body('email', 'Email cannot be empty').optional().notEmpty().isEmail(),
    body('phone', 'Phone cannot be empty').optional().notEmpty().isMobilePhone(),
    body('product', 'Product name cannot be empty').optional().notEmpty(),
    validateErrors
]

export const deleteCustomerValidator = [
    body('id','You must need a customer ID').notEmpty(),
    validateErrors
]   

export const addReportValidator = [
    body('type', 'Type cannot be empty').notEmpty().isIn(['ENTRY', 'EXIT']).withMessage('Type must be ENTRY or EXIT'),
    body('quantity', 'Quantity cannot be empty or must be a number').notEmpty().isNumeric(),
    body('product', 'Product cannot be empty').notEmpty(),
    validateErrors
]

export const addProductValidator = [
    body('name', 'Name cannot be empty').notEmpty(),
    body('category', 'Category cannot be empty').notEmpty(),
    body('price', 'Price cannot be empty').notEmpty().isNumeric(),
    body('stock', 'Stock cannot be empty').notEmpty().isNumeric(),
    body('supplier', 'Supplier cannot be empty').notEmpty(),
    body('entryDate', 'Entry date cannot be empty').notEmpty().isDate(),
    validateErrors
]

export const updateProductValidator = [
    body('id','You must need a product ID').optional().notEmpty(),
    body('name', 'Name cannot be empty').optional().notEmpty(),
    body('price', 'Price cannot be empty').optional().notEmpty().isNumeric(),
    body('stock', 'Stock cannot be empty').optional().notEmpty().isNumeric(),
    body('entryDate', 'Entry date cannot be empty').optional().notEmpty().isDate(),
    validateErrors
]

export const deleteProductValidator = [
    body('id','ID cannot be empty').notEmpty(),
    body('productConfirmation','Product confirmation cannot be empty').notEmpty(),
    validateErrors
]

export const productCategoryValidator = [
    body('category','ID cannot be empty').notEmpty(),
    validateErrors
]

export const productNameValidator = [  
    body('name','Name cannot be empty').notEmpty(),
    validateErrors
]

export const productDateValidator = [
    body('date','Date cannot be empty').notEmpty().isDate(),
    validateErrors
]

export const productStockValidator = [
    body('productId','Product ID cannot be empty').notEmpty(),
    validateErrors
]











