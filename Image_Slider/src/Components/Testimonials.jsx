import React from 'react'
import Card from './Card'

const Testimonials = (props) => {
    let reviews = props.reviews
  return (
    <div className=''>
        <Card reviews={reviews[0]} />
    </div>
  )
}

export default Testimonials