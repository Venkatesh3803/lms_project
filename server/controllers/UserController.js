import UserModel from "../models/UserModel.js";

export const updateUser = async (req, res) => {
    try {
       
        const user = await UserModel.findById(req.user.id)
        if (!user) return res.status(401).json("you are not allowed to do that")
        await UserModel.findByIdAndUpdate(user._id, req.body)
        res.status(200).json("updated sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getSingleUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        if (!user) return res.status(401).json("you are not allowed to do that")
        const { password, instructor, ...others } = user._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id)
        if (!user) return res.status(401).json("you are not allowed to do that")
        await UserModel.findByIdAndDelete(user._id)
        res.status(200).json("deleted sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}