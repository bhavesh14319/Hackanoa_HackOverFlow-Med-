import Input from "./Input";
import "./Card.css";
import { useState } from "react";
import axios from '../axios'
import { Link, useNavigate } from "react-router-dom";

function DoctorRegistration() {
  let navigate = useNavigate();
  const[email,setEmail]=useState();
  const[regno,setRegNo]=useState();
  const[hospital,setHospital]=useState();
  const[experience,setExperience]=useState();
  const[number,setNumber]=useState();
  const[specialization,setSpecialization]=useState();
  const[password,setPassWord]=useState();
  const[firstName,setFirstName]=useState();
  const[lastName,setLastName]=useState();
  const [DOB,setDOB]=useState();
  const [gender,setGender]= useState();
  


  const handleEmail = (e)=>{
    setEmail(e.target.value);
  }

  const handleNumber= (e)=>{
    setNumber(e.target.value);
  }

  const handleRegNo = (e)=>{
    setRegNo(e.target.value);
  }

  const handleHospital = (e)=>{
    setHospital(e.target.value);
  }

  const handleExperience = (e)=>{
    setExperience(e.target.value);
  }

  const handleSpecialization = (e)=>{
    setSpecialization(e.target.value);
  }

  const handlePassword = (e)=>{
    setPassWord(e.target.value);
  }

  const handleFirstName = (e) =>{
    setFirstName(e.target.value);
  }

  const handleLastName= (e)=>{
    setLastName(e.target.value);
  }

  const handleDOB = (e)=>{
    setDOB(e.target.value)
  }

  const handleGender = (e) =>{
    setGender(e.target.value);
  }

  const Register = async () =>{
    if(email && regno && hospital && experience && number && specialization && password)  {
    
        alert("entered")
        const response = await axios({
          method: "POST",
          url: encodeURI("d/sign-up"),
          data: {
            firstName:firstName,
            lastName:lastName,
            email:email,
            DOB:DOB,
            mobileNumber:number,
            regNo:regno,
            specialization:specialization,
            experience:experience,
            gender:gender,
            password:password

          },
        }).catch((error) => console.log(error));

        if(response){
          console.log(response.data? response.data : response.error);
          navigate("/Doctor/Login", { replace: true });
        }
      }
    }
  




  return (
    <div className="body">
      <div className="mainCard">
        <h1>Doctor Registration</h1>
        
        <label>Enter First Name</label>
        <Input value={firstName} onChange={handleFirstName} pholder="Email" />

        <label>Enter Last Name</label>
        <Input value={lastName} onChange={handleLastName} pholder="Email" />

        <label>Enter Email</label>
        <Input value={email} onChange={handleEmail} pholder="Email" />

        <label>Enter Reg. No</label>
        <Input value={regno} onChange={handleRegNo} pholder="Registration Number" />

        <label>Enter Hospital</label>
        <Input value={hospital} onChange={handleHospital} pholder="Hospital" />

        <label>Enter Experience</label>
        <Input value={experience} onChange={handleExperience} pholder="Experience" />

        <label>Enter Mobile Number</label>
        <Input value={number} onChange={handleNumber} pholder="Mobile Number" />

        <label>Enter Birth Date</label>
        <Input value={DOB} onChange={handleDOB} pholder="yyyy/mm/dd" />

        <label>Gender</label>
        <Input value={gender} onChange={handleGender} pholder="male/female" />

        <label>Enter Specialization</label>
        <Input value={specialization} onChange={handleSpecialization} pholder="Specialization" />

        <label>Enter Password</label>
        <Input value={password} onChange={handlePassword} pholder="Password" />

        <button onClick={Register} className="btn">REGISTER</button>
        <Link to="/Doctor/Login">
          <p>SignIn</p>
        </Link>  
      </div>
    </div>
  );
}


export default DoctorRegistration;
