import React from 'react';
import Card from './Card';

const Cards = ({ courses }) => {
  if (!courses) return <div>No courses found</div>;

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
    <div>
      {getCourses().map((course, index) => (
        <Card key={course.id || index} course={course} />
      ))}
    </div>
  );
};

export default Cards;
