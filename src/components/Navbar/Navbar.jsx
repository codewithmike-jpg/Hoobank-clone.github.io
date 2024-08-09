import React from 'react'
import './Navbar.css'
function Navbar() {
    const logo = "./src/assets/logo.svg";
  return (
    <div className='nav'>
        <div id="brand">
            <img src= {logo}/>
        </div>
        <ul id='nav-menu'>
            <a href=""><li>Home</li></a>
            <a href=""><li>Features</li></a>
            <a href=""><li>Products</li></a>
            <a href=""><li>Clients</li></a>

        </ul>
    </div>
  )
}

export default Navbar