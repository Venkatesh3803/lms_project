import express from "express";
import { createCoures, deleteCourses, enrollCourse, getCoures, getEnrolledCourses, getSingleCoures, writeReview } from "../controllers/CourseController.js";
const route = express.Router();

route.post("/", createCoures)
route.get("/", getCoures)
route.get("/single/:id", getSingleCoures)
route.patch("/enrollcourse/:id", enrollCourse)
route.get("/enrolledcourse/:id", getEnrolledCourses)
route.delete("/:id", deleteCourses)
route.patch("/review/:id", writeReview)

export default route