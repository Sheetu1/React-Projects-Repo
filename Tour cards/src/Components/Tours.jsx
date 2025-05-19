import React from "react"
import Cards from "./Cards"

const Tours = ({ tours, removetour }) => {
  return (
    <div className="w-full max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 border-b-4 border-blue-500 inline-block pb-2">
          Plan with Friends - Tours
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <Cards key={tour.id} {...tour} removetour={removetour} />
        ))}
      </div>
    </div>
  )
}

export default Tours
