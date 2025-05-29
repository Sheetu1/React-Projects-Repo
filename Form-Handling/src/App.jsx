import React, { useState } from "react";

const App = () => {
  // const [name,setname] = useState(" ")
  // const [email,setemail] = useState(" ")
  // function NameHandler (e) {
  //   console.log(e.target.value);
    
  // }
  // function EmailHandler (e) {
  //   console.log(e.target.value);
  // }
  return(
    <div>
      <form>
        <input onChange={NameHandler} type="text"  placeholder="Enter Name"/>
        <input onChange={EmailHandler} type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
      </form>
    </div>
  )
}
export default App;