import { collection, getDocs } from "firebase/firestore";
import Connection from "../firebase/Connection";
import React, { useState, useEffect, useRef } from "react";
import Create from "./Create";
import Edit from "./Edit";
import EditForm from "./EditForm";

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
  const onEdit = (city) => {
    // console.log(city);
  };
  const tableBodyRef = useRef(null);
  useEffect(() => {
    // Scroll to the bottom of the table body whenever new data is added
    tableBodyRef.current.scrollTop = tableBodyRef.current.scrollHeight;
  }, [cities]);
  const [showEdit, setShow] = useState(true);
  const show = ()=>{
    setShow(false);
  }

  const style = {
    hideStyle: {display: "none"},
    showStyle: {display: "block"},
  };
  const styles = {
    hide: { display: 'none' },
    show: { display: 'block' }
  };
  

  return (
    <div>
    <EditForm city={cities} style={showEdit ? styles.hide : styles.show} />

      {!showEdit ? (
        <>
          <EditForm city={cities} style={style.showStyle} />
        </>
      ) : (
        <>
        <Create onCityAdded={onCityAdded} />
          
        </>
      )}

      <div className="readComponent">
        <div className="tableComponent" ref={tableBodyRef}>
          <table className="table">
            <thead>
              <th>City</th>
              <th>Country</th>
              <th>State</th>
              <th>Edit</th>
            </thead>
            <tbody>
              {cities.map((city) => (
                <tr key={city.cities}>
                  <td>{city.name}</td>
                  <td>{city.state}</td>
                  <td>{city.country}</td>
                  <td><Edit city={city} show={show} onEdit={onEdit}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Read;
