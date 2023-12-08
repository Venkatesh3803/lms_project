import "./Footer.css"
import { AiFillTwitterCircle, AiFillInstagram, AiFillGithub } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="footer-left">
                    <h2>Path In</h2>
                    <input type="text" placeholder="Enter email to receive updates and newsletters" />
                    <p>Contact with us</p>

                    <span>pathin@gmail.com</span>
                    <div className="social-icons">
                        <ul>
                            <li><AiFillTwitterCircle /></li>
                            <li><BsFacebook /></li>
                            <li><AiFillInstagram /></li>
                            <li><AiFillGithub /></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-list">
                        <h3>Explore Courses</h3>
                        <ul>
                            <li>Free Courses</li>
                            <li>Web Development</li>
                            <li>Data Science</li>
                            <li>Managment</li>
                            <li>Data Base Managment</li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h3>Explore Courses</h3>
                        <ul>
                            <li>Free Courses</li>
                            <li>Web Development</li>
                            <li>Data Science</li>
                            <li>Managment</li>
                            <li>Data Base Managment</li>
                        </ul>
                    </div>
                    <div className="footer-list">
                        <h3>Explore Courses</h3>
                        <ul>
                            <li>Free Courses</li>
                            <li>Web Development</li>
                            <li>Data Science</li>
                            <li>Managment</li>
                            <li>Data Base Managment</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />

            <span className="copyright">© 2023 - 2033 Pathin. All rights reserved.</span>
        </footer>
    )
}

export default Footer
