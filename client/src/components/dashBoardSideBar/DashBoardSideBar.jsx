
import { AiFillFire, AiFillStar, AiFillSetting } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { BiSolidDashboard, BiSolidGraduation, BiSolidBookmarkStar } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { GrAnnounce } from 'react-icons/gr'
import { MdQuiz } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../Context/Context'

const DashBoardSideBar = () => {

    const { currentUser } = useContext(AuthContext)
    const location = window.location.pathname
    console.log(location)

    const list = [
        {
            id: 1,
            name: "Dashboard",
            icon: <BiSolidDashboard />,
            link: "/dashboard"
        },
        {
            id: 2,
            name: "Profile",
            icon: <CgProfile />,
            link: "/dashboard/profile"
        },
        {
            id: 3,
            name: "Enrolled Courses",
            icon: <BiSolidGraduation />,
            link: "/dashboard/courses"
        },
        {
            id: 4,
            name: "Wishlist",
            icon: <BiSolidBookmarkStar />,
            link: "/dashboard/wishlist"
        },
        {
            id: 5,
            name: "Reviews",
            icon: <AiFillStar />,
            link: "/dashboard/reviews"
        },
        {
            id: 6,
            name: "My Quiz Attemts",
            icon: <MdQuiz />,
            link: "/dashboard/myquiz"
        },
        {
            id: 6,
            name: "Question & Answers",
            icon: <AiFillFire />,
            link: "/dashboard/qa"
        },
    ]
    const list2 = [
        {
            id: 1,
            name: "Courses",
            icon: <BiSolidGraduation />
        },
        {
            id: 2,
            name: "Annoucment",
            icon: <GrAnnounce />
        },
        {
            id: 3,
            name: "Settings",
            icon: <AiFillSetting />
        },


    ]


    return (
        <>
            <div className="sidebar-list">
                {list.map((li) => {
                    return (
                        <Link to={`${li.link}`}>
                            <div className={location === li.link ? "active" : "list-items"} key={li.id}>
                                <div className="">
                                    {li.icon}
                                    {li.name}
                                </div>
                                <IoIosArrowForward />
                            </div>
                        </Link>
                    )
                })}
            </div>
            <hr />
            {currentUser.isInstructor &&
                <div className="sidebar-list">
                    <h3>Instructor</h3>

                    {list2.map((li) => {
                        return (
                            <div className="list-items" key={li.id}>
                                <div className="">
                                    {li.icon}
                                    {li.name}
                                </div>
                                <IoIosArrowForward />
                            </div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default DashBoardSideBar
