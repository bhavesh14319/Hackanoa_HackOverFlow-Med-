import React from 'react'
import "../PatientDashboardCss/PatientHome.css"
import swal from 'sweetalert';


function AppointmentCard(props) {
    console.log(window.location)
  const AppointmentModal = ( ) =>{
    swal({
      text: "Hello world!",
    });
  }

  console.log(props.prop?.redabledateTime?.date)

    return (
        <div className='smAppointmentCard'>
          <span>{props?.prop?.patient?.firstName} </span>
          <span>{props.prop?.redabledateTime?.date}</span>
          <span>
            <button onClick={()=>{AppointmentModal()}} className='approve'>Approve</button>
            <button onClick={()=>{AppointmentModal()}} className='reject'>Reject</button>
          </span>
        </div>
      )
}


export default AppointmentCard