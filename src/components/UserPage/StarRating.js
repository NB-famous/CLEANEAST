import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import './StarRating.css';

const StarRating = (props) => {
  console.log("Rating props", props)
  const [hover, setHover] = useState(null);

  return <h1>
    {[...Array(5)].map((star, i) => {
      const ratingValue = i + 1;
      return (<label key={i}>
        <input 
        type="radio" 
        name="rating" 
        value={ratingValue} 
        onClick={() => props.setRating(ratingValue)}
         />
        <FaStar 
        className="star" 
        color={ratingValue <= (hover || props.stateRating) ? "#ffc107" : "e4e5e9"} 
        size={40}
        onMouseEnter={() => setHover(ratingValue)}
        onMouseLeave={() => setHover(null)}
        />
      </label>
      )

    })}

  </h1>

}

export default StarRating