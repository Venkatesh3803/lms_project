import React from 'react'
import Navber from '../../components/navber/Navber'
import Hero from '../../components/hero/Hero'
import CourseList from '../../components/courseList/CourseList'
import Catergory from '../../components/category/Catergory'
import CareerPath from '../../components/careerPath/CareerPath'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'

const HomePage = () => {
    return (
        <div>
            <Navber />
            <Hero />
            <CourseList />
            <CareerPath />
            <CourseList />
            <Catergory />
            <Banner />
            <Footer />
        </div>
    )
}

export default HomePage