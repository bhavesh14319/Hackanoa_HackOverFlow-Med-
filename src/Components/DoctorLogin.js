import Input from "./Input";
import "./Card.css";
import { useState } from "react";
import axios from '../axios'
import { Link, useNavigate } from "react-router-dom";

function DoctorLogin() {
  let navigate = useNavigate();
  const [number,setNumber]=useState(null);
  const [password,setPassWord] = useState(null);

  const handlePassWord =(e)=>{
    setPassWord(e.target.value);
  }

  const handleNumber =(e)=>{
    setNumber(e.target.value);
  }

  const handleLogin = async () =>{
   
    if(number && password){
     
    
        alert("entered")
        const response = await axios({
          method: "POST",
          url: encodeURI("d/sign-in"),
          data: {
            mobileNumber : number,
            password : password
          },
        }).catch((error) => console.log(error));

        if(response){
          console.log(response.data? response.data : response.error);
          sessionStorage.setItem("Doctor Data", JSON.stringify(response.data));
          navigate("/Doctor/Home" ,{replace:true });
        }
    }
  }

  return (
    <div className="body">
      <div className="mainCard">
        <h1>Doctor Login</h1>
        <label>Enter Mobile Number</label>
        <Input value={number} onChange={handleNumber} pholder="Mobile Number" />
        <label>Enter Password</label>
        <Input value={password} onChange={handlePassWord} pholder="Password" />
        <button onClick={()=>{handleLogin()}} className="btn">LOGIN</button>
        <Link to="/Doctor/SignUp">
          <p>SignUp</p>
        </Link>  
      </div>
 
    </div>
  );
}

export default DoctorLogin;
