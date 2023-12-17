import "./Reviews.css"
import emptyState from "../../images/emptystate.svg"
import { AiFillStar } from "react-icons/ai"
import { useContext, useState } from "react"
import { TiTick } from "react-icons/ti";
import { postReview } from "../../requestmethods/courseRequest";
import { AuthContext } from "../../Context/Context";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


const Reviews = ({ data, studArry, totalRating }) => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams()

  const [review, setReview] = useState(data)

  const [writeReview, setWriteReview] = useState(false);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating)
  }

  console.log(studArry)

  const handleReview = (id) => {
    let reviewData = {
      userName: currentUser.firstname,
      review: text,
      rating: rating
    }

    if(!currentUser) return toast.warn("Please Login to Review The Course")

    if (!studArry.includes(currentUser._id)) return toast.warn("Sorry! You are not allowed to review this Course since you haven't Enrolled.")

    postReview(id, reviewData);
    setRating(0);
    setText("")

    setReview((prev) => [...prev, reviewData])
  }


  return (
    <div className='review'>
      {data.lenght === 0 &&
        <img src={emptyState} alt="" />
      }

      <div className="review-card">
        <h1>{data.length} Reviews</h1>
        <span>Over all rating</span>
        <div className="rating">
          <h2>{totalRating.toString().slice(0, 3)}</h2>   <AiFillStar className="star-icon" />
        </div>
        <hr />
        <div className="rating-bars">
          <span>5</span>
          <AiFillStar className="star-icon" />
          <div className="progress" >
            <div className="percent" style={{ width: `${((data.filter((r) => r.rating === 5).length) / data.length) * 100}%` }}></div>
          </div>
          <span>{(data.filter((r) => r.rating === 5).length)}</span>
        </div>
        <div className="rating-bars">
          <span>4</span>
          <AiFillStar className="star-icon" />
          <div className="progress" >
            <div className="percent" style={{ width: `${((data.filter((r) => r.rating === 4).length) / data.length) * 100}%` }}></div>
          </div>
          <span>{(data.filter((r) => r.rating === 4).length)}</span>
        </div>
        <div className="rating-bars">
          <span>3</span>
          <AiFillStar className="star-icon" />
          <div className="progress" >
            <div className="percent" style={{ width: `${((data.filter((r) => r.rating === 3).length) / data.length) * 100}%` }}></div>
          </div>
          <span>{(data.filter((r) => r.rating === 3).length)}</span>
        </div>
        <div className="rating-bars">
          <span>2</span>
          <AiFillStar className="star-icon" />
          <div className="progress" >
            <div className="percent" style={{ width: `${((data.filter((r) => r.rating === 2).length) / data.length) * 100}%` }}></div>
          </div>
          <span>{(data.filter((r) => r.rating === 2).length)}</span>
        </div>
        <div className="rating-bars">
          <span>1</span>
          <AiFillStar className="star-icon" />
          <div className="progress" >
            <div className="percent" style={{ width: `${((data.filter((r) => r.rating === 1).length) / data.length) * 100}%` }}></div>
          </div>
          <span>{(data.filter((r) => r.rating === 1).length)}</span>
        </div>
        <button onClick={() => setWriteReview(true)}>Write Review</button>
      </div>

      {writeReview &&
        <div className="review-form">
          <div className="review-form-top">
            <h3>Rate this Course</h3>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleStarClick(star)}
                  style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray', fontSize: "30px" }}
                >
                  &#9733;
                </span>
              ))}
              <p>Selected Rating: {rating}</p>
            </div>
          </div>
          <hr />
          <div className="review-form-button">
            <h3 >Review this Course</h3>
            <div className="stars">
              <textarea name="" id="" rows="8" placeholder="Review Discription" onChange={(e) => setText(e.target.value)}></textarea>
            </div>
            <button onClick={() => handleReview(id)}>Submit</button>
          </div>


        </div>
      }

      <div className="reviews-list">
        {review.map((r) => {
          return (
            <div className="reviews">
              <div className="reviews-stars">
                {r.rating}
                <AiFillStar />
              </div>

              <p>{r.review}</p>
              <div className="verified-user">
                <TiTick className="tick" />
                <span>Verified User <b>{r.userName}</b></span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Reviews