import React from 'react'
import Testimonials from './Components/Testimonials'
import reviews from "./Data"

const App = () => {
  return (
    <div className=''>
      <div className=''>
        <h1>Our Testmonials</h1>
        <div></div>
      <Testimonials reviews={reviews}/>
      </div>
    </div>
  )
}

export default App