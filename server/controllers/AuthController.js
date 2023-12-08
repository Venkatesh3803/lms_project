import UserModel from "../models/UserModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const registerUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPass;
    const newUser = await UserModel(req.body);
    try {
        const existingUser = await UserModel.findOne({ email: newUser.email })
        if (existingUser) return res.status(404).json("This Email Already Exist")
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const loginUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (!user) return res.status(404).json("Invalid Credentials")

        const passwordValidation = await bcrypt.compare(req.body.password, user.password)
        if (!passwordValidation) return res.status(404).json("Invalid Credentials")

        const token = jwt.sign({
            email: user.email, id: user._id,
        }, process.env.JWT_TOKEN, { expiresIn: "24h" })

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, token })

    } catch (error) {
        res.status(500).json(error.message)
    }
}