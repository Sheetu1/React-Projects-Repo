import React from 'react';

const FilterCourses = ({ filterData, category, setcategory }) => {
  function filterHandler(title) {
    setcategory(title);
  }

  return (
    <div className='flex flex-wrap justify-center gap-3 my-6'>
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => filterHandler(data.title)}
          className={`px-4 py-2 rounded-md text-sm font-medium border 
            ${category === data.title ? "bg-blue-600 text-white" : "bg-white text-blue-600 border-blue-600"}
            hover:scale-105 transition-all duration-200`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default FilterCourses;
