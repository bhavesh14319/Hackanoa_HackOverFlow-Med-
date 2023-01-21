import React, { useEffect, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import PatientNavbar from './PatientNavbar';
import "../PatientDashboardCss/PatientHome.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppointmentCard from '../Appointmentcard/AppointmentCard';
import { Link } from "react-router-dom";
import axios from '../../axios';
import swal from "sweetalert"


const PatientHome = () => {
    const smallScreen = useMediaQuery('(max-width:600px)');
    const[data,setData]=useState({});
    const[patientData,setPateintData]=useState({});
    const [appointments,setAppointMents] = useState([]);

    const AppointmentModal = (appointment) =>{
      const el = document.createElement('div')
      el.classList.add('meet-text')
      el.innerHTML = `Meeting Link <a href=https://${appointment.meetlink} target="_blank">${appointment.meetlink}</a`;
      swal({
        title:"Appointment Details",
        text: `Patient Name: ${patientData.firstName + " "  +patientData.lastName}\n
              Doctor Name: ${appointment.doctor.firstName + " " + appointment.doctor.lastName}\n
              Appointment Status: ${appointment.status}`  ,
             
        content : el,
        className:"appointment-modal"
      });
    }

    const AppointmentCard = ({DoctorName,AppointmentDate,AppointmentStatus,appointment}) =>{
      return (
        <div onClick={()=>{AppointmentModal(appointment)}} className='smAppointmentCard'>
          <span>{DoctorName}</span>
          <span>{AppointmentDate}</span>
          <span>{AppointmentStatus}</span>
        </div>
      )
    }

    const getAppointments = async () =>{
      const response = await axios({
        method: "GET",
        url: encodeURI("p/book"),
        headers:{
          'Authorization' : `Bearer ${data.token}`
        }
      }).catch((error) => console.log(error));

      if(response){
        console.log(response.data);
        setAppointMents(response.data.data);
      }
    }
    

    useEffect(()=>{
      let data = JSON.parse(sessionStorage.getItem("Patient Data"));
      if (data) {
        setData(data);
      }

     

    },[])

    useEffect(()=>{
      getPatientDetails();
      getAppointments();
    },[data])

    const getPatientDetails = async () =>{
      const response = await axios({
        method: "GET",
        headers: { 
          'Authorization': `Bearer ${data.token}`
        },
        url: encodeURI("p/profile")

      }).catch((error) => console.log(error));

      if(response){
        setPateintData(response.data.data);
        console.log(response.data);
      }
    }

  return (
    <>
        {smallScreen && 
            <div className='Patient_Body'>
                <PatientNavbar/>

                <div className="Patient_HomeCard">
                  <span className="Patient_HomeCard_Heading">Hello {patientData?.firstName}</span>
                  <span className="Patient_HomeCard_Heading"> Welcome To EClinique </span>
                  <br />
                  <span className="Patient_HomeCard_SubHeading">Book Your Appointment With India's Best Specialist Doctors</span>
                </div>

                <Link to="/Patient/BookAppointment">
                <div className="Patient_BookBtn animated-gradient ">
                    <span>Book Appointment</span>
                </div>
                </Link>

                <hr className='Section_Divider'/>
                <h2 className='Appintment_Lable'>Your Appointmets</h2>
                <div className='Patient_AppointmentContainer'>
                  {appointments && appointments?.map((appointment)=>{
                    return(
                      <AppointmentCard DoctorName={appointment.doctor.firstName + " "+ appointment.doctor.lastName} AppointmentDate={appointment.redabledateTime.date}
                       AppointmentStatus={appointment.status} appointment={appointment} />
                    )
                  })}
                    {/* <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard /> */}
                    {/* <p className='ShowMoreBtn'>Show More</p> */}
                </div>

                <div className='smFooter'>
                  <div className='AboutContainer'>
                    <h2>About /logo/ EClinique</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam atque neque illum hic perferendis. Cupiditate dolores doloremque officia error.</p>
                  </div>

                  <div className='ConnectWithUsContainer'>
                    <h2>Connect With Us</h2>
                    <div className='IconsContainer'>
                      <InstagramIcon/>
                      <FacebookIcon/>
                      <WhatsAppIcon/>
                      <LinkedInIcon/>
                    </div>
                    
                  </div>

                </div>
           </div>
        }
    </>
  )
}

export default PatientHome
