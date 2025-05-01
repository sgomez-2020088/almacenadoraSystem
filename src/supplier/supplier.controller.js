import Supplier from './supplier.model.js'

export const addSupplier = async (req, res) =>{
    try {
        const data = req.body
        const supplier = new Supplier(data)
        await supplier.save()

        return res.send({message: 'Supplier added successfully', success: true,supplier})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'General error adding supplier'})
    }
}

export const getAll = async (req, res) =>{
    try {
        
        const suppliers = await Supplier.find()
        if(suppliers.length === 0) return res.status(400).send({message: 'Suppliers not found', success: false})
            return res.send({message: 'Suppliers found', success: true, suppliers})
    } catch (err) {
        console.error(err)
        res.status(500).send({message: 'general error'})
    }    
}

export const updateCategory = async (req, res) => {
    try {
        const categoryId = req.body.id 
        const  data = req.body

        const updateCategory = await Category.findByIdAndUpdate(categoryId, data, {new:true})
        if(!updateCategory) return res.status(404).send({message: 'Category not found', success: false})
            return res.send({message: 'Category updated succesfully', category: updateCategory, success: true})

    } catch (err) {
        console.error(err)
        res.status(500).send({message: 'General error', success: false})
    }
}
