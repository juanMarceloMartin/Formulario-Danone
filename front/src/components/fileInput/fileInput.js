import React from "react";
import "./fileInput.css";

const FileInput = ({ dataProperty, label, key, handleFile }) => {
  return (
    <div className="form-group">
      <label htmlFor={dataProperty}>{label}</label>
      <input
        type="file"
        className="form-control-file"
        id={dataProperty}
        key={key}
        onChange={handleFile}
      />
    </div>
  );
};

export default FileInput;
