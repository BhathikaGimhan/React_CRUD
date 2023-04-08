import React from 'react'
import Cancel from './Cancel'

function EditForm() {
  return (
    <div className="from">
      <form>
        <label htmlFor="id">id :</label>
        <input type="text" id="id" name="id" />
        <label htmlFor="name">Name :</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="state">State :</label>
        <input type="text" id="state" name="state" />
        <label htmlFor="country">Country :</label>
        <input type="text" id="country" name="country" />
        <button className="createBtn" type="submit">Add City</button>
      </form>
      <Cancel/>
    </div>
  )
}

export default EditForm