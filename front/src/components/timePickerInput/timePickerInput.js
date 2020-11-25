import React, {
    useState
} from "react";
import './timePickerInput.css';

const TimePickerInput = ({ label, sendDataFromChild }) => {

    const handleChange = (e) => {
        sendDataFromChild('openingTime', e.target.value);
    };

    return ( 
        <div class = "md-form md-outline time-picker" >
            <label for = "default-picker" >{label}</label> 
            <input type = "time"
                id = "default-picker"
                class = "form-control"
                placeholder ={label}
                onChange={handleChange}
            />
        </div>
    );
};

export default TimePickerInput;