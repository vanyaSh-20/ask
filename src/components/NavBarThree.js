import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarThree = () => {
  return (
    <div>
      <div>
      <ul className='navbar-three'>
        <li><NavLink
          className='nav-bar-link-three'
          to="/">
          Home</NavLink>  
        </li>
        <li><NavLink
          className='nav-bar-link-three'
          to="/about">
          About Ask</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link-three'
          to="/work">
          Work</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link-three'
          to="/services">
          Services</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link-three'
          to="/contact">
          Contact</NavLink>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default NavBarThree