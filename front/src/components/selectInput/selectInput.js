import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./selectInput.css";

const SelectInput = ({
  options,
  id,
  placeholder,
  label,
  sendDataFromChild,
}) => {
  const [availableOptions, setAvailableOptions] = useState({
    selectedOption: null,
  });

  const handleChange = (selectedOption) => {
    setAvailableOptions({ selectedOption });
    sendDataFromChild(id, selectedOption.value);
  };

  return (
    <div className="select">
      <label>{label}</label>
      <Select
        id={id}
        key={id}
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={availableOptions.selectedOption}
        options={options}
      />
    </div>
  );
};

export default SelectInput;
