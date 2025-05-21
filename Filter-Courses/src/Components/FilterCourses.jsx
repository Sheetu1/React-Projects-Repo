import React from 'react'

const FilterCourses = ({filterdata}) => {
  return (
    <div>
      {filterdata.map( (data) => ( 
        <button key={data.id}>
          {data.title}
        </button>
      ))}
    </div>
  )
}

export default FilterCourses;