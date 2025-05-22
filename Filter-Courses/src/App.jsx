import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import FilterCourses from "./Components/FilterCourses";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Cards from "./Components/Cards";

function App() {
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (err) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <FilterCourses filterData={filterData} category={category} setcategory={setCategory} />
      <Cards courses={courses} category={category} />
    </div>
  );
}
export default App;
