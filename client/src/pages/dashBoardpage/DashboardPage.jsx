import "./DashboardPage.css"
import Navber from '../../components/navber/Navber'
import Footer from '../../components/footer/Footer'
import DashBoardSideBar from "../../components/dashBoardSideBar/DashBoardSideBar"
import DashboardTop from '../../components/dashBoardTop/DashboardTop'
import Dashboard from "../../components/dashboard/Dashboard"



const DashboardPage = () => {
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
                        <Dashboard />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default DashboardPage
