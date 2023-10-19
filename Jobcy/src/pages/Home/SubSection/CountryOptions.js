import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import GitData from '../../ApiData/GitDataApi';

const CountryOptions = () => {


  // const [locations, setLocations] = useState([]);
   const [selectedLocation, setSelectedLocation] = useState(null);

  // useEffect(() => {
  //   fetchLocations();
  // }, []);

  // const fetchLocations = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:8000/api/locations");
  //     setLocations(response.data);
  //   } catch (error) {
  //     console.error("Error fetching industries:", error);
  //   }
  // };


  const apiEndpoint = 'http://127.0.0.1:8000/api/locations'; 
  const { data, loading, error } = GitData(apiEndpoint);
 

  const options = data.map((location) => ({
    label: location.name,
    value: location.id,
  }));

  // const options = [
  //   { value: "0", label: "All" },
  //   { value: "1", label: "Amman" },
  //   { value: "2", label: "Irbid" },
  //   { value: "3", label: "Zarqa" },

  // ];

  const colourStyles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      padding: "12px 0 12px 35px",
      margin: "-16px 0 0 -45px",
      borderRadius: "0",
      outline: "none",
    }),
  };

  return (
    <React.Fragment>
      <Select
        options={options}
        styles={colourStyles}
        className="choices selectForm__inner "
        // defaultValue={{ label: "All", value: 0 }}
        value={selectedLocation}
        onChange={(selectedOption) => setSelectedLocation(selectedOption)}
      />
    </React.Fragment>
  );
};

export default CountryOptions;


