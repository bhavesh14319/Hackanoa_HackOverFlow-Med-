import { Avatar } from '@mui/material'
import React from 'react'
import "../DoctoDashboardCss/Home.css"
import Navbar from './Navbar'
import logo from "../../Assets/logo.png"

const Home = () => {
  return (
    <div className='Home_body'>
        <Navbar/>

        <div className='Home_bodyContainer'>
            <div className='Home_bodyContainer_LHS'>
                  <h2>Hello Doctor, Rahul</h2>

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

                    </div> 

            </div>
            <div className='Home_bodyContainer_RHS'>
                  Doctors upcoming appointments  
            </div>
        </div>
    </div>
  )
}

export default Home
