import { Link } from "react-router-dom"
import "./DashboardTop.css"
import { useContext } from "react"
import { AuthContext } from "../../Context/Context"

const DashboardTop = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        <div className="dashboard-top">
            <div className="dash-left">
                <img src={currentUser.profilePic ? currentUser.profilePic : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
                <div className="profile-info">
                    <h2>Email</h2>
                    <p>{currentUser.email}</p>
                </div>
            </div>
            <div className="dash-right">
                {currentUser.isInstructor &&
                    <Link to={"/dashboard/addcourse"}>
                        <button>Add Course</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default DashboardTop