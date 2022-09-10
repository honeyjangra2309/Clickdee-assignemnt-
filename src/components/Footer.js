import React from 'react'
import logoIcon from "../assets/Ellipse 6.jpg";
import './Footer.css' 

function Footer() {
  return (
    <div className='footer_container'>
      <div className="footer_parent">
        <div className="footer_header">
          <img src={logoIcon} alt="" />
          <h3>Solar Panel Quotes</h3>
        </div>
        <div className="footer_text">
            <p>Pest Exterminators is a free referral service that helps users connect with local service providers. Our service includes a nationwide network of contractors and a 24/7 customer support and dispatch center. All contractors are independent and Pest Exterminators does not endorse or guarantee any work performed. It is the responsibility of the user to verify the contractor they hire has the necessary license and insurance required for the work being performed. Any third party products, brands or trademarks listed above are the sole property of their respective owner. No affiliation or endorsement is intended or implied. All persons depicted are actors or models and not contractors listed on Pest Exterminators.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer