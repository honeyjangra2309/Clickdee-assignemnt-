import React from 'react'
import "./Blogs.css"
import downArrow from "../assets/downArrow.jpg"

function Blogs() {
  return (
    <div className='blogs_container'>
      <div className="blog_parent">
        <div className="blog_left">
        <div className="blog_open">
            <div className="blog_open_header">
                <h3>Federal Solar Investment Tax Credit</h3>
                <span>^</span>
            </div>
            <div className="blog_open_text">
                <p>The federal solar investment tax credit (ITC) will have the biggest impact on the cost of your solar installation and is good at least through the end of 2022. This credit is 26% off the entire cost of the system including equipment, labor, and permitting. But hurry! The ITC credit drops to 22% in 2023, and the tax credit for Residential Solar drops to 0% in 2024.</p>
            </div>
        </div>
        <div className="blog">
            <h5>Net Energy Metering in Virginia</h5>
            <img src={downArrow} alt="" />
        </div>
        <div className="blog">
            <h5>Additional Solar Rebates</h5>
            <img src={downArrow} alt="" />
        </div>
        </div>
        <div className="blog_right">
        <div className="blog">
            <h5>Net Energy Metering in Virginia</h5>
            <img src={downArrow} alt="" />
        </div>
        <div className="blog">
            <h5>Additional Solar Rebates</h5>
            <img src={downArrow} alt="" />
        </div>
        <div className="blog">
            <h5>Net Energy Metering in Virginia</h5>
            <img src={downArrow} alt="" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs