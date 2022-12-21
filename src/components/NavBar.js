import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
      <div className='nav-container'>
      <ul className='navbar'>
        <li><NavLink
          className='nav-bar-link'
          to="/">
          Home</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link'
          to="/about">
          About Us</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link'
          to="/work">
          Work</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link'
          to="/services">
          Services</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link'
          to="/contact">
          Contact</NavLink>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default NavBar
