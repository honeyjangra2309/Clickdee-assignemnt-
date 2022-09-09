import React from 'react'
import './Intro.css'
import callIcon2 from "../assets/Group 28 (1).jpg";

function Intro() {
  return (
    <div className='intro_container'>
       <p className='intro_header'>TOP-NOTCH Service!</p>
        <h2>Call Us Today For Fast, Reliable-Same Day Service!</h2>
        <p className='intro_text'> We understand how frustrating those annoying pests can be. These creatures are running amuck in <br /> and around your home is super frustrating! You may love your pets, but you don’t love those pesky <br /> little pests.</p>
        <p className='intro_text'>If you need help to get rid of them and live in Delhi or the nearby area, you've come to the right place. <br /> First things first. We’ll identify the extent of your infestation and make it disappear — quickly, safely, <br /> and without breaking the bank. We deal with various pests, none of which can beat us at our own <br /> game. We deal with:</p>
        <div className='available'>
          <div className="available_left">
            <p className='available_left_header'>We're Available Now</p>
            <p className='available_left_text'>Our Fully Trained Experts Are Ready to Help You. <br /> Call Now For Your Risk-FREE Quote</p>
          </div>
          <div className="available_right">
          <span className="call_button">
            <img src={callIcon2} alt="" />
            866-951-5443
        </span>
          </div>
        </div>
    </div>
  )
}

export default Intro