import CourseModel from "../models/CourseModel.js"


export const createCoures = async (req, res) => {
    const newCoures = await CourseModel(req.body)
    try {
        const course = await newCoures.save()
        res.status(201).json(course)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getCoures = async (req, res) => {
    try {
        const course = await CourseModel.find()
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getSingleCoures = async (req, res) => {
    try {
        const course = await CourseModel.findById(req.params.id)
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const enrollCourse = async (req, res) => {
    const courseId = req.params.id;
    const userId = req.body.userId;
    try {
        const course = await CourseModel.findById(courseId)
        if (!course.students.includes(userId)) {
            await course.updateOne({ $push: { students: userId } })
        } else {
            return res.status(401).json("Already Enrolled")
        }
        res.status(201).json("Enrolled Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getEnrolledCourses = async (req, res) => {
    const userId = req.params.id;
    try {
        const course = await CourseModel.find({ students: { $in: [userId] } })
        res.status(200).json(course)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const deleteCourses = async (req, res) => {
    try {
        const course = await CourseModel.findById(req.params.id)
        await CourseModel.findByIdAndDelete(course._id)
        res.status(200).json("Deleted Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}



export const writeReview = async (req, res) => {

    const { userId, review, rating } = req.body;
    try {
        const course = await CourseModel.findById(req.params.id);
        if (!course) return res.status(401).json("Course not Found")
        await course.updateOne({ $push: { reviews: { userId, review, rating } } })

        const calRating = course.reviews.reduce((sum, review) => sum + review.rating, 0);

        const totalRating = calRating / course.reviews.length;

        await course.updateOne({ totalRating: totalRating })
        res.status(201).json("Review Created sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}