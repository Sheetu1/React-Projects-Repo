import React, { useState } from "react";
import { useEffect } from "react";

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
  const [formData, setformdData] = useState({
    name: "",
    email: "",
    comments: "",
    isVisible: true,
    mode: "",
    favCar:""
  });
  console.log(formData);

  //  useEffect(() => {
  //   console.log("formData updated:", formData); // ✅ updated values
  // }, [formData]);

  function ChangeHandler(e) {
    const { name, value, type, checked } = e.target;
    setformdData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler (e) {
    e.preventDefault()
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        {/* <input onChange={NameHandler} type="text"  placeholder="Enter Name"/>
        <input onChange={EmailHandler} type="email" placeholder="Enter Email" /> */}
        <br />
        <input
          onChange={ChangeHandler}
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
        />
        <br />
        <br />
        <input
          onChange={ChangeHandler}
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          onChange={ChangeHandler}
          name="comments"
          placeholder="Enter Comments"
        ></textarea>
        <br />
        <br />
        <input
          onChange={ChangeHandler}
          type="checkbox"
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        />
        <label htmlFor="isVisible">I am visible</label>
        <br />
        <br />
        <input
          onChange={ChangeHandler}
          type="radio"
          id="onlinemode"
          value="onlinemode"
          name="mode"
          checked={formData.mode === "onlinemode"}
          />
        <label htmlFor="mode">Online mode</label>
         <br />
        <br />
        <input
          onChange={ChangeHandler}
          type="radio"
          id="offlinemode"
          value="offlinemode"
          name="mode"
          checked={formData.mode === "offlinemode"}        
          />
        <label htmlFor="mode">Offline mode</label>
        <br />
        <br />
        <select onChange={ChangeHandler} name="favCar" id="favCar" value={formData.favCar}>
          <option value="Thar">Thar</option>
          <option value="Scorpio">Scorpio</option>
          <option value="BMW">BMW</option>
          <option value="Mercdi">Mercdi</option>
          <option value="ODI">ODI</option>
        </select>
        <button>submit</button>
      </form>
    </div>
  );
};
export default App;
