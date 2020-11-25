import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const GoogleSuggestionInput = ({ sendDataFromGoogleSuggestionInput }) => {
  const [addressOptions, setAddressOptions] = useState("");
  const [display, setDisplay] = React.useState(true);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);

    const resultInfo = results[0].address_components;
    let street;
    let streetNumber;
    let city;
    let state;
    let zipCode;
    let lat;
    let lng;

    resultInfo.forEach((result) => {
      if (result.types[0] === "route") {
        street = result.long_name;
      }
      if (result.types[0] === "street_number") {
        streetNumber = result.long_name;
      }
      if (
        result.types.includes("locality") ||
        result.types.includes("sublocality") ||
        result.types.includes("sublocality_level_1")
      ) {
        city = result.long_name;
      }
      if (result.types[0] === "administrative_area_level_1") {
        state = result.long_name;
      }
      if (result.types[0] === "postal_code") {
        zipCode = result.long_name;
      }
    });

    let latLng = await getLatLng(results[0])
    lat = latLng.lat;
    lng = latLng.lng

    sendDataFromGoogleSuggestionInput(
      street,
      streetNumber,
      city,
      state,
      zipCode,
      lat,
      lng
    )
    setAddressOptions(value);
    setDisplay("none");
  };

  const inputStyle = {
    fontweight: "400",
    fontsize: "1rem",
    lineheight: "1.5",
    color: "#212529",
    textAlign: "left",
    "-webkit-box-align": "center",
    alignItems: "center",
    backgroundColor: "hsl(0,0%,100%)",
    borderColor: "hsl(0,0%,80%)",
    borderRadius: "4px",
    borderStyle: "solid",
    borderWidth: "1px",
    cursor: "default",
    "display": "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    minHeight: "38px",
    "-webkit-box-pack": "justify",
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms",
    boxSizing: "border-box",
    "-webkit-tap-highlight-color": "transparent",
    padding: "2px 8px",
    outline: "1px solid #008ac9"
  }

  return (
    <PlacesAutocomplete
      value={addressOptions}
      onChange={setAddressOptions}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div style={{ display: display }}>
          <label>Dirección</label>
          <br></br>
          <input
            id="suggestion"
            {...getInputProps({ placeholder: "Ingresar Dirección" })}
            style={inputStyle}
          />
          <div>
            {loading ? <div className="loader"></div> : null}

            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? "#008ac9" : "#fff",
                color: suggestion.active ? "#fff" : "black"
              };

              return (
                <div {...getSuggestionItemProps(suggestion, { style })}>
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default GoogleSuggestionInput;
