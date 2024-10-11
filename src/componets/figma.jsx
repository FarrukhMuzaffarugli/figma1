import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./figma.css";
import logo1 from "../assent/Group.svg";
import logo2 from "../assent/Group1.svg";
import logo3 from "../assent/shield-1 1.svg";
import uchtali from "../assent/uchta.svg";
import menu3 from "../assent/menu3.svg";
import samtali from "../assent/3tali.jpg";
import rasma from "../assent/african.svg";
import rasmb from "../assent/bino.svg";
import rasmd from "../assent/empty.svg";

const Figma = () => {
  return (
    <div>
      <Navbar />
      <div className="menu">
        <div className="collaction">
          <div className="coll-menu">
            <h6>New Arrival</h6>
            <h1>Discover Our
                New Collection</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button>BUY   Now</button></div>
        </div>
        <div className="collaction-nbr">
            <div className="col-nbr"><div className="img-col">
            <img src={logo1} alt="logo1-img" /></div>
                <div className="collmenu">
                    <h1>Free Delivery</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="col-nbr">
            <div className="img-col"><img src={logo2} alt="logo2-img" /></div>
                <div className="collmenu">
                    <h1>Support 24/7</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="col-nbr">
           <div className="img-col"> <img src={logo3} alt="logo3-img" /></div>
                <div className="collmenu">
                    <h1>100% Authentic</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
      </div>
      <div className="menu2">
        <h1>Inspiration Collection</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img src={uchtali} alt="uchtali-img" />
      </div>
      <div className="menu3">
        <div className="menu3-mn">
            <h1>Beautify Your Space</h1>
            <p>Do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris.</p>
       <button>Learn More</button>
        </div>
        <div className="menu3-img">
            <img src={menu3} alt="menu3-img" />
        </div>
      </div>
      <div></div>
      <div></div>
      <div className="menu4">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="rasm"><img src={samtali} alt="samtali-rasm" /></div>
        <div className="menu4l">
        <p>Dining</p>
        <p>Living</p>
        <p>Bedroom</p></div>
      </div>
      <div className="menu5">
        <h1>How It Works</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="rasmimg">
            <img src={rasma} alt="rasm-1" />
            <img src={rasmb} alt="rasm-2" />
            <img src={rasmd} alt="rasm-3" />
        </div>
        <div className="menu5-sid"><h1>Purchase Securely</h1>
        <h1>Ships From Warehouse</h1>
        <h1>Style Your Room</h1></div>
        <div className="menu5-sidp">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="menu6">
        <h1>Join Our Mailing List</h1>
        <p>Sign up to receive inspiration, product updates, and special offers from our team.</p>
        <div className="menu6-btn"><input type="email" placeholder="example@gmail.com" />
<button type="submit">Submit</button></div>
      </div>
      <Footer />
    </div>
  );
};

export default Figma;
