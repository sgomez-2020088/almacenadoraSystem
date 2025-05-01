import { Schema, model } from "mongoose"

const userSchema = new Schema({

        name: {
            type: String,
            required: [true, 'Name is required'],
            maxLength: [25, 'Can´t be overcome 25 characters']
        },
        surname: {
            type: String,
            required: [true, 'Surname is required'],
            maxLength: [25, 'Can´t be overcome 25 characters']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email is required']
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,
            maxLength: [25, 'Can´t be overcome 25 characters']
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            maxLength: [100, 'Can´t be overcome 100 characters'],
            minLength: [8, 'Password must be 8 characters']
        },
        phone: {
            type: String,
            required: [true, 'Phone is required'],
            maxLength: [13, 'Can´t be overcome 13 characters'],
            minLength: [8, 'Phone must be 8 characters']
        },
        role: {
            type: String,
            required: [true, 'Role is required'],
            uppercase: true,
            enum: ['ADMIN','EMPLOYEE']
        },
        status: {
            type: Boolean,
            defualt: true
        }
    }
)

export default model('User', userSchema)