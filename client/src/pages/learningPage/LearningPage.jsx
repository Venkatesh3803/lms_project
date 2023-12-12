import "./LearningPage.css"
import Navber from '../../components/navber/Navber'
import Footer from '../../components/footer/Footer'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchingSingleCourses } from "../../requestmethods/courseRequest"
import Video from "../../components/video/Video"
import Reviews from "../../components/reviews/Reviews"


const LearningPage = () => {

    const { id } = useParams();
    const [data, setData] = useState("")
    const [lesson, setLesson] = useState(false)
    useEffect(() => {
        fetchingSingleCourses(id).then((res) => {
            setData(res)
        })
    }, [id])


    return (
        <div>
            <Navber />
            <main className="learning">
                <div className="learning-container">
                    <div className="learning-left">
                        {lesson &&
                            lesson?.map((l) => {
                                return (
                                    <>
                                        <h2>{data.title}</h2>
                                        <Video url={l.videoUrl} />
                                        <p>{l.lesson}</p>

                                        <Reviews data={data.reviews} studArry = {data.stude} totalRating={data.totalRating} />
                                    </>
                                )
                            })
                        }

                    </div>
                    <div className="learning-right">
                        <div className="learning-header">
                            <h2>Course Content</h2>
                        </div>
                        {data.modules?.map((m) => {
                            return (
                                <>
                                    <div className="learning-module-list" onClick={() => setLesson(m.lessons)} key={m._id}>
                                        <span>{m.module}</span>
                                        {m.lessons.map((l) => {
                                            return (
                                                <span>{l.duration} min</span>
                                            )
                                        })}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LearningPage
