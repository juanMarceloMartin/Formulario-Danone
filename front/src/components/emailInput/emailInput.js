import React, { useState } from "react";
import "./emailInput.css";
import emailCheck from "../../helpers/emailCheck";

const EmailInput = ({ sendDataFromChild, sendEmailErrorFromChild }) => {
  const [emailExists, setEmailExists] = useState();

  const handleBlur = (e) => {
    emailCheck(e.target.value, setEmailExists, sendEmailErrorFromChild);
  };

  const handleChange = (e) => {
    if (!emailExists) {
      sendDataFromChild("mail", e.target.value);
    }
  };

  return (
    <div className="has-float-label">
      <input
        id="mail"
        type="text"
        placeholder="E-mail"
        name="mail"
        onChange={handleChange}
        key="mail"
        onBlur={handleBlur}
      />
      <label htmlFor="mail">E-mail</label>
      {emailExists && (
        <div className="errorMsg">El E-mail ingresado ya existe en la base de datos</div>
      )}
    </div>
  );
};

export default EmailInput;
