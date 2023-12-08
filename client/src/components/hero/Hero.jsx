import "./Hero.css"
import heroImg from "../../images/lmsbg.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <main className='hero'>
      <div className="hero-container">
        <div className="hero-left">
          <h1>We Offer Hunders Of Courses To Choose From</h1>
          <p>With hundreds of options avaliable, you will have the opportunity to explore your passion and develop new skills</p>

          <div className="search">
            <input type="text" placeholder='Search and Explore Our Courses' />
            <Link to={"/courses"}>
              <button>Search</button>
            </Link>
          </div>

          <div className="achivements">
            <div className="achive-card">
              <h1>1250+</h1>
              <p>Certified Students</p>
            </div>
            <div className="achive-card">
              <h1>350+</h1>
              <p>Online Modules</p>
            </div>
            <div className="achive-card">
              <h1>42+</h1>
              <p>Experiance Instructors</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </main>
  )
}

export default Hero