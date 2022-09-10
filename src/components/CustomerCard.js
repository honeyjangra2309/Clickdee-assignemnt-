import React from 'react'
import stars from "../assets/bi_star.jpg"
import './CustomerCard.css'
function CustomerCard(props) {
  return (
    <div className='customerCard_container'>
       <img src={stars} alt="" />
       <h5>{props.header}</h5>
       <p className='text'>{props.text}</p>
       <p className='customerName'>{props.customerName}</p>
    </div>
  )
}

export default CustomerCard