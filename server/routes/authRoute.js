import express from "express";
import { loginUser, registerUser } from "../controllers/AuthController.js"
const route = express.Router()

route.post("/", registerUser)
route.post("/login", loginUser)

export default route