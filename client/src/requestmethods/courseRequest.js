

import axios from "axios"
import { toast } from "react-toastify"

export const api = axios.create({
    baseURL: "http://localhost:5000/api"
})


export const addCourseRequest = async (formData) => {
    try {
        const res = await api.post("/course", formData);
        if (res.data) {
            toast.success("Registeration Sucessful")
        }
        return res.data;
    } catch (error) {
        toast.error(error.response.data)
    }
}

export const fetchingCourses = async (search, category) => {
    try {
        const res = await api.get(`/course?search=${search}&category=${category}`);
        return res.data
    } catch (error) {
        return error.message
    }
}


export const enrollCourse = async (id, userId) => {
    try {
        const res = await api.patch(`/course/enrollcourse/${id}`, userId);
        toast.success(res.data)
        return res.data
    } catch (error) {
        return error.message
    }
}

export const fetchingSingleCourses = async (id) => {
    try {
        const res = await api.get(`/course/single/${id}`);
        return res.data
    } catch (error) {
        return error.message
    }
}

export const fetchingEnrolledCourses = async (id) => {
    try {
        const res = await api.get(`/course/enrolledcourse/${id}`);
        return res.data
    } catch (error) {
        return error.message
    }
}


export const deleteCourse = async (id) => {
    try {
        const res = await api.delete(`/course/${id}`);
        toast.success(res.data)
        return res.data
    } catch (error) {
        return error.message
    }
}

export const postReview = async (id, reviewData) => {
    try {
        const res = await api.patch(`/course/review/${id}`, reviewData);
        toast.success(res.data)
        return res.data
    } catch (error) {
        return error.message
    }
}