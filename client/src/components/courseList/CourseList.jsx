import "./CourseList.css"
import CourseCard from '../courseCard/CourseCard'
import SideBar from "../sideBar/SideBar"
import emptyState from "../../images/emptystate.svg"
import { fetchingCourses } from "../../requestmethods/courseRequest"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"


const CourseList = ({ courses }) => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [value] = useDebounce(search, 500);
  const [category, setCategory] = useState("")

  useEffect(() => {
    fetchingCourses(search, category).then((res) => [
      setData(res)
    ])
  }, [value, category])


  return (
    <main className={courses ? "course-list-slidebar" : 'course-list'}>

      {!courses ?
        <>
          <h1>Popular Courses</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint consectetur pariatur incidunt modi! In sint blanditiis, velit enim iure consectetur nostrum fugiat, nobis quo consequuntur voluptatibus eius dolores animi.</p>
        </>
        :
        <SideBar setCategory={setCategory} search={search} setSearch={setSearch} />
      }

      <div className="card-container">
        {data.length === 0 ?
          <>

            <h2>No Results Found</h2>
            <img style={{ objectFit: "contain" }} src={emptyState} alt="" />

          </>
          :
          <>
            {data?.map((c) => {
              return (
                <CourseCard data={c} key={c._id} />
              )
            })}
          </>
        }
      </div>

    </main>
  )
}

export default CourseList