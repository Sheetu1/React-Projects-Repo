import React, { useState } from 'react';
import Card from './Card';

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  if (!courses) return <div className="text-center text-gray-500 mt-8">No Courses Found</div>;

  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category] || [];
    }
  };

  return (
    <div className='flex flex-wrap justify-center gap-6 px-5 pb-10'>
      {getCourses().map((course, index) => (
        <Card
          key={course.id || index}
          course={course}
          likedcourses={likedCourses}
          setlikedcourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
