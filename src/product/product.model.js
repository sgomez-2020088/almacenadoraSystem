import { Schema, model, Types } from "mongoose"

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxLength: [25, 'Can´t be overcome 25 characters']
    },
    category: {
        type:Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be more than 0']
    },
    stock: {
        type: Number,
        required: [true, 'Stock is required'],
        min: [0, 'Stock must be more than 0']
    },
    supplier: {
        type: Types.ObjectId,
        ref: 'Supplier',
        required: [true, 'Supplier is required']
    },
    entryDate: {
        type: Date,
        required: [true, 'Entry date is required']
    },
    incharge: {
        type: Types.ObjectId,
        ref: 'User',
        required: [true, 'In charge is required']
    },
    status: {
        type: Boolean,
        default: true
    }
})

export default model('Product', productSchema)