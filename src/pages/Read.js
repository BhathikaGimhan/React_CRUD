import { collection, getDocs } from "firebase/firestore";
import Connection from "../firebase/Connection";
import React, { useState, useEffect } from "react";
import Create from "./Create";

function Read() {
  const [cities, setCities] = useState([]);

  const fetchCities = async () => {
    const citiesCollection = collection(Connection, "cities");
    try {
      const citiesSnapshot = await getDocs(citiesCollection);
      const citiesData = citiesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCities(citiesData);
    } catch (e) {
      console.log("Error getting documents:", e);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const onCityAdded = () => {
    fetchCities();
  };

  return (
    <div>
      <Create onCityAdded={onCityAdded} />
      <table border="1px">
        <thead>
          <th>City</th>
          <th>Country</th>
          <th>State</th>
        </thead>
        <tbody>
          {cities.map((city) => (
            <tr key={city.id}>
              <td>{city.name}</td>
              <td>{city.state}</td>
              <td>{city.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
