import mongoose, { Document, Model, Schema } from 'mongoose'


// Ini buat schema mongodb
interface UserDocument extends Document {
    username: string,
    email: string,
    password: string
}

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "nama harus diisi"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "nama harus diisi"],
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
})
const User: Model<UserDocument> = mongoose.model<UserDocument>('user', UserSchema)

export { User, UserDocument }

