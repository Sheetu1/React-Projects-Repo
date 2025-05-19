import React, { useState } from 'react'
import data from "./data"
import Tours from './Components/Tours'

const App = () => {
  const [tours, setTours] = useState(data)

  function removeHandler(id) {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <Tours tours={tours} removetour={removeHandler} />
    </div>
  )
}

export default App
