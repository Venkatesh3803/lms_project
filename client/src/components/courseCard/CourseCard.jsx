import { useContext } from "react"
import "./CourseCard.css"
import { AiFillStar } from "react-icons/ai"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Context/Context"

const CourseCard = ({ data }) => {
    const { currentUser } = useContext(AuthContext)
    return (
        <div className='course-card' >
            <div className="card-top">
                <Link to={`/course/${data._id}`}>
                    <img src={data.thumbNail ? data.thumbNail : "https://www.gasso.com/wp-content/uploads/2017/04/noimage.jpg"} alt="" />
                </Link>
                <span className='level'> {data?.level}</span>
            </div>
            <div className="card-bottom">
                <div className="rating">
                    <div className="starts">
                        <AiFillStar className="star-icon" />
                    </div>
                    <p>{data.totalRating.toString().slice(0, 3)}<span>({data.reviews.length})</span></p>
                </div>
                <Link to={`/course/${data._id}`}>

                    <h3>{data?.title}</h3>
                </Link>
                <p> <span>By</span> {data?.instructor} </p>
                <hr />
                <div className="price">
                    <span>₹{data?.discountedPrice || "Free"}</span>
                    {
                        data.students?.includes(currentUser?._id) ?
                            <Link to={`/learning/${data._id}`}>
                                <button >Continue Learning</button>
                            </Link>
                            :
                            <Link to={`/course/${data?._id}`}>
                                <button>Enroll For ₹{data.discountedPrice ? data.discountedPrice : "enrolled"}</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseCard