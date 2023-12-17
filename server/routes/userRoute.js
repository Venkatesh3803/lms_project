import express from "express"

import {  verifyTokenAndAuthorization } from "../middleware/verifyJwt.js"
import { deleteUser, getSingleUser, updateUser } from "../controllers/UserController.js"
const route = express.Router()

route.get("/:id", getSingleUser)
route.patch("/", verifyTokenAndAuthorization, updateUser)
route.delete("/:id",verifyTokenAndAuthorization, deleteUser)

export default route