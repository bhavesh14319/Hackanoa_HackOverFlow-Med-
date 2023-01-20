import Input from "./Input";
import "./Card.css";

import React from "react";

function PatientRegistration() {
  return (
    <div className="body">
      <div className="mainCard">
        <h1>Patient Registration</h1>
        <label>Enter Name</label>
        <Input pholder="Name" />
        <label>Enter Aadhar Number</label>
        <Input pholder="Aadhar Number" />
        <label>Enter Mobile Number</label>
        <Input pholder="Mobile Number" />
        <label>Enter City</label>
        <Input pholder="City" />
        <label>Enter State</label>
        <Input pholder="State" />
        <label>Enter District</label>
        <Input pholder="District" />
        <label>Enter Address</label>
        <Input pholder="Address" />
        <label>Enter Pincode</label>
        <Input pholder="Pincode" />
        <p>Enter Aadhar Number</p>
        <Input pholder="Aadhar Number" />
        <button className="btn">REGISTER</button>
      </div>
    </div>
  );
}

export default PatientRegistration;
