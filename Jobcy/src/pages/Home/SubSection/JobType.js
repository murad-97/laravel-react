import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from "react-select";
import GitData from '../../ApiData/GitDataApi';
const JobType = () => {


  // const [industries, setIndustries] = useState([])
  const [selectedIndustry, setSelectedIndustry] = useState(null);



  // useEffect(() => {
  //   fetchIndustries();
  // }, []);

 
  // const fetchIndustries = async () => {
  //   try {
  //     const response = await axios.get('http://127.0.0.1:8000/api/industries');
  //     setIndustries(response.data);
  //   } catch (error) {
  //     console.error('Error fetching industries:', error);
  //   }
  // };


  const apiEndpoint = 'http://127.0.0.1:8000/api/industries'; 
  const { data, loading, error } = GitData(apiEndpoint);




  const options = data.map(industry => ({
    label: industry.name,
    value: industry.id,
  }));


  // const options = [
  //    (industries || []).map((item, key) => (
  //   { label: "Accounting", value: "1" },
  //   { label: "IT & Software", value: "2" },
  //   { label: "Marketing", value: "3" },
  //   { label: "Banking", value: "4" }
  //   ))
  // ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      border: 0,
      boxShadow: "none",
      padding: "12px 0 12px 40px",
      margin: "-16px -6px 0 -52px",
      borderRadius: "0"
    })
  };
  return (
    <React.Fragment>
      <Select
        options={options}
        styles={colourStyles}
        className="selectForm__inner"
        data-trigger
        // defaultValue={{ label: "Accounting", value: 0 }}
        value={selectedIndustry}
        onChange={selectedOption => setSelectedIndustry(selectedOption)}
        name="choices-single-categories"
        id="choices-single-categories"
        aria-label="Default select example"
      />
    </React.Fragment>
  );
};

export default JobType;






