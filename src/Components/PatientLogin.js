import Input from "./Input";
import React from "react";
import "./Card.css";

function PatientLogin() {
  return (
    <div className="body">
      <div className="mainCard">
        <h1>Patient Login</h1>
        <label>Enter mobile number</label>
        <Input pholder="Mobile Number" />
        <label>Enter Aadhar Number</label>
        <Input pholder="Aadhar Number" />
        <button className="btn">GET OTP</button>
      </div>
    </div>
  );
}

export default PatientLogin;
