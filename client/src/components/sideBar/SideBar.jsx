import { AiFillFire, AiOutlineSearch, AiOutlineLaptop, AiFillBug, AiOutlineCloud } from "react-icons/ai"
import { IoIosArrowForward } from "react-icons/io"
import { MdDataSaverOff } from "react-icons/md"
import { PiBagLight } from "react-icons/pi"
import { BsFillPeopleFill } from "react-icons/bs"
import "./Sidebar.css"
import { useState } from "react"

const SideBar = ({ dashBoard, setSearch, setCategory }) => {
    const [location, setLocation] = useState(window.location.pathname.split("/")[1]);


    const list = [
        {
            id: 1,
            name: "Popular Course",
            icon: <AiFillFire />,
            link: "courses"
        },
        {
            id: 2,
            name: "It & SoftWare",
            icon: <AiOutlineLaptop />,
            link: "Itandsoftware"
        },
        {
            id: 3,
            name: "Data Science",
            icon: <MdDataSaverOff />,
            link: "datascience"
        },
        {
            id: 4,
            name: "AI & Machine Learning",
            icon: <AiFillBug />,
            link: "aiml"
        },
        {
            id: 5,
            name: "Business Analytics",
            icon: <AiFillFire />,
            link: "businessanalytics"
        },
        {
            id: 6,
            name: "Digital Marketing",
            icon: <BsFillPeopleFill />,
            link: "digitalmarketing"
        },
        {
            id: 7,
            name: "Management",
            icon: <PiBagLight />,
            link: "managment"
        },
        {
            id: 8,
            name: "Cloud Computing",
            icon: <AiOutlineCloud />,
            link: "cloudcomputing"
        },
    ]


    const handleLocation = (link) => {
        setLocation(link)
        setCategory(link)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }


    return (
        <section className='sidebar'>
            {!dashBoard &&
                <div className="search-bar">
                    <input type="text" placeholder="Expore Courses..." onChange={handleSearch} />
                    <AiOutlineSearch className="search-icon" />
                </div>
            }

            <div className="sidebar-list">
                {list.map((li) => {
                    return (
                        <div className={location === `${li.link}` ? "active" : "list-items"} onClick={() => handleLocation(li.link)} key={li.id}>
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