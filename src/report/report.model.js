import { model, Schema } from "mongoose";

const reportSchema = new Schema(
    {
        type: {
            type: String,
            required: [true, 'Type is required'],
            enum: ['ENTRY', 'EXIT']
        },
        quantity: {
            type: Number,
            required: [true, 'Quantity is required'],
            min: [0, 'Quantity must be more than 0'],
        },
        date: {
            type: Date,
            required: [true, 'Date is required'],
            default: Date.now
        },
        motive: {
            type: String,
            maxLength: [40, 'Can not be overcome 40 characters'],
        },
        destination: {
            type: String,
            maxLength: [40, 'Can not be overcome 40 characters'],
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User is required'],
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: [true, 'Product is required'],
        }
    }
)

export default model('Report', reportSchema)
