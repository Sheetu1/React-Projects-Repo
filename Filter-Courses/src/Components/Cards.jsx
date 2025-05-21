import React from 'react'
import Card from './Card';

const Cards = ({courses}) => {
  let allcourses = [];
  const getCourses = () => {
    Object.values(courses).forEach((coursecategory) => {
      coursecategory.forEach((course) => {
        allcourses.push(course);
      })
    })
    return allcourses;

  }
  return (
    <div>
     { getCourses().map((course) => {
        <Card course={course}/>
      })}
    </div>
  )
}

export default Cards