import React from 'react'

function Edit({ citys, city, onEdit }) {
    const handleEdit = (event) => {
        
        const name = document.getElementById("name");
        const state = document.getElementById("state");
        const country = document.getElementById("country");
        const id = document.getElementById("id");
        name.value = city.name;
        state.value = city.state;
        country.value = city.country;
        id.value = city.id;
        onEdit(city);
        onEdit(citys);
      };


      
    
  return (
    <div>
        <button className='editBtn' onClick={handleEdit} >Edit</button>
    </div>
  )
}

export default Edit