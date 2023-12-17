import "./ContactUs.css"
import Navber from '../../components/navber/Navber'
import Footer from '../../components/footer/Footer'
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
    return (
        <div>
            <Navber />
            <main>
                <div className="contact">
                    <h1>Contact Us</h1>
                    <p>Any question or remarks? Just write a message</p>


                    <div className="contact-container">
                        <div className="contact-left">
                            <h2>Contact Information</h2>
                            <p>Fill up the form and our team will get back you with in 24 hours</p>

                            <div className="contact-list">
                                <div className="">
                                    <FaPhone className="icon" />
                                    <span>+91 9876543211</span>
                                </div>
                                <div className="">
                                    <MdEmail className="icon" />
                                    <span>example@gmail.com</span>
                                </div>
                                <div className="">
                                    <FaLocationDot className="icon" />
                                    <span>Jubliee hills, Hyderabad</span>
                                </div>
                                <div className="blue-circle"></div>
                                <div className="pink-circle"></div>
                            </div>
                        </div>
                        <div className="contact-right">
                            <div className="contact-form">
                                <div className="contact-form-inputs">
                                    <label htmlFor="">First Name</label>
                                    <input type="text" placeholder="Jhon" />
                                </div>
                                <div className="contact-form-inputs">
                                    <label htmlFor="">Last Name</label>
                                    <input type="text" placeholder="Doe" />
                                </div>
                                <div className="contact-form-inputs">
                                    <label htmlFor="">Email</label>
                                    <input type="text" placeholder="example@gmail.com" />
                                </div>
                                <div className="contact-form-inputs">
                                    <label htmlFor="">Phone</label>
                                    <input type="text" placeholder="+91 98754645" />
                                </div>
                                <div className="contact-form-textarea">
                                    <label htmlFor="">Message</label>
                                    <textarea  rows={5} placeholder="Write your message" />
                                </div>
                                <button>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ContactUs