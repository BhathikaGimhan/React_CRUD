import React from 'react'

function Edit({ city, onEdit }) {
    const handleEdit = () => {
        onEdit(city.id);
      };
    
  return (
    <div>
        <button onClick={handleEdit} >Edit</button>
    </div>
  )
}

export default Edit