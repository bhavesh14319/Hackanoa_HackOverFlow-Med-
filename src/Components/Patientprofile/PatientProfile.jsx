import React from 'react'
import Doctorprofile from '../DoctorDashboard/Doctorprofile'
import "../Patientprofile/Patientprofile.css"

function PatientProfile() {
  return (
    <div className='patient_profile'>
    <div className='patient_profile_container'>
        <Doctorprofile/>
    </div>
    </div>
  )
}

export default PatientProfile