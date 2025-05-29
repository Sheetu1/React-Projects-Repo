import React, { useState } from "react";

const App = () => {
  // All element have new state

  // const [name,setname] = useState(" ")
  // const [email,setemail] = useState(" ")
  // function NameHandler (e) {
  //   console.log(e.target.value);

  // }
  // function EmailHandler (e) {
  //   console.log(e.target.value);
  // }

  // All Element have one state
  const [formData, setformdData] = useState({ name: "", email: "" });

  function ChangeHandler(e) {
    setformdData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div>
      <form>
        {/* <input onChange={NameHandler} type="text"  placeholder="Enter Name"/>
        <input onChange={EmailHandler} type="email" placeholder="Enter Email" /> */}

        <input
          onChange={ChangeHandler}
          type="text"
          placeholder="Enter Name"
          name="Name"
          value={formData.name}
        />
        <input
          onChange={ChangeHandler}
          type="email"
          placeholder="Enter Email"
          name="Email"
          value={formData.email}
        />
      </form>
    </div>
  );
};
export default App;
