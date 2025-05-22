import React, { useState } from 'react';
import Card from './Card';

const Cards = ({ courses }) => {
  
  const [likedCourses,setLikedCoures] = useState([])

  if (!courses) return <div>No Courses Found</div>;

  const getCourses = () => {
    let allcourses = [];
    Object.values(courses || {}).forEach((array) => {
      array.forEach((courseData) => {
        allcourses.push(courseData);
      });
    });
    return allcourses;
  };

  return (
    <div className='w-full h-screen flex  flex-wrap gap-5'>
      {getCourses().map((course, index) => (
        <Card key={course.id || index} course={course} likecourses={likedCourses} setlikecourses={setLikedCoures} />
      ))}
    </div>
  );
};

export default Cards;
