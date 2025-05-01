import User from '../src/user/user.model.js'
import Customer from '../src/customer/customer.model.js'
import Supplier from '../src/supplier/supplier.model.js'

export const exitEmailUser = async(email)=>{
    const alreadyEmail = await User.findOne({email})
    if(alreadyEmail){
        console.error(`Email ${email} is already`)
        throw new Error(`Email ${email} is already`)
    }
}


export const findUser = async(id)=>{
    try{
        const userExist = await User.findById(id)
        if(!userExist) return false
        return userExist
    }catch(err){
        console.error(err)
        return false
    }
}

export const exitEmailCustomer = async(email)=>{
    const alreadyEmail = await Customer.findOne({email})
    if(alreadyEmail){
        console.error(`Email ${email} is already`)
        throw new Error(`Email ${email} is already`)
    }
}

export const exitEmailSupplier = async(contactEmail)=>{
    const alreadyEmail = await Supplier.findOne({contactEmail})
    if(alreadyEmail){
        console.error(`Email ${contactEmail} is already`)
        throw new Error(`Email ${contactEmail} is already`)
    }
}