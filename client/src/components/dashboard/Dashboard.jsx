
import DashBoardCourses from "../dashboardCouses/DashBoardCourses"
import "./Dashboard.css"

const Dashboard = () => {
    const list = [
        {
            id: 1,
            name: "Enrolled Courses",
            number: 15
        },
        {
            id: 2,
            name: "Active Courese",
            number: 5
        },
        {
            id: 3,
            name: "Completed Courses",
            number: 12
        },

    ]
    return (
        <>
            <div className="dashboard">
                <h1 style={{ marginBottom: "1rem" }}>Dashboard</h1>
                <div className="dash-container">
                    {list.map((l) => {
                        return (
                            <div className="dash-card">
                                <span>{l.name}</span>
                                <h1>{l.number}</h1>
                            </div>
                        )
                    })}
                </div>
            <DashBoardCourses />
            </div>
        </>
    )
}

export default Dashboard
