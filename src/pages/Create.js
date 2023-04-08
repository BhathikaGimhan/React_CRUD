import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import Connection from "../firebase/Connection";
import Cancel from "./Cancel";

function Create({onCityAdded }) {
  const [city, setCity] = useState({
    id: "",
    name: "",
    state: "",
    country: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCity((prevCity) => ({
      ...prevCity,
      [name]: value,
    }));
    
  };
  // onEdit(citys);
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    await setDoc(doc(Connection, "cities", city.id), {
      name: city.name,
      state: city.state,
      country: city.country,
    });
    onCityAdded(); // Call the callback function to trigger a re-fetch of the city data
    setCity({
      id: "",
      name: "",
      state: "",
      country: "",
    });
  };

  return (
    <div className="formw">
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">id :</label>
        <input type="text" id="id" name="id" value={city.id} onChange={handleInputChange} />
        <label htmlFor="name">Name :</label>
        <input type="text" id="name" name="name" value={city.name} onChange={handleInputChange} />
        <label htmlFor="state">State :</label>
        <input type="text" id="state" name="state" value={city.state} onChange={handleInputChange} />
        <label htmlFor="country">Country :</label>
        <input type="text" id="country" name="country" value={city.country} onChange={handleInputChange} />
        <button className="createBtn" type="submit">Add City</button>
      </form>
      <Cancel/>
    </div>
  );
}

export default Create;
