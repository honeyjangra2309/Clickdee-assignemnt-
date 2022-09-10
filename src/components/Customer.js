import React from 'react'
import './Customer.css'
import ratings from '../assets/image 3.png'
import trustpilot from '../assets/Frame.jpg'
import CustomerCard from './CustomerCard'
function Customer() {
  return (
    <div className='customer_container'>
        <p className='process_header'>Our Customers Say</p>
        <h3 className="process_subHeader">What they’re saying?</h3>
      <p className='process_subHeader_text'>Over the years, we've connected thousands of people with reliable electricians and we're <br /> confident we can help you too!</p>
      <div className="ratings">
        <h3>Excellent</h3>
        <img src={ratings} alt="" />
        <p>Based on 786 reviews</p>
         <img src={trustpilot} alt="" />
      </div>
      <div className="customers_review">
        <CustomerCard header="They were so helpful and patient" text="Sheryl was so helpful and patient as she helped me navigate medicare plan options and find what is best." customerName="Maurice C." />
        <CustomerCard header="Matt Gardner was knowledgeable" text="Matt Gardner was knowledgeable about the medicare marketplace and current insurance companies and 2022 plans. He was very helpful getting us the right policy to fit our needs and at the right price." customerName="Donna L." />
        <CustomerCard header="Great Insurance Agent" text="I talked with a young man named Edis K. to finish my medicare sign-up process. He was amazing to work with on the phone. He walked me through stuff and spelled things out very clearly. He got me set up with just what I wanted: dental, vision and healthcare. Great guy!! Thanks again!" customerName="Donna L." />
      </div>
    </div>
  )
}

export default Customer