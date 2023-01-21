import React from "react";
import Navbar from "../DoctorDashboard/Navbar";
import Hospitalcard from "./Hospitalcard";
import MedicalCard from "./Medicals_card";
import "./hospitals.css";
import { useEffect,useState } from "react";
import axios from '../../axios';

function Medical_list() {
  
  

  const [medicalData,setMedicalData] = useState([]);


  const getMedicalData = async() =>{
    const response = await axios({
      method: "GET",
      url: encodeURI("/medical")

    }).catch((error) => console.log(error));
    if(response){
      setMedicalData(response.data.data);
      console.log(response.data.data);
      // console.log(appointmentData
    }
  }

  useEffect(()=>{
  
    getMedicalData()
  },[])


  return (
    <>
      <Navbar />
      <div className="mainCont">
        {/* <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
        <div className="hospitals_page_headings">
          <span>Medicals Near You</span>
        </div>
       
          <div className="medicals_list">
          {medicalData?.map(hosp =>{
                  return <MedicalCard prop={hosp} />
                }) }
          </div>
        </div>
    </>
  );
}

export default Medical_list;
