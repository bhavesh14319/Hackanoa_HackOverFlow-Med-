import Input from "./Input";
import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from '../axios';
import { Link, useNavigate } from "react-router-dom";

function PatientLogin() {
  let navigate = useNavigate();
  const [number,setNumber]=useState();
  const [aadhar,setAadhar]=useState();

  const handleMobileInput = (e)=>{
    setNumber(e.target.value);
  }

  const handleAadharInput = (e)=>{
    setAadhar(e.target.value);
  }

  const handleLogin = async () =>{
   
    if(number && aadhar){
     
      if(aadhar.length==12 && number.length==10){
        alert("entered")
        const response = await axios({
          method: "POST",
          url: encodeURI("p/sign-in"),
          data: {
            aadharId : aadhar,
            mobileNumber : number,
            
          },
        }).catch((error) => console.log(error));

        if(response){
          console.log(response.data? response.data : response.error);
          sessionStorage.setItem("Patient Data", JSON.stringify(response.data));
          navigate("/Patient/Home", { replace: true });
        }
      }
    }
  }



  return (
    <div className="body">
      <div className="mainCard">
        <h1>Patient Login</h1>
        <label>Enter mobile number</label>
        <Input pholder="Mobile Number" value={number} onChange={handleMobileInput}/>
        <label>Enter Aadhar Number</label>
        <Input pholder="Aadhar Number" value={aadhar} onChange={handleAadharInput} />
        <button className="btn" onClick={()=>{handleLogin()}}>Login</button>

        <Link to="/Patient/SignUp">
          <p>SignUp</p>
        </Link>  
        
      </div>
    </div>
  );
}

export default PatientLogin;
