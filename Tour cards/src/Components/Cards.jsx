import React, { useState } from 'react'

const Cards = ({ id, image, price, name, info, removetour }) => {
  const [readmore, setReadmore] = useState(false)
  const description = readmore ? info : `${info.substring(0, 100)}...`

  function readmoreHandler() {
    setReadmore(!readmore)
  }

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-xl">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold text-blue-600">{name}</h2>
          <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            {price}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">
          {description}
          <span
            onClick={readmoreHandler}
            className="text-blue-500 cursor-pointer ml-1 underline"
          >
            {readmore ? "Show Less" : "Read More"}
          </span>
        </p>
        <button
          onClick={() => removetour(id)}
          className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Not Interested
        </button>
      </div>
    </div>
  )
}

export default Cards
