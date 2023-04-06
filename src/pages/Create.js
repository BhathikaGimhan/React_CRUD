import { doc, setDoc } from "firebase/firestore";
import Connection from "../firebase/Connection";

function Create({ onCityAdded }) {
  const sendData = async () => {
    const name = document.getElementById("name").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    await setDoc(doc(Connection, "cities", "new-city"), {
      name: name,
      state: state,
      country: country,
    });
    onCityAdded(); // Call the callback function to trigger a re-fetch of the city data
    document.getElementById("name").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
  };

  return (
    <div>
      <input type="text" id="name" />
      <input type="text" id="state" />
      <input type="text" id="country" />
      <button onClick={sendData}>Add City</button>
    </div>
  );
}

export default Create;