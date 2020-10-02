import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import './StarRating.css';

const StarRating = (props) => {
  console.log("Rating props", props)
  //const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return <h3>
    {[...Array(5)].map((star, i) => {
      const ratingValue = i + 1;
      return (<label>
        <input 
        type="radio" 
        name="rating" 
        value={ratingValue} 
        onClick={() => props.setRating(ratingValue)}
         />
        <FaStar 
        className="star" 
        color={ratingValue <= (hover || props.stateRating) ? "#ffc107" : "e4e5e9"} 
        size={20}
        onMouseEnter={() => setHover(ratingValue)}
        onMouseLeave={() => setHover(null)}
        />
      </label>
      )

    })}





  </h3>

}

export default StarRating