import "./LearningPage.css"
import Navber from '../../components/navber/Navber'
import Footer from '../../components/footer/Footer'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchingSingleCourses } from "../../requestmethods/courseRequest"


const LearningPage = () => {

    const { id } = useParams();
    const [data, setData] = useState("")
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
                        {data.modules?.map((l) => {
                            return (
                                l.module
                            )
                        })}
                    </div>
                    <div className="learning-right"></div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LearningPage
