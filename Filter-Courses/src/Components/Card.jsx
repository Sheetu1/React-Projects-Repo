import React from 'react'
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likecourses;
  let setLikedCourses = props.setlikecourses;

  function ClickHandler(){
    if(likedCourses.includes(course.id) ) {
      setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id) ) );
      toast.warning("like removed");
    }
   
    else {
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked Successfully");

    }

  }

  return (
    <div className='w-[300px] '>
      <div className='relative'>
        <img src={course.image.url} alt="image" />
        <div className='w-[40px] h-[40px] bg-white grid place-items-center rounded-full absolute right-2 bottom-3 '>
          <button onClick={ClickHandler}>
            <FcLike  fontSize="1.7rem"/>
          </button>
        </div>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  )
}

export default Card