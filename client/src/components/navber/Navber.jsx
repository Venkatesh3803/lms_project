import { useContext, useState } from "react";
import "./Navber.css"
import MenuList from "../menuList/MenuList";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Context";


const Navber = () => {
    const { currentUser } = useContext(AuthContext)
    const [menuList, setMenuList] = useState(false)
// console.log(window.location.pathname)
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-left">
                    <div className="logo">
                        <Link to={"/"} style={{ color: "white" }}>
                            InPath
                        </Link>
                    </div>
                </div>
                <div className="nav-middle">
                    <ul>

                        <Link to={"/"} style={{ color: "white" }}>
                            <li>Home</li>
                        </Link>
                        <Link to={"/courses"} style={{ color: "white" }}>
                            <li>Course List</li>
                        </Link>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="nav-right">
                    {currentUser ?
                        <>
                            <div className="user" onMouseEnter={() => setMenuList(true)}>
                                v
                            </div>
                        </>
                        :
                        <Link to={"/login"} style={{ color: "white" }}>
                            <span>Login</span>
                        </Link>
                    }
                </div>

                {menuList &&
                    <MenuList setMenuList={setMenuList} />
                }
            </div>
        </nav >
    )
}

export default Navber