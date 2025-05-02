import Product from './product.model.js'

export const addProduct = async (req, res) => {
    try {
        const data = req.body
        const userId = req.user.uid
        const product = new Product({
            ...data,
            incharge: req.user.uid
        })
        await product.save()

        const allInfo = await Product.findById(product._id)
        .populate('category', 'name -_id')
        .populate('supplier', 'name -_id')
        .populate('incharge', 'name surname -_id')
    
        return res.send({message: 'Product added successfully',success: true, allInfo
        })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'General error adding product' })
    }
}

export const getAll = async (req, res) => {
    try {
        const products = await Product.find({
            status: { $ne: false }
        })
        .populate('category', 'name -_id')
        .populate('supplier', 'name -_id')
        .populate('incharge', 'name surname -_id')

        if (products.length === 0) return res.status(400).send({ message: 'Products not found', success: false })
        return res.send({ message: 'Products found', success: true, products })
    } catch (err) {
        console.error(err)
        res.status(500).send({ message: 'General error', success: false })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {id} = req.body
        const data = req.body
        const updated = await Product.findByIdAndUpdate (id, data,  { new: true })
        .populate('category', 'name -_id')
        .populate('supplier', 'name -_id')
        .populate('incharge', 'name surname -_id')
        if (!updated) return res.status(404).send({ message: 'Product not found', success: false })
        return res.send({ message: 'Product updated successfully', success: true, product: updated })
    }
    catch (err) {
        console.error(err)
        res.status(500).send({ message: 'General error updating product', success: false })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.body
        const {productConfirmation} = req.body
        if(productConfirmation != id) return res.status(400).send({message: 'Confirmation id does not match', success: false})

        const product = await Product.findByIdAndUpdate(id, { status: false }, { new: true })
        if (!product) return res.status(404).send({ message: 'Product not found', success: false })     
        return res.send({ message: 'Product deleted successfully', success: true, product })
    }
    catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'General error deleting product', success: false })
    }   
}

export const getByCategory = async (req, res) =>{
    try {
        const { categoryId } = req.body
        const products = await Product.find({
            category: categoryId,
            status: { $ne: false }
        }).populate('category', 'name -_id')
        .populate('supplier', 'name -_id')
        .populate('incharge', 'name surname -_id')
        
        if (products.length === 0) return res.status(400).send({message: 'Products not found', success: false})
            return res.send({message: 'Products found', success: true, products})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'General error getting products by category', success: false})
    }
}

export const getByName = async (req, res) =>{
    try {
        const {name} = req.body
        const products = await Product.find({
            name: { $regex: name, $options: 'i' },
            status: { $ne: false }
        }).populate('category', 'name -_id')
        .populate('supplier', 'name -_id')
        .populate('incharge', 'name surname -_id')

        if (products.length === 0) return res.status(400).send({message: 'Products not found', success: false})
            return res.send({message: 'Products found', success: true, products})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'General error getting products by name',success: false})
    }
}

export const getByDate = async (req, res) =>{
    try {
        const {date} = req.body
        const products = await Product.find({
            entryDate: { $gte: date}, //Greater Than or Equal 
            status: {$ne: false}

        }).populate('category', 'name -_id')
        .populate('supplier', 'name -_id')
        .populate('incharge', 'name surname -_id')

        if (products.length === 0) return res.status(400).send({message: 'Products not found', success: false})
            return res.send({message: 'Products found', success: true, products})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'General error getting products by date', success: false})
    }
}

export const getStockProducto = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await Product.findById(productId)
        if (!product) return res.status(404).send({message: 'Product not found', success: false})   

        return res.send({message: 'Product found, Stock of', product: product.name, stock: product.stock,  success: true,})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'General error getting stock', success: false})
    }
}

export const getAllStock = async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'General error getting all stock', success: false})
    }
}