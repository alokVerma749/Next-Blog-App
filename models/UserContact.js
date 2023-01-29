import mongoose from "mongoose";

const UserContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    sentAt: {
        type: Number
    }
})

export default mongoose.models.UserContact || mongoose.model('UserContact', UserContactSchema)