import React from 'react'
import img from "../Images/pana-1.svg"
require('./Welcome.css');
const Welcome = () => {
  return (
    <div className='welcome-container'>

        <div>
            {/* <img src={img} /> */}
            <div className='welcome-image'></div>
        </div>
        <div className='welcome-content'>
            <h1>Welcome to
            <span className='color-red'> Dwidasa Samara Indonesia(DSI)</span></h1>
            <p>Dwidasa Samsara Indonesia(DSI) was firstly established in 2010 by the founder who each of then has a common end objective to innovate new creations by naking the most of the ever- growing information technology thorugh DSI's distinct front end based application concept</p>
            <p>Managed by a team of professional expert with extensive experince and impressive track records.DSI believes that continuous improvements and innovations assure your buiseness to run effectively and efficiently.</p>
        </div>
    </div>
  )
}

export default Welcome;