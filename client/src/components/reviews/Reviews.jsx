import "./Reviews.css"
import emptyState from "../../images/emptystate.svg"
import { AiFillStar } from "react-icons/ai"
import { useContext, useState } from "react"
import { TiTick } from "react-icons/ti";
import { postReview } from "../../requestmethods/courseRequest";
import { AuthContext } from "../../Context/Context";
import { useParams } from "react-router-dom";


const Reviews = ({ data, totalRating }) => {
  const { currentUser } = useContext(AuthContext);
  const { id } = useParams()

  const [writeReview, setWriteReview] = useState(false);
  const [review, setreview] = useState("");
  const [rating, setRating] = useState(0);
  const handleStarClick = (selectedRating) => {
    setRating(selectedRating)
  }


  const handleReview = (id) => {
    let reviewData = {
      userName: currentUser.firstname,
      review: review,
      rating: rating
    }
    postReview(id, reviewData);
    setRating(0);
    setreview("")
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
          {totalRating.toString().slice(0, 3)}  <AiFillStar className="star-icon" />
        </div>

        <div className="rating-bars">
          <span>5</span>
          <AiFillStar />
          <div className="progress"></div>
          <span>54</span>
        </div>
        <div className="rating-bars">
          <span>4</span>
          <AiFillStar />
          <div className="progress"></div>
          <span>54</span>
        </div>
        <div className="rating-bars">
          <span>3</span>
          <AiFillStar />
          <div className="progress"></div>
          <span>54</span>
        </div>
        <div className="rating-bars">
          <span>2</span>
          <AiFillStar />
          <div className="progress"></div>
          <span>54</span>
        </div>
        <div className="rating-bars">
          <span>1</span>
          <AiFillStar />
          <div className="progress"></div>
          <span>54</span>
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
              <textarea name="" id="" rows="8" placeholder="Review Discription" onChange={(e) => setreview(e.target.value)}></textarea>
            </div>
            <button onClick={() => handleReview(id)}>Submit</button>
          </div>


        </div>
      }

      <div className="reviews-list">
        {data.map((r) => {
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