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
        
        const suppliers = await Supplier.find({
            status: {$ne: false }}
        )
        if(suppliers.length === 0) return res.status(400).send({message: 'Suppliers not found', success: false})
            return res.send({message: 'Suppliers found', success: true, suppliers})
    } catch (err) {
        console.error(err)
        res.status(500).send({message: 'general error'})
    }    
}

export const updateSupplier = async (req, res) => {
    try {
        const { id } = req.body
        const data = req.body
        const updated = await Supplier.findByIdAndUpdate(id, data, { new: true })

        if (!updated) return res.status(404).send({ message: 'Supplier not found', success: false })

        return res.send({ message: 'Supplier updated successfully', success: true, supplier: updated })
    } catch (err) {
        console.error(err)
        res.status(500).send({ message: 'General error updating supplier' })
    }
}

export const deleteSupplier = async (req, res) => {
    try {
        const { id } = req.body
        const supplier = await Supplier.findByIdAndUpdate(id, { status: false }, { new: true })
        if (!supplier) return res.status(404).send({ message: 'Supplier not found', success: false })

        return res.send({ message: 'Supplier deleted successfully', success: true, supplier })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'General error deleting supplier', success: false })
    }
}
