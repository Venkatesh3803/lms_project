import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import AuthRoute from "./routes/authRoute.js"
import UserRoute from "./routes/userRoute.js"
import CourseRoute from "./routes/courseRoute.js"
import cors from "cors"
// configrations
const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())
const port = 5000 || process.env.PORT;

// mongodb connection
const connectDb = () => {
    try {
        mongoose.connect(process.env.MONGOURL,
            console.log("connected to db")
        )
    } catch (error) {
        console.log(error)
    }
}



// starting server
app.listen(port, () => {
    connectDb()
    console.log(`app is listening at ${port}`)
})

// routes
app.use("/api/auth", AuthRoute)
app.use("/api/user", UserRoute)
app.use("/api/course", CourseRoute)