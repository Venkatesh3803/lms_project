import "./CourseList.css"
import CourseCard from '../courseCard/CourseCard'
import SideBar from "../sideBar/SideBar"
import {
  useQuery,
} from '@tanstack/react-query'
import { fetchingCourses } from "../../requestmethods/courseRequest"
import Spinner from "../spinner/spinner"


const CourseList = ({ courses }) => {
  const { isFetching, data, error } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchingCourses,
  })


  return (
    <main className={courses ? "course-list-slidebar" : 'course-list'}>

      {!courses ?
        <>
          <h1>Popular Courses</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint consectetur pariatur incidunt modi! In sint blanditiis, velit enim iure consectetur nostrum fugiat, nobis quo consequuntur voluptatibus eius dolores animi.</p>
        </>
        :
        <SideBar />
      }

      {!isFetching ?
        <div className="card-container">
          {data?.map((c) => {
            return (
              <CourseCard data={c} key={c._id}/>
            )
          })}
        </div>
        :
        <Spinner />}
    </main>
  )
}

export default CourseList