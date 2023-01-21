import { Input } from "@mui/material";
import React from "react";
import "../DoctoDashboardCss/Appointments.css";
import AppointmentCard from "../Appointmentcard/AppointmentCard";
import Doctorprofile from "../DoctorDashboard/Doctorprofile";
import Navbar from "./Navbar";


function Appointments() {
  return (
    <div className="Home_body">
      <Navbar />

      <div className="Home_bodyContainer">
        <div className="Home_bodyContainer_LHS">
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
          <p>Doctors Profile</p>
          <div className="appointments_profiles_doctors">
            <Doctorprofile />
          </div>
        </div>
        <div className="Home_bodyContainer_RHS">
          <p>Patients Profile</p>
          <div className="appointments_profiles_patients">
            <Doctorprofile />
          </div>
          {/* <div className='doctor_appointmnet_calendar'>
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
      </div> */}
          <div className="appointments_RHS">
            <div className="patient_vitals">
              <div className="symptoms_chips">
                <div className="symptom_name">Cough</div>
                <div className="symptom_checkbox">
                  <input type="checkbox" className="checkbox_symptom"></input>
                </div>
              </div>
            </div>
            <div className="appointment_details">
              <div className="details">meet_link & appointmnet details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
