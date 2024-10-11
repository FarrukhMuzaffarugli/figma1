import React from 'react'
import "./footer.css"
import footera from "../assent/image 94.svg";
import footerb from "../assent/image 95.svg";
import footerc from "../assent/image 98.svg";
import footerd from "../assent/image 96.svg";
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-menu'>
            <h1>Beauty Care</h1>
            <p>Do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris.</p>
       <h2>Follow Us</h2>
        </div>
        <div className='footer-img'>
            <h1>Instagram Shop</h1>
            <div className="footerimg">
                <img src={footera} alt="footer-img" />
                <img src={footerb} alt="footr-img" />
                <img src={footerc} alt="footerc-img" />
                <img src={footerd} alt="footerd-img" />
            </div>
        </div>
    </div>
  )
}

export default Footer;