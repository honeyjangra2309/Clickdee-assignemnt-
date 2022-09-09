import React from 'react'
import './Process.css'

function Process() {
  return (
    <div className='process_container'>
      <p className='process_header'>Our process</p>
      <h3 className="process_subHeader">How exactly we work?</h3>
      <p className='process_subHeader_text'>Our vast network of exterminators has been connected to locals just like you, thanks to our <br /> 24/7 call service. Here’s what to do when you’re in a pest pickle.</p>
      <div className="progress_steps">
        <div className="step">
            <span>1</span>
            <div className='step_text'>
                <h3 className='step_text_header'>Contact Our Team</h3>
                <p className='step_text_subHeader'>Call our 24-hour customer support and dispatch center. Tell us about your electrical needs <br /> and what type of work you need done.</p>
            </div>
        </div>
        <div className="step">
            <span>2</span>
            <div className='step_text'>
                <h3 className='step_text_header'>Schedule Your Appointment</h3>
                <p className='step_text_subHeader'>Next, our agents will try to instantly connect you with one of our local electrical contractors to <br /> schedule your appointment.</p>
            </div>
        </div>
        <div className="step">
            <span>3</span>
            <div className='step_text'>
                <h3 className='step_text_header'>Service Completion</h3>
                <p className='step_text_subHeader'>If you decide to proceed, your electrician will provide a firm quote and perform the tasks that <br /> needed to complete your job.</p>
            </div>
        </div>
        {/* <div className="step">
            <span>3</span>
            <div className='step_text'>
                <h3 className='step_text_header'>Service Completion</h3>
                <p className='step_text_subHeader'>If you decide to proceed, your electrician will provide a firm quote and perform the tasks <br /> needed to complete your job.</p>
            </div>
        </div> */}
        
       
      </div>
    </div>
  )
}

export default Process