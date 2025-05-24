import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = ({ reviews }) => {
  const { name, title, image, text } = reviews;

  return (
    <div className="relative bg-white rounded-xl shadow-xl px-8 py-10 pt-20 text-center w-full max-w-md mx-auto">

      {/* Profile Image in Top-Right with Purple Circle Behind */}
      <div className="absolute top-4 left-5">
        <div className="relative w-24 h-24">
          {/* Purple circle behind */}
          <div className="absolute -top-3 -right-3 w-28 h-28 rounded-full bg-purple-500 "></div>
          
          {/* Image */}
          <div className="relative w-24 h-24 rounded-full overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <h3 className="mt-10 text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-purple-500 uppercase mb-4">{title}</p>

      <FaQuoteLeft className="text-purple-400 text-xl mx-auto mb-4" />
      <p className="text-gray-600 leading-relaxed">{text}</p>
      <FaQuoteRight className="text-purple-400 text-xl mx-auto mt-4" />

      {/* Arrows */}
      <div className="flex justify-center gap-6 mt-6">
        <button className="text-2xl text-purple-500 hover:text-purple-700">&#8592;</button>
        <button className="text-2xl text-purple-500 hover:text-purple-700">&#8594;</button>
      </div>

      {/* Surprise Me Button */}
      <button className="mt-6 px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 transition-all duration-200">
        Surprise Me
      </button>
    </div>
  );
};

export default Card;
