import React from "react";
import "../DoctoDashboardCss/Doctorprofile.css"
import { useState, useEffect } from "react";
import axios from "../../axios";

function Doctorprofile() {

  const[data,setData]=useState({});
  const[doctorData,setDoctorData]=useState({});

  useEffect(()=>{
    let data = JSON.parse(sessionStorage.getItem("Doctor Data"));
    
    console.log(data);
    if (data) {
      setData(data);
    }
  },[])

  

  const getDoctorDetails = async () =>{
    const response = await axios({
      method: "GET",
      headers: { 
        'Authorization': `Bearer ${data.token}`
      },
      url: encodeURI("d/profile")

    }).catch((error) => console.log(error));
    if(response){
      setDoctorData(response.data.data);
      console.log(response.data.data.hospital);
    }
  }

  useEffect(()=>{
    getDoctorDetails();
  },[data])


  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <div className="profile-image"></div>

        <div className="profile-info">
          <h3 className="profile-name">{doctorData.firstName}</h3>
          <h3 className="profile-email">{doctorData.email}</h3><hr></hr>
          <div className="profile-desc">
            <p><span>Registration No:</span> <span>{doctorData.regNo}</span></p>
            <p><span>Mobile:</span> <span>{doctorData.mobileNumber}</span></p>
            <p><span>Working At:</span> <span>{doctorData.hospital.name}</span></p>
            <p><span>Specialization:</span> <span>{doctorData.specialization}</span></p>
          </div>
        </div><hr></hr>
      </div>

      {/* <div className="profile-card-body">
        <ul className="status">
          <li>
            <span className="status-value">532</span>
            <span className="status-text">Posts</span>
          </li>

          <li>
            <span className="status-value">1.5m</span>
            <span className="status-text">Followers</span>
          </li>

          <li>
            <span className="status-value">423</span>
            <span className="status-text">Following</span>
          </li>
        </ul>

        <div className="action">
          <button className="btn btn-pink">Follow</button>
          <button className="btn btn-gray-outline">Message</button>
        </div>
      </div> */}
    </div>
  );
}

export default Doctorprofile;
