import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";
import { DataContext } from "../../FilterData/DataContext";
// import { UpperContext } from "../../FilterData/UpperContext";

const CountryOptions = () => {

   //Context
   const {
    salaryF,
    setSalaryF,

    experienceF,
    setExperienceF,

    employmentF,
    setEmploymentF,

    locationF,
    setLocationF,
    comLocationF, setComLocationF,
    comIndustryF, setComIndustryF
  } = useContext(DataContext);

  // const { comLocationF, setComLocationF, comIndustryF, setComIndustryF } = useContext(UpperContext);

 const [selectedOption, setSelectedOption] = useState("");



  // Event handler to capture the selected value and update the state
  const handleSelectChange = (selected) => {
    setSelectedOption(selected);
    // If you want to update the context state as well, you can do it here.
    setComLocationF(selected.value);
  };

 

  const options = [
    { value: "", label: "All" },
    { value: "Amman", label: "Amman" },
    { value: "Irbid", label: "Irbid" },
    { value: "Zarqa", label: "Zarqa" },
  ];
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
        className="choices selectForm__inner "
        defaultValue={{ label: "All", value: "" }}
        styles={colourStyles}
        onChange={handleSelectChange}
        value={selectedOption}
      />
    </React.Fragment>
  );
};

export default CountryOptions;
