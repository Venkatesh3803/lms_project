import "./DashBoardCourses.css"
import CourseCard from '../courseCard/CourseCard'
import { fetchingCourses, fetchingEnrolledCourses } from "../../requestmethods/courseRequest"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Context/Context";
import emptyImg from "../../images/emptystate.svg"

const DashBoardCourses = ({ enrolled, wishList }) => {
    const [data, setData] = useState([])
    const { currentUser } = useContext(AuthContext);
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("")

    useEffect(() => {
        {
            enrolled ? fetchingEnrolledCourses(currentUser?._id).then((data) => {
                setData(data)
            }) : fetchingCourses(search, category).then(data => {
                setData(data)
            })
        }
    }, [])

    return (
        <div className='dash-courses'>
            <h2 style={{ marginBottom: "1rem" }}>{wishList ? wishList : enrolled ? enrolled : "Popular Coures"}</h2>
            {enrolled &&
                <div className="filters">
                    <p>Enrolled ({data.length})</p>
                    <p>Active ({data.length})</p>
                    <p>Completed ({data.length})</p>
                </div>
            }

            {data.length === 0 && <img src={emptyImg} alt=""/>}

            <div className="dash-course-container">
                {data?.map((c) => {
                    return (
                        <CourseCard data={c} />
                    )
                })}
            </div>
        </div>
    )
}

export default DashBoardCourses
