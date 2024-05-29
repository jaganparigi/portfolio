import React from 'react'
import './Navbar.css'
import Jagan from '../../assets/Jagan.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Jagan} alt="" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>My Work</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect</div>
    </div>
  )
}
export default Navbar