import React from 'react'
import Doctorprofile from '../DoctorDashboard/Doctorprofile'
import PatientNavbar from '../PatientDashboard/PatientNavbar'
import Patientprofilecard from '../PatientDashboard/Patientprofilecard'
import "../Patientprofile/Patientprofile.css"

function PatientProfile() {
  return (
    <div className='patient_profile'>
      <PatientNavbar/>
    <div className='patient_profile_container'>
      
        <Patientprofilecard className='PatientProfile'/>
    </div>
    </div>
  )
}

export default PatientProfile