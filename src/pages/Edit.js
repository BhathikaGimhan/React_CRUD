import React from 'react'

function Edit({show, city }) {
    const handleEdit = (event) => {
        
        const name = document.getElementById("Edit-name");
        const state = document.getElementById("Edit-state");
        const country = document.getElementById("Edit-country");
        const id = document.getElementById("Editid");
        name.value = city.name;
        state.value = city.state;
        country.value = city.country;
        id.value = city.id;
        show();
      };


      
    
  return (
    <div>
        <button className='editBtn' onClick={handleEdit} >Edit</button>
    </div>
  )
}

export default Edit