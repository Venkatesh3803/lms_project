import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePic: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    isInstructor: {
        type: Boolean,
        default: false,
    },
    occupation: {
        type: String,
    },
}, { timestamps: true });

export default mongoose.model("user", userSchema)