import React from 'react'

function Cancel() {
    const handleClear = () => {
        document.getElementById("name").value = "";
        document.getElementById("id").value = "";
        document.getElementById("state").value = "";
        document.getElementById("country").value = "";
    }
  return <button className='clearBtn' onClick={handleClear}>Clear</button>
}

export default Cancel