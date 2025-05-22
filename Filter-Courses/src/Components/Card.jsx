import React from 'react';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({ course, likedcourses, setlikedcourses }) => {
  const ClickHandler = () => {
    if (likedcourses.includes(course.id)) {
      setlikedcourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      setlikedcourses((prev) => [...prev, course.id]);
      toast.success("Liked Successfully");
    }
  };

  return (
    <div className='w-[300px] bg-white shadow-md rounded-md overflow-hidden transition-transform hover:scale-105'>
      <div className='relative'>
        <img src={course.image.url} alt="course" className='w-full h-[180px] object-cover' />
        <button
          onClick={ClickHandler}
          className='absolute right-3 bottom-3 w-10 h-10 bg-white rounded-full grid place-items-center shadow-lg'
        >
          {likedcourses.includes(course.id) ? (
            <FcLike fontSize="1.7rem" />
          ) : (
            <FcLikePlaceholder fontSize="1.7rem" />
          )}
        </button>
      </div>
      <div className='p-4'>
        <p className='text-lg font-semibold mb-2'>{course.title}</p>
        <p className='text-gray-600 text-sm'>{course.description.length > 100 ? course.description.slice(0, 100) + "..." : course.description}</p>
      </div>
    </div>
  );
};

export default Card;
