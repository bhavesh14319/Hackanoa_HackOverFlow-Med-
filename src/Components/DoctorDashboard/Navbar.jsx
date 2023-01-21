import React from 'react'
import "../DoctoDashboardCss/Navbar.css"
import logo from "../../Assets/i.png"
import {  useNavigate } from "react-router-dom";
import {  useLocation } from 'react-router-dom';

const Navbar = () => {
    var flag= false;
    let navigate = useNavigate();
    const location = useLocation();
    if(location.pathname=="/Doctor/home/appointments"){
        flag=true;
    }else{
        flag=false;
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
                <li className='Navbar_Item'>
                    Logout
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
