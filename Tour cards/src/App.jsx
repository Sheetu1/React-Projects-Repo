import React, { useState } from 'react'
import data from "./data"
import Tours from './Components/Tours'

const App = () => {
  const [tours, setTours] = useState(data)

  function removeHandler(id) {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }
 if (tours.length === 0) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-3xl font-semibold text-gray-700 mb-6">No Tours Left.</h1>
      <button
        onClick={() => setTours(data)}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
      >
        Refresh
      </button>
    </div>
  )
}


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <Tours tours={tours} removetour={removeHandler} />
    </div>
  )
}

export default App
