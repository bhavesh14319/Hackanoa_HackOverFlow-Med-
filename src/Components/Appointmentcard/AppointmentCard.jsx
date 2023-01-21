import React from 'react'
import "../PatientDashboardCss/PatientHome.css"
import swal from 'sweetalert';
import { useLocation } from 'react-router-dom';
import axios from '../../axios';
import { useState } from 'react';
import { TimePicker} from '@mui/x-date-pickers'
import $ from "jquery"


function AppointmentCard(props) {



  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const [show, setShow] = useState(false);


  const AppointmentModal = () => {
    swal({
      text: "Hello world!",
    });
  }

  const handleApprove = async () => {
    // setShow(!show);
    console.log(startTime)
    console.log(endTime);
    const response = await axios({
      method: "PATCH",
      headers: {
        'Authorization': `Bearer ${props.token}`
      },
      data: {
        appointmentId: props.appointment.id,
        startTime:new Date(props.appointment.redabledateTime.date + " "+ startTime),
        endTime:new Date(props.appointment.redabledateTime.date + " " + endTime),
      },
      url: encodeURI("d/approve?")

    }).catch((error) => console.log(error));
    if(response){
      console.log(response);
    }
   


  }

  const handleConfirm = async () => {

  }
  const handleReject = () => {

  }

  // console.log(props.appointment)
  // console.log(props.prop?.redabledateTime?.date)

  return (
    <div className='smAppointmentCard'>

      <div className='appointment_card'>
        <div className='patient_name'>
          <p>{props.appointment.patient.firstName + " " + props.appointment.patient.lastName}</p>
          <p>{props.appointment.redabledateTime.date}</p>

          <div>
              <input onChange={(e)=>{setStartTime(e.target.value)}} type="time" name="starttime" id="start" />
              <input  onChange={(e)=>{setEndTime(e.target.value)}} type="time" name="endtime" id="end" />
          </div>
        </div>
        <div className='appointment_btns'>
          <button className='approve' onClick={() => { handleApprove() }}>Approve</button>
          {show &&
            <>
             
            
            </>

          }
          <button className='reject' onClick={() => { handleReject() }}>Reject</button>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCard