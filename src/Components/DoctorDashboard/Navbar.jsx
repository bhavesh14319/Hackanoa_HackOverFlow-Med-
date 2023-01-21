import React from 'react'
import "../DoctoDashboardCss/Navbar.css"
import logo from "../../Assets/i.png"
import {  useNavigate } from "react-router-dom";
import {  useLocation } from 'react-router-dom';

const Navbar = () => {
    var flag= false;
    var flag2= false;
    let navigate = useNavigate();
    const location = useLocation();
    if(location.pathname=="/Doctor/home/appointments"){
        flag=true;
    }else{
        flag=false;
    }
    if(location.pathname=="/Doctor/hospitals"){
        flag2=true;
    }else{
        flag2=false;
    }
    const navigator =()=>{
        if(flag){
           navigate("/Doctor/home");
        }else{
            navigate("/Doctor/home/appointments");
        }
    }
  return (
    <div className='Navbar_Container'>

        <div className='Navbar_logo'>
            <img src={logo} alt="" />
        </div>

        <div>
            <ul className='Navbar_ItemsContainer'>
                <li className='Navbar_Item' onClick={()=>{navigator()}}>
                    {
                        flag === true?  <>
                            <p>Dashboard</p>
                            </>
                            :
                            flag2==true?" "
                            :
                            <p>Patients</p>
                    }
                </li>
                {
                        flag === true?  <>
                            
                            <li className='Navbar_Item' onClick={()=>{navigate("/Doctor/prescription")}}>Prescription</li>
                            </>
                            :
                            ""                    
                }
                <li onClick={()=>{navigate("/Doctor/Login")}} className='Navbar_Item'>
                    Logout
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
