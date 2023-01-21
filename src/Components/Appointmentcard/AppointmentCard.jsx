import React from 'react'
import "../PatientDashboardCss/PatientHome.css"
import swal from 'sweetalert';
import {  useLocation } from 'react-router-dom';


function AppointmentCard(props) {
  
  var btns = false;
    // if(window.location.href=="http://localhost:3000/patient/home"){
    //   setbtns(false)
    // }else{
    //   setbtns(true)
    // }

  const location = useLocation();
  console.log(location.pathname) 
  if(location.pathname=="/doctor/home"){
    btns = true;
  }else{
    btns = false;
  }

  const AppointmentModal = ( ) =>{
    swal({
      text: "Hello world!",
    });
  }

  console.log(props.prop?.redabledateTime?.date)

    return (
        <div className='smAppointmentCard'>
           {
              btns
              ?
                <div className='appointment_card'>
                  <div className='patient_name'>
                    <p>patient Name</p>
                    <p>Date</p>
                  </div>
                  <div className='appointment_btns'>
                    <button className='approve'>Approve</button>
                    <button className='reject'>Reject</button>
                  </div>
                </div>
              :<>
                <span>{props?.prop?.patient?.firstName} </span>
                <span>{props.prop?.redabledateTime?.date}</span>
                 <span>
                  <button onClick={()=>{AppointmentModal()}} className='approve'>Approve</button>
                  <button onClick={()=>{AppointmentModal()}} className='reject'>Reject</button>
                </span>
                <p>Status</p></>
          }
          
        </div>
      )
}

export default AppointmentCard