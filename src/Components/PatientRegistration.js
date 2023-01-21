import Input from "./Input";
import "./Card.css";
import React, { useEffect, useState } from "react"
import axios from '../axios';
import { useNavigate } from "react-router-dom";

function PatientRegistration() {
  let navigate = useNavigate();
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [aadhar,setAadhar] = useState();
  const [city,setCity] = useState();
  const [number,setNumber] = useState();
  const [state,setState] = useState();
  const [district,setDistrict] = useState();
  const [address,setAddress] = useState();
  const [pincode,setPincode] = useState();
  const [DOB,setDOB]=useState();
  const [gender,setGender]= useState();

  const handleGender = (e) =>{
    setGender(e.target.value);
  }

  const handleDOB = (e)=>{
    setDOB(e.target.value)
  }
  
  const handleFirstName = (e) =>{
    setFirstName(e.target.value);
  }

  const handleLastName = (e) =>{
    setLastName(e.target.value);
  }

  const handleAadhar = (e)=>{
    setAadhar(e.target.value);
  }

  const handleCity = (e)=>{
    setCity(e.target.value);
  }

  const handleNumber = (e)=>{
    setNumber(e.target.value);
  }

  const handleState = (e)=>{
    setState(e.target.value);
  }

  const handleDistrict = (e)=>{
    setDistrict(e.target.value);
  }

  const handleAddress = (e)=>{
    setAddress(e.target.value);
  }

  const handlePincode = (e)=>{
    setPincode(e.target.value);
  }


  const handleRegister = async ( ) =>{
    console.log(firstName , lastName, number, aadhar)
    console.log(city , state, address, pincode)
    console.log(DOB, district)
    if(number && aadhar && firstName && lastName && address && city && state && district && pincode)  {
     
      if(aadhar.length==12 && number.length==10){
        alert("entered")
        const response = await axios({
          method: "POST",
          url: encodeURI("p/sign-up"),
          data: {
            firstName: firstName,
            lastName:lastName,
            aadharId : aadhar,
            DOB:DOB,
            mobileNumber : number,
            city:city,
            state:state,
            pincode:pincode,
            address:address
          },
        }).catch((error) => console.log(error));

        if(response){
          console.log(response.data? response.data : response.error);
          navigate("/Patient/Login", { replace: true });
        }
      }
    }
  }


  return (
    <div className="body">
      <div className="mainCard">
        <h1>Patient Registration</h1>
        <label>Enter First Name</label>
        <Input value={firstName} onChange={handleFirstName} pholder="First Name" />
        <label>Enter Last Name</label>
        <Input value={lastName} onChange={handleLastName} pholder="Last Name" />
        <label>Enter Birth Date</label>
        <Input value={DOB} onChange={handleDOB} pholder="yyyy/mm/dd" />
        <label>Gender</label>
        <Input value={gender} onChange={handleGender} pholder="M/F" />
        <label>Enter Aadhar Number</label>
        <Input value={aadhar} onChange={handleAadhar} pholder="Aadhar Number" />
        <label>Enter Mobile Number</label>
        <Input value={number} onChange={handleNumber} pholder="Mobile Number" />
        <label>Enter City</label>
        <Input value={city} onChange={handleCity} pholder="City" />
        <label>Enter State</label>
        <Input value={state} onChange={handleState} pholder="State" />
        <label>Enter District</label>
        <Input value={district} onChange={handleDistrict} pholder="District" />
        <label>Enter Address</label>
        <Input value={address} onChange={handleAddress} pholder="Address" />
        <label>Enter Pincode</label>
        <Input value={pincode} onChange={handlePincode} pholder="Pincode" /> 
        <button className="btn" onClick={()=>{handleRegister()}}>REGISTER</button>
      </div>
    </div>
  );
}

export default PatientRegistration;
