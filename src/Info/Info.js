import React from 'react'
import img from "../Images/pana.svg"
import "./Info.css"
const Info = () => {
  return (
    <div>
      <div className='info-container'>

        <div className='info'>
          <h1>Making the most of the ever-growing </h1>
          <h1 className='color-red'>Information Technology</h1>
          <p>Managed by a team of professional experts with extensive experience and impressive track records</p>
          <button className='button-border-red'>Read More</button>

        </div>
        <div className='info-image'>
          {/* <img src={img}></img> */}

        </div>
      </div>
    </div>
  )
}

export default Info