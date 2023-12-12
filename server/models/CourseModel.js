import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    shortDesc: {
        type: String,
        required: true,
    },
    aboutCourse: {
        type: String,
        required: true,
    },
    thumbNail: {
        type: String,
    },
    modules: {
        type: [{
            module: {
                type: String,
            },
            lessons: {
                type: Array
            }
        }],
        required: true,
    },

    totalRating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0,
    },

    reviews: [
        {
            userName: {
                type: String,
            },
            review: {
                type: String,

            },
            rating: {
                type: Number,
                min: 1,
                max: 5,
                default: 0,
            },
        },
    ],
    category: {
        type: String,
        required: true,
    },
    regularPrice: {
        type: String,
    },
    discountedPrice: {
        type: String,
    },
    level: {
        type: String,
    },
    instructor: {
        type: String,
    },
    materialIncluded: {
        type: String,
    },
    duration: {
        type: String,
    },
    requirements: {
        type: String,
    },
    maxStudents: {
        type: String,
    },
    students: {
        type: Array,
    },

    free: {
        type: Boolean,
        default: true
    },
    whatILearn: {
        type: String,
    }


}, { timestamps: true });

export default mongoose.model("course", courseSchema)