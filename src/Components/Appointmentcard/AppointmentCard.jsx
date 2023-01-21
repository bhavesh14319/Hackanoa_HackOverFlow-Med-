import React from 'react'
import "../PatientDashboardCss/PatientHome.css"
import swal from 'sweetalert';

function AppointmentCard() {
  const AppointmentModal = ( ) =>{
    swal({
      text: "Hello world!",
    });
  }
    return (
        <div onClick={()=>{AppointmentModal()}} className='smAppointmentCard'>
          <span>Patient Name</span>
          <span>Date </span>
          <span>
            <button className='approve'>Approve</button>
            <button className='reject'>Reject</button>
          </span>
        </div>
      )
}


export default AppointmentCard