import { body } from 'express-validator' 
import { validateErrors} from './validate.errors.js'
import { exitEmailUser } from './db.validators.js'

export const registerValidator = [
    body('name', 'Name cannot be empty').notEmpty(),
    body('surname', 'Name cannot be empty').notEmpty(),
    body('email', 'Email cannot be empty').notEmpty().isEmail().custom(exitEmailUser),
    body('password', 'Password cannot be empty').notEmpty().isStrongPassword().withMessage('Password must be strong').isLength({min:8}),
    body('username', 'Username cannot be empty').notEmpty(),
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
