import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarTwo = () => {
  return (
    <div>
      <div>
      <ul className='navbar-two'>
        <li><NavLink
          className='nav-bar-link-two'
          to="/">
          Home</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link-two'
          to="/about">
          About Ask</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link-two'
          to="/services">
          Services</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link-two'
          to="/contact">
          Contact</NavLink>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default NavBarTwo
