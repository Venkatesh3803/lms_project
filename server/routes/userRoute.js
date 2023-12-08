import express from "express"
import { deleteUser, getSingleUser, updateUser } from "../controllers/userController.js"
import {  verifyTokenAndAuthorization } from "../middleware/verifyJwt.js"
const route = express.Router()

route.get("/:id", getSingleUser)
route.patch("/", verifyTokenAndAuthorization, updateUser)
route.delete("/:id",verifyTokenAndAuthorization, deleteUser)

export default route