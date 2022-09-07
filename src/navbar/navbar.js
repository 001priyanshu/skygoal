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

<button id="open" onClick={handleClick} ><i class="fa fa-bars"></i></button>
 
    <div className='display' id="dis" >
        <li className="items">Services</li>
        <li className="items">Product</li>
        <li className="items">Technology</li>
        <li className="items">About</li>
        <li className="items">Client</li>
        <li className="items">Partner</li>
        
        <button id="close" onClick={close} ><i class="fa-sharp fa-solid fa-xmark"></i></button>
        
    </div>
      
    
    </div>
  )
}

export default Navbar;