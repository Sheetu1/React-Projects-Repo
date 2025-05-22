
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import FilterCourses from "./Components/FilterCourses";
import {apiUrl,filterData} from "./data"
import { toast } from "react-toastify"
import Cards from "./Components/Cards";
function App(){
  const [courses,setcourses] = useState(null)

  console.log(courses);
  

  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setcourses(output.data);
      }
      catch(err){
        toast.error("Something went wrong");
      }
    }
    fetchData();
  },[]);

  return(
    <div className="">
      <Navbar/>
      <FilterCourses filterData={filterData}  />
      <Cards courses={courses}/>
    

    </div>
  )
}
export default App;