import React, { useState, useEffect } from "react";
import isValidCuit from "../../helpers/isValidCuit";
import fetchCuit from "../../helpers/fetchCuit";
import "./cuitInput.css";
import itemCheck from "../../helpers/itemCheck";

const CuitInput = ({
  sendDataFromChild,
  sendCuitErrorFromChild,
  handleRepeatedCuit,
}) => {
  const TIME_LIMIT = 1500;
  let afipValidated = false;
  let typingTimer = null;

  const [errorMsg, setErrorMsg] = useState();
  const [loading, setLoading] = useState(false);
  const [cuitExistsError, setCuitExistsError] = useState(false);

  const apiCall = async (cuit) => {
    setErrorMsg(null);

    //checks if it is a valid cuit format
    if (isValidCuit(cuit)) {
      //returns true if it exists, using afip's api
      setLoading(true);
      let test = await fetchCuit(cuit);
      afipValidated = !test.errorGetData;
      console.log(afipValidated);
      setLoading(false);
      if (afipValidated) {
        sendCuitErrorFromChild(false);
      } else {
        setErrorMsg("El CUIT ingresado no existe");
        sendCuitErrorFromChild(true);
      }
    } else {
      if (/^[0-9]*$/.test(cuit)) {
        setErrorMsg("El CUIT ingresado no existe");
      } else {
        setErrorMsg("No es un formato valido");
      }
      sendCuitErrorFromChild(true);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    clearTimeout(typingTimer);
    setErrorMsg(null);
    // setLoading(false);
    typingTimer = setTimeout(() => {
      if (val) {
        apiCall(val);
      }
      sendDataFromChild("cuit", val);
    }, TIME_LIMIT);
    itemCheck("cuit", e.target.value, setCuitExistsError);
  };

  const handleBlur = (e) => {
    handleRepeatedCuit(cuitExistsError);
  };

  useEffect(() => {
    return () => {
      clearTimeout(typingTimer);
    };
  }, []);

  return (
    <div className="has-float-label">
      <input
        id="cuit"
        type="text"
        placeholder="Nro. CUIT"
        className={loading ? "loader" : null}
        onChange={handleChange}
        key="cuit"
        onBlur={handleBlur}
      />
      <label htmlFor="cuit ">Nro. CUIT</label>
      {errorMsg != null && <div className="errorMsg">{errorMsg}</div>}
      {cuitExistsError && (
        <div className="errorMsg">
          El CUIT ingresado ya existe en la base de datos
        </div>
      )}
    </div>
  );
};

export default CuitInput;
