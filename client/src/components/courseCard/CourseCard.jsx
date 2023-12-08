import "./CourseCard.css"
import { AiFillStar } from "react-icons/ai"
import { Link } from "react-router-dom"

const CourseCard = ({ data }) => {
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
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>5.5<span>(2)</span></p>
                </div>
                <Link to={`/course/${data._id}`}>

                    <h3>{data?.title}</h3>
                </Link>
                <p> <span>By</span> {data?.instructor} </p>
                <hr />
                <div className="price">
                    <span>₹{data?.discountedPrice || "Free"}</span>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default CourseCard