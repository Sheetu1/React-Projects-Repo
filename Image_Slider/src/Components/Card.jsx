import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ reviews }) => {
  if (!reviews) {
    return <div>No review data found.</div>;
  }

  return (
    <div>
      <div>
        <img src={reviews.image} alt={reviews.name} />
      </div>
      <div>
        <p>{reviews.name}</p>
      </div>
      <div>
        <p>{reviews.title}</p>
      </div>
      <div>
        <FaQuoteLeft />
      </div>
      <div>
        {reviews.text}
      </div>
      <div>
        <FaQuoteRight />
      </div>
      <div>
        <button>+</button>
        <button>*</button>
      </div>
      <div>
        <button>Surprise Me</button>
      </div>
    </div>
  );
};

export default Card;
