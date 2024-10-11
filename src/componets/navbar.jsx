import React from 'react'
import "./navbar.css"
import logo from "../assent/logo.svg"
const Navbar = () => {
  return (
    <div className='navbar'>
        
        <div className='nav-left'>
<img src={logo} alt="logo-image" />
        </div>

        <div className='nav-right'>
            <p>Home</p>
            <p>Services</p>
            <p>Doctors</p>
            <p>Products</p>
            <p>Gallery</p>
        </div>
    </div>
  )
}

export default Navbar;