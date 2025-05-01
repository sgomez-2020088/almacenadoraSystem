import Customer from './customer.model.js'

export const addCustomer = async (req, res) =>{
    try {
        const data = req.body
        const customer = new Customer(data)
        await customer.save()

        return res.send({message: 'Customer added successfully', success: true, customer})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'General error adding customer', success: false}) 
    }
}

export const getAll = async (req, res) =>{
    try {
        const customers = await Customer.find({
            status: {$ne: false }}
        )
        if(customers.length === 0) return res.status(400).send({message: 'Customers not found', success: false})
            return res.send({message: 'Customers found', success: true, customers})
    } catch (err) {
        console.error(err)
        res.status(500).send({message: 'general error', success: false})
    }    
}

export const updateCustomer = async (req, res) => {
    try {
        const {id} = req.body
        const data = req.body
        const updated = await Customer.findByIdAndUpdate(id, data, { new: true })

        if (!updated) return res.status(404).send({ message: 'Customer not found', success: false })

        return res.send({ message: 'Customer updated successfully', success: true, customer: updated })
    } catch (err) {
        console.error(err)
        res.status(500).send({ message: 'General error updating customer', success: false })
    }
}

export const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.body
        const customer = await Customer.findByIdAndUpdate(id, { status: false }, { new: true })
        if (!customer) return res.status(404).send({ message: 'Customer not found', success: false })
            
            return res.send({ message: 'Customer deleted successfully', success: true, customer })      
            } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'General error deleting customer', success: false })
    }   
}