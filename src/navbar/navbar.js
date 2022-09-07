import React from 'react'
import './navbar.css'

const Navbar = () => {

  const handleClick = ()=>{
    const nav = document.getElementById('dis');
    nav.style.left = "0px";
  }
  const close = ()=>{
    const nav = document.getElementById('dis');
    nav.style.left = "-800px";
  }
  return (
    <div className="navbox">

<button id="open" onClick={handleClick} >click</button>
 
    <div className='display' id="dis" >
        <li className="items">Items</li>
        <li className="items">Items</li>
        <li className="items">Items</li>
        <li className="items">Items</li>
        <li className="items">Items</li>
        <button id="close" onClick={close} >Cross</button>
    </div>
      
    
    </div>
  )
}

export default Navbar;