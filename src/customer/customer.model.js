import { Schema, model } from "mongoose"

const customerSchema = new Schema({

        name: {
            type: String,
            required: [true, 'Name is required'],
            maxLength: [25, 'Can´t be overcome 25 characters']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email is required']
        },
        phone: {
            type: String,
            required: [true, 'Phone is required'],
            maxLength: [13, 'Can´t be overcome 13 characters'],
            minLength: [8, 'Phone must be 8 characters']
        },
        product: {
            type: String,
            required: [true, 'Product name is required'],
            maxLength: [50, 'Can´t be overcome 50 characters']
        },
        status: {
            type: Boolean,
            defualt: true
        }
    }
)

export default model('Customer', customerSchema)