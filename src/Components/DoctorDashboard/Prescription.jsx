import React from 'react'
import Navbar from './Navbar';
import '../DoctoDashboardCss/prsecription.css'

function Prescription() {
  return (<>
    <Navbar/>
    <div className='prsecription_container'>
    <div className='prescription_area'>
        Prescription for Patient:
        <textArea  row="10" cols="40"></textArea>
    </div>
    <div className="patient_vitals">
        <div className="symptoms_chips">
        <div className="symptom_name">Cough</div>
        <div className="symptom_checkbox">
            <input type="checkbox" placeholder='Enter the prescription for Patient based on his Vitals ' className="checkbox_symptom">

            </input>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Prescription;