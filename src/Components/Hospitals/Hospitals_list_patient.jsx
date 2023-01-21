import React from 'react'
import PatientNavbar from '../PatientDashboard/PatientNavbar'
import Hospitalcard from './Hospitalcard';
import "./hospitals.css";

function Hospitals_list_patient() {
  return (
    <div>
        <PatientNavbar/>
        <div className='heading'>
          <span>Hospitals Near You</span>
        </div>
        <div className='hospitals_patient'>
            <Hospitalcard/>
            <Hospitalcard/>
        </div>
        <hr></hr>
        <div className='heading'>
          <span>Medicals Near You</span>
        </div>
        <div className='hospitals_patient'>
        <Hospitalcard/>
        <Hospitalcard/>

        </div>
        <hr></hr>
    </div>
  )
}

export default Hospitals_list_patient