import React from 'react'

const FilterCourses = (props) => {
  let filterData = props.filterData;
  return (
    <div className='flex flex-wrap item-center justify-center gap-5 '>
      {filterData.map( (data) => ( 
        <button key={data.id}>
          {data.title}
        </button>
      ))}
    </div>
  )
}

export default FilterCourses;