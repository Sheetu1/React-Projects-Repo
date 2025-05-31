import React, { useState } from "react";

const App = () => {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "India",
  });
  function changeHandler(e) {
    const { name, value, type, checked } = e.target;
  }
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className="w-full h-screen bg-gray-400 flex justify-center pt-2">
      <form onSubmit={submitHandler}>
        <label htmlFor="firstname">First Name</label>
        <br />
        <input
          className="outline w-[500px] h-5"
          onChange={changeHandler}
          type="text"
          placeholder="Krishna"
          id="firstname"
          name="firstname"
          value={formData.firstname}
        />
        <br /> <br />
        <label htmlFor="firstname">Last Name</label>
        <br />
        <input
          className="outline w-[500px] h-5"
          onChange={changeHandler}
          type="text"
          placeholder="Sharma"
          id="lastname"
          name="lastname"
          value={formData.lastname}
        />
        <br /> <br />
        <label htmlFor="firstname">Email Address</label>
        <br />
        <input
          className="outline w-[500px] h-5"
          onChange={changeHandler}
          type="text"
          placeholder="Sheetusharma548@gmail.com"
        />
        <br /> <br />
        <label htmlFor="firstname">City</label>
        <br />
        <input
          className="outline w-[500px] h-5"
          onChange={changeHandler}
          type="text"
          placeholder="Aligarh"
          id="city"
          name="city"
          value={formData.city}
        />
        <br /> <br />
        <label htmlFor="firstname">Strete</label>
        <br />
        <input
          className="outline w-[500px] h-5"
          onChange={changeHandler}
          type="text"
          placeholder="Harne-House sector-c Indrapuri"
          id="state"
          name="state"
          value={formData.state}
        />
        <br /> <br />
        <label htmlFor="firstname">Country</label>
        <select className="outline"
          onChange={changeHandler}
          id="country"
          name="country"
          value={formData.country}
        >
          <option>India</option>
          <option>Canada</option>
          <option>Banglore</option>
          <option>Mumbai</option>
        </select>
        <br /> <br />
        <label htmlFor="firstname">ZIP/Postal Code</label>
        <br />
        <input
          className="outline w-[500px] h-5"
          onChange={changeHandler}
          type="text"
          placeholder="202135"
          id="zipcode"
          name="zipcode"
          value={formData.zipcode}
        />
        <br /> <br />
        <div className="flex items-center justify-center text-center">
          <input
            className=" outline  w-[500px] h-5 text-center"
            type="submit"
            placeholder="Submit"
          />
        </div>
      </form>
    </div>
  );
};
export default App;
