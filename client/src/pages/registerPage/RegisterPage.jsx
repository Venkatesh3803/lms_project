import "./Register.css"
import loginpng from "../../images/login.png"
import { Link } from 'react-router-dom'
import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { registerRequest } from "../../requestmethods/userRequest"

const RegisterPage = () => {

    const [inputs, setInputs] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        if (inputs.password !== inputs.conformpassword) {
            return toast.warn("Password Does Not Match")
        }
        registerRequest(inputs).then((res) => {
            if (res) {
                navigate("/login")
            }
        })
        setLoading(false)
    }

    return (
        <div className="register">
            <div className="register-container">
                <div className="register-left">
                    <img src={loginpng} alt="" />
                </div>
                <div className="register-right">
                    <h1>WelCome  👋</h1>
                    <p>Sign Up and kickstart your immersive learning journey</p>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="first-name">
                            <div className="inputs">
                                <label htmlFor="">First Name</label>
                                <input type="text" placeholder="First Name" name="firstname" required onChange={handleChange} />
                            </div>
                            <div className="inputs">
                                <label htmlFor="">Last Name</label>
                                <input type="text" placeholder="Last Name" name="lastname" required onChange={handleChange} />
                            </div>
                        </div>
                        <div className="inputs">
                            <label htmlFor="">Email</label>
                            <input type="email" placeholder="example@gmail.com" name="email" required onChange={handleChange} />
                        </div>
                        <div className="inputs">
                            <label htmlFor="">password</label>
                            <input type="password" placeholder="password" name="password" required minLength={6} onChange={handleChange} />
                        </div>
                        <div className="inputs">
                            <label htmlFor="">Conform password</label>
                            <input type="password" placeholder="conform password" name="conformpassword" onChange={handleChange} />
                        </div>
                        {/* <div className="img-input">
                            <label htmlFor="">Profile pic</label>
                            <input type="file" placeholder="conform password" ref={imageRef} hidden />
                            <img src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=996" onClick={() => { imageRef.current.click() }} style={{cursor:"pointer"}} alt="" />
                        </div> */}

                        <div className="buttom">
                            <button type="submit">{loading ? "Loading..." : "Sign Up"}</button>
                            <p>By using the syste, You accept the Privacy policy and system regulations</p>
                        </div>

                        <span>Already have Account ?   <Link to={"/login"} style={{ borderBottom: "1px solid black" }}
                        >Log In</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage