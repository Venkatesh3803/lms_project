import React from 'react'
import Navber from '../../components/navber/Navber'
import DashboardTop from '../../components/dashBoardTop/DashboardTop'
import DashBoardSideBar from '../../components/dashBoardSideBar/DashBoardSideBar'
import Footer from '../../components/footer/Footer'
import DashBoardCourses from '../../components/dashboardCouses/DashBoardCourses'

const EnrolledCourses = () => {
    return (
        <div>
            <Navber />
            <main className="dashboard-page">
                <DashboardTop />
                <hr />
                <div className="dashboard-bottom">
                    <div className="dash-sidebar">
                        <DashBoardSideBar />
                    </div>
                    <hr />
                    <div className="dash-content">
                        <DashBoardCourses enrolled = "Enrolled Course"/>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    )
}

export default EnrolledCourses