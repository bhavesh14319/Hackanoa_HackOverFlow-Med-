import React from 'react'
import PatientNavbar from '../PatientDashboard/PatientNavbar'
import Hospitalcard from './Hospitalcard';
import "./hospitals.css";
import { useState,useEffect } from 'react';
import axios from '../../axios';
import MedicalCard from './Medicals_card';

function Hospitals_list_patient() {


  const[hospitalData,setHospitalData]=useState([]);

  const getHospitalData = async() =>{
    const response = await axios({
      method: "GET",
      url: encodeURI("/hospital")

    }).catch((error) => console.log(error));
    if(response){
      setHospitalData(response.data.data);
      console.log(response.data.data);
      // console.log(appointmentData
    }
  }

  useEffect(()=>{
    getHospitalData()
  },[])

  return (
    <div>
        <PatientNavbar/>
        <div className='heading'>
          <span>Hospitals Near You</span>
        </div>
        <div className='hospitals_patient'>
        {hospitalData?.map(hosp =>{
                  return <Hospitalcard prop={hosp} />
                }) }
        </div>
        <hr></hr>
        <hr></hr>
    </div>
  )
}

export default Hospitals_list_patient