import React from "react";
import "./notUniqueErrorMsg";

const ErrorMsg = ({item}) => {
  return (
    <div className="errorMsg">El {item} ingresado ya existe en la base de datos</div>
  );
};

export default ErrorMsg;