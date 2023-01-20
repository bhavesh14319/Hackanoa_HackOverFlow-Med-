import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../../Assets/logo.png"
import logo1 from "../../Assets/i.png"
import "../PatientDashboardCss/PatientNav.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"


const PatientNavbar = () => {
    const smallScreen = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate();

    const toggleNav = () =>{
        let nav = document.getElementById("navDrawer");
        nav.classList.toggle('showDrawer');
       
    }

  return (
    <>
    {smallScreen &&
     <>
        <div className='Patient_smNavContainer'>
            <Link to="/Patient/Home">
            <div className="Patient_smNavContainer_logo">
                 <img src={logo1} alt="" />
            </div>
            </Link>
            <div className="Patient_smNavContainer_MenuIcon"  onClick={()=>{toggleNav()}}>
                <MenuIcon className="MenuIcon" />
            </div>
        </div>


            <div className='Patients_NavDrawer' id="navDrawer" >
                <ul className='Patients_NavDrawer_Ul'>
                    <li onClick={()=>navigate("/Patient/Profile")} className='Patients_NavDrawer_Ul_Item'>Profile</li>
                    <li className='Patients_NavDrawer_Ul_Item'>Records</li>
                    <li className='Patients_NavDrawer_Ul_Item'>Hospitals</li>
                    <li className='Patients_NavDrawer_Ul_Item'>Medicals</li>
                </ul>

            </div>
        </>
    }
    </>
  )
}

export default PatientNavbar
