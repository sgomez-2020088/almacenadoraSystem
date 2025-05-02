import Product from "../product/product.model.js"
import reportModel from "./report.model.js"

export const addRegistry = async (req, res) => {
    try {
        const { type, quantity, motive, destination, product} = req.body
        
        const productFind = await Product.findById(product)
        if (!productFind){
            return res.status(404).send(
                { 
                    success: false ,
                    message: 'Product not found',
                }
            )
        }

        if(type === 'ENTRY'){
            const report = new reportModel(
                {
                    type,
                    quantity,
                    user: req.user.uid,
                    product
                }
            )

            const productUpdate = await Product.findByIdAndUpdate(
                product,
                { $inc: { stock: quantity } },
                { new: true }
            )

            await report.save()

            const reportPopulate = await reportModel.findById(report._id).populate(
                {
                    path: 'product',
                    select: 'name'
                },
            ).populate(
                {
                    path: 'user',
                    select: 'name email role'
                }
            )

            return res.send(
                {
                    success: true,
                    message: 'Product entry registered successfully',
                    reportPopulate,
                    product: {
                        name: productUpdate.name,
                        stock: productUpdate.stock
                    }
                }
            )
        } else if(type === 'EXIT'){
            if (!motive || !destination) {
                return res.status(400).send(
                    { 
                        message: 'Motive and destination are required', 
                        success: false 
                    }
                )
            }
            const report = new reportModel(
                {
                    type,
                    quantity,
                    user: req.user.uid,
                    product,
                    motive,
                    destination
                }
            )

            const productUpdate = await Product.findByIdAndUpdate(
                product,
                { $inc: { stock: -quantity } },
                { new: true }
            )

            await report.save()

            const reportPopulate = await reportModel.findById(report._id).populate(
                {
                    path: 'product',
                    select: 'name'
                },
            ).populate(
                {
                    path: 'user',
                    select: 'name email role'
                }
            )

            return res.send(
                {
                    success: true,
                    message: 'Product exit registered successfully',
                    reportPopulate,
                    product: {
                        name: productUpdate.name,
                        stock: productUpdate.stock
                    }
                }
            )

        } else {
            return res.status(400).send(
                { 
                    message: 'Type not valid', 
                    success: false 
                }
            )
        }
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'General error adding entry' })
    }
}

export const getAllReports = async (req, res) => {
    try {
        const reports = await reportModel.find().populate(
            {
                path: 'product',
                select: 'name'
            },
        ).populate(
            {
                path: 'user',
                select: 'name email role'
            }
        )

        if (!reports) {
            return res.status(404).send(
                { 
                    message: 'Reports not found', 
                    success: false 
                }
            )
        }

        return res.send(
            { 
                success: true,
                message: 'Reports found', 
                total: reports.length,
                reports
            }
        )
        
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            { 
                message: 'General error getting reports' 
            }
        )
        
    }
}

export const getEntryReports = async (req, res) => {
    try {
        const reports = await reportModel.find(
            {
                type: 'ENTRY'   
            }
        ).populate(
            {
                path: 'product',
                select: 'name'
            },
        ).populate(
            {
                path: 'user',
                select: 'name email role'
            }
        )

        if (!reports) {
            return res.status(404).send(
                { 
                    message: 'Entry reports not found', 
                    success: false 
                }
            )
        }

        return res.send(
            { 
                success: true,
                message: 'Reports found', 
                total: reports.length,
                reports
            }
        )
        
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            { 
                message: 'General error getting reports' 
            }
        )
        
    }
}

export const getExitReports = async (req, res) => {
    try {
        const reports = await reportModel.find(
            {
                type: 'EXIT'   
            }
        ).populate(
            {
                path: 'product',
                select: 'name'
            },
        ).populate(
            {
                path: 'user',
                select: 'name email role'
            }
        )

        if (!reports) {
            return res.status(404).send(
                { 
                    message: 'Exit reports not found', 
                    success: false 
                }
            )
        }

        return res.send(
            { 
                success: true,
                message: 'Reports found', 
                total: reports.length,
                reports
            }
        )
        
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            { 
                message: 'General error getting reports' 
            }
        )
        
    }
}

export const getOneReport = async (req, res) => {
    try {
        const { id } = req.params
        const report = await reportModel.findById(id).populate(
            {
                path: 'product',
                select: 'name'
            },
        ).populate(
            {
                path: 'user',
                select: 'name email role'
            }
        )

        if (!report) {
            return res.status(404).send(
                { 
                    message: 'Report not found', 
                    success: false 
                }
            )
        }

        return res.send(
            { 
                success: true,
                message: 'Report found', 
                report
            }
        )
        
    } catch (err) {
        console.error(err)
        return res.status(500).send(
            { 
                message: 'General error getting report' 
            }
        )
        
    }
}