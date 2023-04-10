import React, { useState } from 'react'
import Cancel from './Cancel'
import { doc, setDoc } from 'firebase/firestore';
import Connection from '../firebase/Connection';


function EditForm({ city, onEdit, onCancel }) {
  const [cityData, setCityData] = useState(city);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCityData((prevCityData) => ({
      ...prevCityData,
      [name]: value,
    }));
  };
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await setDoc(doc(Connection, "cities", cityData.id), {
      name: cityData.name,
      state: cityData.state,
      country: cityData.country,
    });
    onEdit(); // Call the onEdit function passed in the props
  };

  const handleCancel = () => {
    onCancel(); // Call the onCancel function passed in the props
  };

    return (
        <div className="formw">
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">id :</label>
            <input type="text" id="Editid" name="id" value={cityData.id} onChange={handleInputChange} />
            <label htmlFor="name">Name :</label>
            <input type="text" id="Edit-name" name="name" value={cityData.name} onChange={handleInputChange} />
            <label htmlFor="state">State :</label>
            <input type="text" id="Edit-state" name="state" value={cityData.state} onChange={handleInputChange} />
            <label htmlFor="country">Country :</label>
            <input type="text" id="Edit-country" name="country" value={cityData.country} onChange={handleInputChange} />
            <button className="createBtn" type="submit">Edit City</button>
        </form>
        <Cancel onCancel={handleCancel} />
        </div>
    )
}

export default EditForm;
