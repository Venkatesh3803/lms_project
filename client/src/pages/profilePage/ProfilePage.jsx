
import Navber from '../../components/navber/Navber'
import DashboardTop from '../../components/dashBoardTop/DashboardTop'
import DashBoardSideBar from '../../components/dashBoardSideBar/DashBoardSideBar'
import Footer from '../../components/footer/Footer'
import Profile from '../../components/profile/Profile'


const ProfilePage = () => {
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
            <Profile />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProfilePage