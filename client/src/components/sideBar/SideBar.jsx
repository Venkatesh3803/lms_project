import { AiFillFire, AiOutlineSearch,AiOutlineLaptop,AiFillBug ,AiOutlineCloud} from "react-icons/ai"
import { IoIosArrowForward } from "react-icons/io"
import { MdDataSaverOff } from "react-icons/md"
import { PiBagLight } from "react-icons/pi"
import { BsFillPeopleFill } from "react-icons/bs"
import "./Sidebar.css"

const SideBar = ({ dashBoard }) => {

    const list = [
        {
            id: 1,
            name: "Popular Course",
            icon: <AiFillFire />
        },
        {
            id: 2,
            name: "It & SoftWare",
            icon: <AiOutlineLaptop />
        },
        {
            id: 3,
            name: "Data Science",
            icon: <MdDataSaverOff />
        },
        {
            id: 4,
            name: "AI & Machine Learning",
            icon: <AiFillBug />
        },
        {
            id: 5,
            name: "Business Analytics",
            icon: <AiFillFire />
        },
        {
            id: 6,
            name: "Digital Marketing",
            icon: <BsFillPeopleFill />
        },
        {
            id: 7,
            name: "Management",
            icon: <PiBagLight />
        },
        {
            id: 8,
            name: "Cloud Computing",
            icon: <AiOutlineCloud />
        },
    ]


    return (
        <section className='sidebar'>
            {!dashBoard &&
                <div className="search-bar">
                    <input type="text" placeholder="Expore Courses..." />
                    <AiOutlineSearch className="search-icon" />
                </div>
            }

            <div className="sidebar-list">
                {list.map((li) => {
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
        </section>
    )
}

export default SideBar