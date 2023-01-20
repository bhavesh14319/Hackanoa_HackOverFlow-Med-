import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import PatientNavbar from './PatientNavbar';
import "../PatientDashboardCss/PatientHome.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppointmentCard from '../Appointmentcard/AppointmentCard';



const PatientHome = () => {
    const smallScreen = useMediaQuery('(max-width:600px)');

    

  return (
    <>
        {smallScreen && 
            <div className='Patient_Body'>
                <PatientNavbar/>

                <div className="Patient_HomeCard">
                  <span className="Patient_HomeCard_Heading"> Welcome To EClinique </span>
                  <br />
                  <span className="Patient_HomeCard_SubHeading">Book Your Appointment With India's Best Specialist Doctors</span>
                </div>

                <div className="Patient_BookBtn animated-gradient ">
                    <span>Book Appointment</span>
                </div>

                <hr className='Section_Divider'/>
                <h2 className='Appintment_Lable'>Your Appointmets</h2>
                <div className='Patient_AppointmentContainer'>
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                    <p className='ShowMoreBtn'>Show More</p>
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
