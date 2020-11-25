import React, { useState } from "react";
import "./input.css";

const Input = ({
  dataProperty,
  value,
  label,
  key,
  handleChange,
  handleBlur,
  handleInputDisplay,
}) => {
  return (
    <div className="has-float-label" style={handleInputDisplay(dataProperty)}>
      <input
        id={dataProperty}
        type="text"
        placeholder={label}
        name={dataProperty}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        key={key}
      />
      <label htmlFor={dataProperty}>{label}</label>
    </div>
  );
};

export default Input;
