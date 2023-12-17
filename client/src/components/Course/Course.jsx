import { AiFillStar, AiFillSignal, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import "./Course.css";
import { useContext, useEffect, useState } from "react"
import Reviews from "../reviews/Reviews"
import { deleteCourse, enrollCourse, fetchingSingleCourses } from "../../requestmethods/courseRequest"
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from "../spinner/spinner";
import { AuthContext } from "../../Context/Context";
import { MdDeleteSweep } from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';



const Course = () => {
    const { currentUser } = useContext(AuthContext)
    const [outlineAns, setOutlineAns] = useState(false)
    const [reviews, setReviews] = useState(false)
    const { id } = useParams()
    const [data, setData] = useState("")
    const navigate = useNavigate()

    const [enrolled, setEnrolled] = useState("Free")

    useEffect(() => {
        fetchingSingleCourses(id).then((data) => {
            setData(data)
        })

    }, [id])


    const handleEnroll = (id) => {

        if (!currentUser) {
            navigate("/login")
        }
        enrollCourse(id, { userId: currentUser._id })
        setEnrolled("Continue Learning")
    }

    const handleDelete = async (id) => {
        confirmAlert({
            title: `Confirm to Delete`,
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        deleteCourse(id);
                    }
                },
                {
                    label: 'No',
                    onClick: () => {
                        return
                    }
                }
            ]
        })
    }
    return (

        <main className="course">
            {!data ? <Spinner />
                :
                <div className="course-container">
                    <div className="course-left">
                        <div className="course-top">
                            {data.userId === currentUser?._id &&
                                <MdDeleteSweep className="delete" onClick={() => handleDelete(data._id)} />
                            }

                            <h2>{data?.title}</h2>
                            <p>{data?.shortDesc}</p>
                            <div className="">
                                < div className="learners">
                                    <AiFillStar className="star-icon" />
                                    <span>{data.totalRating.toString().slice(0, 3) || 0}<span>({data.reviews.length} reviews)</span></span>
                                </div>
                                <div className="learners">
                                    <FaUsers className="icon" />
                                    <span>{data?.students?.length}+ Learners</span>
                                </div>
                                <div className="learners">
                                    <AiFillSignal className="icon" />
                                    <span>{data.level}</span>
                                </div>
                            </div>
                            <div>
                                    {
                                        data.students?.includes(currentUser?._id) ?
                                            <Link to={`/learning/${data._id}`}>
                                                <button >Continue Learning</button>
                                            </Link>
                                            :
                                            <button onClick={() => handleEnroll(data._id)}>Enroll For ₹{data.discountedPrice ? data.discountedPrice : enrolled}</button>
                                    }
                                </div>
                        </div>
                        <img src={data.thumbNail ? data.thumbNail : "https://www.gasso.com/wp-content/uploads/2017/04/noimage.jpg"} alt="" />

                        <div className="course-info">
                            <p onClick={() => setReviews(false)}>About</p>
                            <div className="vl"></div>
                            <p onClick={() => setReviews(true)}>Reviews</p>
                        </div>

                        {!reviews ?
                            <>
                                <h3>About Course</h3>
                                <div className="desc">
                                    {data.aboutCourse?.split("\n").map((a) => {
                                        return (
                                            <p key={a}>{a}</p>
                                        )
                                    })}
                                </div>

                                <div className="what-you-learn">
                                    <h3>What you will learn {data.title}</h3>

                                    <div className="list">
                                        {data.whatILearn?.split("\n").map((w) => {
                                            return <li key={w}>{w}</li>
                                        })}
                                    </div>
                                </div>
                                <div className="course-outline">
                                    <h2>Course-outline</h2>
                                    <div className="outline">
                                        {data.modules?.map((m, i) => {
                                            return (
                                                <div className="" key={i}>
                                                    <div className="outine-heading">
                                                        <h5>{m.module}</h5>
                                                        {!outlineAns ?
                                                            <AiOutlinePlus onClick={() => setOutlineAns(true)} className="icon" />
                                                            :
                                                            <AiOutlineMinus onClick={() => setOutlineAns(false)} className="icon" />
                                                        }
                                                    </div>
                                                    {outlineAns &&
                                                        <div className="
                                                    ">
                                                            {m.lessons?.map((l) => {
                                                                return (
                                                                    <div className="outline-ans">
                                                                        <p>{l.lesson}</p>
                                                                    </div>
                                                                )
                                                            })
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            </>
                            :
                            <Reviews data={data.reviews} studArry = {data.students} totalRating={data.totalRating} />
                        }


                    </div>
                    <div className="course-right">
                        <div className="course-rigth-container">
                            <h1>{data.title}</h1>
                            <p>You will get, With Course</p>

                            <div className="course-benifit">
                                <div className="benifits-list">
                                    <BiTime className="icon" />
                                    <div className="">
                                        <h3>Free lifetime access</h3>
                                        <p>Learn anything anywhere</p>
                                    </div>
                                </div>
                                <div className="benifits-list">
                                    <GrCertificate className="icon" />
                                    <div className="">
                                        <h3>Completion Certificate</h3>
                                        <p>Stand out to your professional network</p>
                                    </div>
                                </div>
                                <div className="benifits-list">
                                    <BsStopwatch className="icon" />
                                    <div className="">
                                        <h3>{data.duration} Hours</h3>
                                        <p>of self-paced video lectures</p>
                                    </div>
                                </div>
                            </div>


                    
                                <div>
                                    {
                                        data.students?.includes(currentUser?._id) ?
                                            <Link to={`/learning/${data._id}`}>
                                                <button >Continue Learning</button>
                                            </Link>
                                            :
                                            <button onClick={() => handleEnroll(data._id)}>Enroll For ₹{data.discountedPrice ? data.discountedPrice : enrolled}</button>
                                    }
                                </div>
                            
                        </div>
                    </div>
                </div>
            }
        </main>
    )
}

export default Course