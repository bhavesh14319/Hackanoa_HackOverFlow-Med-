import { Avatar } from '@mui/material'
import React from 'react'
import "../DoctoDashboardCss/Home.css"
import "../PatientDashboardCss/PatientHome.css"
import Navbar from './Navbar'
import logo from "../../Assets/logo.png"
import AppointmentCard from '../Appointmentcard/AppointmentCard'
import Doctorprofile from "../DoctorDashboard/Doctorprofile"
import axios from '../../axios';
import {useState,useEffect} from 'react';

const Home = () => {

  const[data,setData]=useState({});
  const[appointmentData,setAppointmentData]=useState([]);

  useEffect(()=>{
    let data = JSON.parse(sessionStorage.getItem("Doctor Data"));
    console.log(data);
    if (data) {
      setData(data);
    }
  },[]);



  const getAppointmentDetails = async() =>{
    const response = await axios({
      method: "GET",
      headers: { 
        'Authorization': `Bearer ${data.token}`
      },
      url: encodeURI("d/approve?status=pending")

    }).catch((error) => console.log(error));
    if(response){
      setAppointmentData(response.data.data);
      // console.log(response.data.data);
      // console.log(appointmentData
    }
  }

  useEffect(()=>{
    getAppointmentDetails();
  },[data]);


  return (
    <div className='Home_body'>
        <Navbar/>

        <div className='Home_bodyContainer'>
            <div className='Home_bodyContainer_LHS'>
              <p>Profile</p>
                  {/* <h2>Hello Doctor, Rahul</h2>

                   <div className='Doctor_DP'>
                         <Avatar sx={{ width: 150, height: 150 }} alt="Remy Sharp" src={logo} />
                    </div>

                    <hr className='Doctor_HR'/>
                    
                    <div className='Doctor_InfoContainer'>
                        <p className='Doctor_InfoContainer_Item'><span className='Doctor_InfoContainer_Item_Span'>Name: </span><span className='Doctor_InfoContainer_Item_Span'>Rahul</span></p>
                        <p className='Doctor_InfoContainer_Item'><span className='Doctor_InfoContainer_Item_Span' >Username: </span><span className='Doctor_InfoContainer_Item_Span'>Rahul@123</span></p>
                        <p className='Doctor_InfoContainer_Item'><span className='Doctor_InfoContainer_Item_Span' >Mobile: </span><span className='Doctor_InfoContainer_Item_Span'>+91 1234567890</span></p>
                        <p className='Doctor_InfoContainer_Item'><span className='Doctor_InfoContainer_Item_Span' >Email: </span><span className='Doctor_InfoContainer_Item_Span' >Rahul@gmail.com</span></p>
                        <p className='Doctor_InfoContainer_Item'><span className='Doctor_InfoContainer_Item_Span' >Working At: </span><span className='Doctor_InfoContainer_Item_Span'>Hospital Name</span></p>
                        <p className='Doctor_InfoContainer_Item'><span className='Doctor_InfoContainer_Item_Span' >Specializations: </span><span className='Doctor_InfoContainer_Item_Span' >Cardiologist</span></p>

                    </div>  */}
                    <Doctorprofile/>

            </div>
            <div className='Home_bodyContainer_RHS'>
              <div className='appointment_activity_area'>
                <div className='appointment_counts'>
                  <div className='active_count'>
                    <div className='active_card'>
                      <p>Active Appointments</p><br></br>
                      <p>10</p>
                    </div>
                  </div>
                  <div className='pending_count'>
                    <div className='pending_card'>
                    <p>Pending Appointments</p><br></br>
                      <p> 10</p>
                    </div>
                  </div>

                <p>Appointments Requests</p>
                  
              <div className='pending_appointments_request'>
                {appointmentData?.map(app =>{
                  return <AppointmentCard prop={app} />
                }) }
            
    
              </div>
                </div>
              </div>
              <div className='doctor_appointmnet_calendar'>
                <p>Upcoming Appointments Schedules</p>
                <div className='calendar_grid'>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                  <div className='calendar_card'>
                    <p>Patient Name: Harbhajan</p>
                    <p>Doctor's Name: DJaved</p>
                    <p>Date: 28 Jan 2022</p>
                    <p>Time: 4-5 pm</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home
