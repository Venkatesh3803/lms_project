import React from 'react'
import Navber from '../../components/navber/Navber'
import CourseList from '../../components/courseList/CourseList'
import Footer from '../../components/footer/Footer'

const Courses = () => {
    return (
        <div>
            <Navber />
            <CourseList courses/>
            <Footer />
        </div>
    )
}

export default Courses