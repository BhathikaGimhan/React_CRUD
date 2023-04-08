import React from 'react'

function Cancel() {
    const handleClear = () => {
        document.getElementById("name").value = "";
        document.getElementById("id").value = "";
        document.getElementById("state").value = "";
        document.getElementById("country").value = "";

        document.getElementById("Edit-name").value = "";
        document.getElementById("Editid").value = "";
        document.getElementById("Edit-state").value = "";
        document.getElementById("Edit-country").value = "";
    }
  return <button className='clearBtn' onClick={handleClear}>Clear</button>
}

export default Cancel