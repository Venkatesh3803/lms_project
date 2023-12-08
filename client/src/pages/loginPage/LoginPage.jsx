import "./LoginPage.css"
import loginpng from "../../images/login.png"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../Context/Context"

const LoginPage = () => {
  const [inputs, setInputs] = useState({})
  const { login } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)


  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await login(inputs)
    } catch (error) {
      return (error.message)
    }
    setLoading(false)
  }
  return (
    <div className="login">
      <div className="login-container">

        <div className="login-left">
          <img src={loginpng} alt="" />
        </div>
        <div className="login-right">
          <h2>Hey there!  WelCome  Back</h2>
          <p>Log in and kickstart your immersive learning journey</p>

          <form action="" onSubmit={handleSubmit}>
            <div className="inputs">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="example@gmail.com" name="email" required onChange={handleChange} />
            </div>
            <div className="inputs">
              <label htmlFor="">password</label>
              <input type="password" placeholder="password" name="password" required minLength={6} onChange={handleChange} />
            </div>
            <div className="buttom">
              <button type="submit">{loading ? "Loading..." : "Login"}</button>
              <p>By using the syste, You accept the Privacy policy and system regulations</p>
            </div>

            <span>Don't have Account ?  <Link to={"/register"} style={{ borderBottom: "1px solid black" }}
            >Sign Up</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage