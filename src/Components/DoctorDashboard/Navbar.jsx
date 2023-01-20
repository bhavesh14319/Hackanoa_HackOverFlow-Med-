import React from 'react'
import "../DoctoDashboardCss/Navbar.css"
import logo from "../../Assets/logo.png"

const Navbar = () => {
  return (
    <div className='Navbar_Container'>

        <div className='Navbar_logo'>
            <img src={logo} alt="" />
        </div>

        <div>
            <ul className='Navbar_ItemsContainer'>
                <li className='Navbar_Item'>
                    Patients
                </li>
                <li className='Navbar_Item'>
                    Logout
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
