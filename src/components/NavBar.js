import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const navs= ["nav1", "nav2", "nav3", "nav4"];

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
          About Ask</NavLink>
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
      <div className='navPic'>
          {
            navs.map((val,index)=>
            <img key={index} src={`/${val}.jpg`} alt="img" />)
          }
      </div>
      </div>
    </div>
  )
}

export default NavBar
