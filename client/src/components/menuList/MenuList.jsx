import { useContext } from "react"
import "./MenuList.css"
import { AiFillPlusSquare } from "react-icons/ai"
import { BsArrowRightShort } from "react-icons/bs"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { AuthContext } from "../../Context/Context"

const MenuList = ({ setMenuList }) => {

    const { logout, currentUser } = useContext(AuthContext)

    let list1 = [
        {
            id: 1,
            name: "Dashboard",
            link: "dashboard"
        },
        {
            id: 2,
            name: "My Profile",
            link: "dashboard/profile"

        },
        {
            id: 3,
            name: "Enrolled Courses",
            link: "dashboard/courses"

        },
        {
            id: 4,
            name: "Wishlist",
            link: "dashboard/wishlist"

        },
        {
            id: 5,
            name: "Reviews",
            link: "dashboard/reviews"

        },
        {
            id: 6,
            name: "My Quiz Attempts",
            link: "dashboard/myquiz"

        },
        {
            id: 7,
            name: "Question & Anwers",
            link: "question&ansers"

        },
    ]

    let list2 = [
        {
            id: 1,
            name: "My Course",
            link: "dashboard"

        },
        {
            id: 2,
            name: "Announcements",
            link: "dashboard"

        },
        {
            id: 3,
            name: "Quiz Attemts",
            link: "dashboard"

        },
        {
            id: 4,
            name: "Settings",
            link: "dashboard"

        },

    ]


    const handleLogout = () => {
        logout()
        toast.success("Logged Out")
    }



    return (
        <div className='menu-list' onMouseLeave={() => setMenuList(false)}>
            {currentUser.isInstructor &&
                <div className="menu-left">
                    <AiFillPlusSquare className="plus" />
                    <h2>Create a <br /> New Course</h2>
                    <p>Get Started with topics. <br /> lessons and learn</p>
                    <Link to={"/dashboard/addcourse"} style={{color:"white"}}>
                        <BsArrowRightShort className="bsright" />
                    </Link>
                </div>
            }
            <div className="menu-right">
                <ul>
                    {list1?.map((l) => {
                        return (
                            <Link to={`/${l.link}`} >
                                <li key={l.id}>{l.name}</li>
                            </Link>
                        )
                    })}
                </ul>
                <ul>
                    {list2?.map((l) => {
                        return (
                            <li key={l.id}>{l.name}</li>
                        )
                    })}
                    <li onClick={handleLogout}>LogOut</li>
                </ul>

            </div>
        </div>
    )
}

export default MenuList
