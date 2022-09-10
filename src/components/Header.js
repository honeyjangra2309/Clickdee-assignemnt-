import React from "react";
import logoIcon from "../assets/Group 56.jpg";
import callIcon from "../assets/Group 28.jpg";
import callIcon2 from "../assets/Group 28 (1).jpg";
import tickIcon from "../assets/tick.jpg"
import company1 from "../assets/image 9.jpg"
import company2 from "../assets/image 11.jpg"
import company3 from "../assets/image 13.jpg"
import company4 from "../assets/image 15.jpg"
import company5 from "../assets/image 17.jpg"
import "./Header.css";

function Header() {
  return (
    <div className="header_container">
      <div className="header_top_container">
        <div className="logoIcon">
          <img src={logoIcon} alt="" />
          <div className="logoIcon_text">
            <p>SOLAR PANEL </p> <span>Quotes</span>
          </div>
        </div>
        <div className="logoIcon_right">
          <p className="call_us">Call us at </p>
          <img src={callIcon} alt="" />
          <a href="tel: +866-951-5443" style={{textDecoration:"none"}}><p className="number">866-951-5443</p></a>
        </div>
      </div>
      <div className="header_main">
        <h1>Delhi, DL Pest Exterminator</h1>
        <h4> Delhi Number 1 Pest Exterminator is just One Call Away!</h4>
        <h3 className="header_main_mission"> For Fast & Easy, Same-Day Service <br></br> Call Now to Get Rid of Those Pesky Pests Today!</h3>
        <a href="tel: +866-951-5443" style={{textDecoration:"none"}}><span className="call_button">
            <img src={callIcon2} alt="" />
            866-951-5443
        </span>
        </a>
        <div className="services">
            <div className="service">
                <img src={tickIcon} alt="" />
                <p>Zero-Obligation Estimates</p>
            </div>
            <div  className="service">
                <img src={tickIcon} alt="" />
                <p>Trusted & Local</p>
            </div>
            <div  className="service">
                <img src={tickIcon} alt="" />
                <p>First Class Customer Service</p>
            </div>
        </div>
      </div>
      <div className="companies">
        <p>Trusted by</p>
         <img src={company1} alt="" />
         <img src={company2} alt="" />
         <img src={company3} alt="" />
         <img src={company4} alt="" />
         <img src={company5} alt="" />
      </div>
    </div>
  );
}

export default Header;
