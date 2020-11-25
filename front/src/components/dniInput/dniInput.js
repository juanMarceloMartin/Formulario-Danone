import React, { useState, useEffect } from "react";
import isValidDni from "../../helpers/isValidDni";
import "./dniInput.css";
import itemCheck from "../../helpers/itemCheck";

const DniInput = ({ sendDataFromChild, sendDniErrorFromChild }) => {
  const TIME_LIMIT = 1500;
  let typingTimer = null;

  const [errorMsg, setErrorMsg] = useState();

  const handleChange = (e) => {
    const val = e.target.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      if (!isValidDni(val)) {
        setErrorMsg("No es un formato valido");
        sendDniErrorFromChild(true);
      } else {
        setErrorMsg(null);
        sendDataFromChild("dni", val);
        sendDniErrorFromChild(false);
      }
    }, TIME_LIMIT);
  };

  useEffect(() => {
    return () => {
      clearTimeout(typingTimer);
    };
  }, []);

  return (
    <div className="has-float-label">
      <input
        id="dni"
        type="text"
        placeholder="DNI"
        onChange={handleChange}
        key="dni"
      />
      <label htmlFor="cuit">DNI</label>
      <div className="errorMsg">{errorMsg}</div>
    </div>
  );
};

export default DniInput;
