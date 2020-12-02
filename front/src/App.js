import React, { useState } from "react";
import CuitInput from "./components/cuitInput/cuitInput";
import DniInput from "./components/dniInput/dniInput";
import SelectInput from "./components/selectInput/selectInput";
import GoogleSuggestionInput from "./components/googleSuggestionInput/googleSuggestionInput";
import inputsInfo from "./helpers/inputsInfo";
import EmailInput from "./components/emailInput/emailInput";
import createUser from "./helpers/createUser";
import imgToBase64 from "./helpers/imgToBase64";
import uploadImg from "./helpers/uploadImg";
import Input from "./components/input/input";
import FileInput from "./components/fileInput/fileInput";
import EmptyErrorMsg from "./components/EmptyErrorMsg/emptyErrorMsg";
import NotUniqueErrorMsg from "./components/notUniqueErrorMsg/notUniqueErrorMsg";
import itemCheck from "./helpers/itemCheck";
import Modal from "react-modal";
import TimePickerInput from "./components/timePickerInput/timePickerInput";

Modal.setAppElement("#root");
export default function App() {
  const [newUser, setNewUser] = useState({});
  const [emailError, setEmailError] = useState(false);
  const [dniError, setDniError] = useState(false);
  const [cuitError, setCuitError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [displayInput, setDisplayInput] = useState({ display: "none" });
  const [phoneExistsError, setPhoneExistsError] = useState(false);
  const [cuitExistsError, setCuitExistsError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const sendDataFromGoogleSuggestionInput = (
    street,
    streetNumber,
    city,
    state,
    zipCode,
    lat,
    lng
  ) => {
    setNewUser({
      ...newUser,
      street,
      streetNumber,
      city,
      state,
      zipCode,
      lat,
      lng,
    });
    setDisplayInput({ display: "" });
  };

  const handleInputDisplay = (inputType) => {
    const adressInputs = ["street", "streetNumber", "city", "state", "zipCode"];
    return adressInputs.includes(inputType) ? displayInput : { display: "" };
  };

  const sendDataFromChild = (key, data) => {
    setNewUser({
      ...newUser,
      [key]: data,
    });
  };

  const sendEmailErrorFromChild = (error) => {
    setEmailError(error);
  };

  const sendDniErrorFromChild = (error) => {
    setDniError(error);
  };

  const sendCuitErrorFromChild = (error) => {
    setCuitError(error);
  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    setNewUser({});
    setSubmit(false);
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (inputsInfo().length + 1 === Object.keys(newUser).length) {
      createUser(newUser, setShowModal, handleReset);
    }
  };

  const handleFile = async (e) => {
    const stateAtribute = [e.target.id];
    const encodedImg = await imgToBase64(e.target.files[0]);

    const imgUrl = await uploadImg(encodedImg);
    setNewUser({ ...newUser, [stateAtribute]: imgUrl.Location });
  };

  const handlePhoneBlur = (e) => {
    itemCheck("phone", e.target.value, setPhoneExistsError);
  };

  const handleRepeatedCuit = (bool) => {
    setCuitExistsError(bool);
  };

  const formInfo = inputsInfo();

  const formItems = [];

  for (let i = 0; i < formInfo.length; i++) {
    if (formInfo[i].type === "file") {
      formItems.push(
        <div>
          <FileInput
            dataProperty={formInfo[i].dataProperty}
            label={formInfo[i].labelText}
            key={i}
            handleFile={handleFile}
          />
          {submit && !newUser[formInfo[i].dataProperty] && <EmptyErrorMsg />}
        </div>
      );
    } else if (formInfo[i].options) {
      formItems.push(
        <div>
          <SelectInput
            options={formInfo[i].options}
            id={formInfo[i].dataProperty}
            placeholder={formInfo[i].labelText}
            label={formInfo[i].labelText}
            sendDataFromChild={sendDataFromChild}
          />
          {submit && !newUser[formInfo[i].dataProperty] && <EmptyErrorMsg />}
        </div>
      );
    } else if (formInfo[i].dataProperty === "cuit") {
      formItems.push(
        <div>
          <CuitInput
            sendDataFromChild={sendDataFromChild}
            sendCuitErrorFromChild={sendCuitErrorFromChild}
            handleRepeatedCuit={handleRepeatedCuit}
          />
          {submit && !newUser[formInfo[i].dataProperty] && <EmptyErrorMsg />}
        </div>
      );
    } else if (formInfo[i].dataProperty === "dni") {
      formItems.push(
        <div>
          <DniInput
            sendDataFromChild={sendDataFromChild}
            sendDniErrorFromChild={sendDniErrorFromChild}
          />
          {submit && !newUser[formInfo[i].dataProperty] && <EmptyErrorMsg />}
        </div>
      );
    } else if (formInfo[i].dataProperty === "mail") {
      formItems.push(
        <div>
          <EmailInput
            sendDataFromChild={sendDataFromChild}
            sendEmailErrorFromChild={sendEmailErrorFromChild}
          />
          {submit && !newUser[formInfo[i].dataProperty] && <EmptyErrorMsg />}
        </div>
      );
    } else if (formInfo[i].dataProperty === "google") {
      formItems.push(
        <div>
          <GoogleSuggestionInput
            sendDataFromGoogleSuggestionInput={
              sendDataFromGoogleSuggestionInput
            }
          />
        </div>
      );
    } else if (formInfo[i].dataProperty === "phone") {
      formItems.push(
        <div>
          <Input
            dataProperty={formInfo[i].dataProperty}
            value={newUser[formInfo[i].dataProperty]}
            label={formInfo[i].labelText}
            key={i}
            handleChange={handleChange}
            handleInputDisplay={handleInputDisplay}
            handleBlur={handlePhoneBlur}
          />
          {submit && !newUser[formInfo[i].dataProperty] && <EmptyErrorMsg />}
          {phoneExistsError && (
            <NotUniqueErrorMsg item={formInfo[i].labelText} />
          )}
        </div>
      );
    } else if (formInfo[i].type === "time") {
      formItems.push(
        <TimePickerInput
          label={formInfo[i].labelText}
          sendDataFromChild={sendDataFromChild}
        />
      );
    } else {
      formItems.push(
        <div>
          <Input
            dataProperty={formInfo[i].dataProperty}
            value={newUser[formInfo[i].dataProperty]}
            label={formInfo[i].labelText}
            key={i}
            handleChange={handleChange}
            handleInputDisplay={handleInputDisplay}
          />
          {submit && !newUser[formInfo[i].dataProperty] && <EmptyErrorMsg />}
        </div>
      );
    }
  }

  return (
    <div>
      <nav class="navbar">
        <a class="navbar-brand" href="#">
          <img src="https://www.customerdanone.com/sites/default/files/danone.png" />
        </a>
      </nav>
      <div className="container">
        <Modal
          isOpen={showModal}
          closeTimeoutMS={500}
          onRequestClose={() => (window.location.reload(), setShowModal(false))}
          style={{
            overlay: {
              backgroundColor: "gray",
            },
            content: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              color: "#0F2370",
              textAlign: "center",
              fontFamily: "'Pacifico', cursive",
            },
          }}
        >
          <div className="vertical-center">
            <h1>USUARIO CREADO!</h1>
            <svg
              class="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                class="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                class="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </Modal>

        <form>
          {formItems}
          <br></br>
          <button
            type="submit"
            className="btn submitButton"
            onClick={handleSubmit}
            disabled={
              emailError ||
              dniError ||
              cuitError ||
              phoneExistsError ||
              cuitExistsError
            }
            style={{ width: "100%", marginBottom: "20px" }}
          >
            ENVIAR
          </button>
        </form>
      </div>
      <footer className="footer">
        <a href="http://corporate.danone.com.ar/">
          <img src="https://www.customerdanone.com/sites/default/files//danone_kid.png" />
        </a>
      </footer>
    </div>
  );
}
