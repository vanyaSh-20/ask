import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiLocation } from 'react-icons/ti'
import { MdCall, MdEmail } from 'react-icons/md'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const FooterThree = () => {
  return (
    <div>
    <div className='footer-three'>
      <div className='footer-three-one'>
      <ul className='navbar-four'>
        <li><NavLink
          className='nav-bar-link-four'
          to="/">
          Home</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link-four'
          to="/about">
          |
          About Ask</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link-four'
          to="/work">
          |
          Work</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link-four'
          to="/services">
          |
          Services</NavLink>
        </li>
        <li><NavLink
          className='nav-bar-link-four'
          to="/contact">
          |
          Contact</NavLink>
        </li>
      </ul>
      <p>JSR Production © 2022</p>
      </div>
      <div className='footer-three-two'>
         <p><TiLocation/>Shaheed Gireesh Bhadri, Mothrowala, Chowk, Banjarawala Rd, Ajabpur Khurd, Dehradun, Uttarakhand 248001</p>
         <p><MdCall /> 07830399111</p>
         <p><MdEmail /> info@jsrproductionhouse.com</p>
      </div>
      <div className='footer-three-three'>
      <h5>About the company</h5>
      <p>ASK believes in creating a long-term relationship with its consumers to ensure seamless message delivery 
      so that it becomes a thought-provoking experience engendering action. Our organization focuses on three 
      primary genre types, active in the hospitality, tourist, and municipal government industries.</p>
      <ul className='footer-bar'>
        <li><a className='footer-link-bar' href="https://twitter.com/i/flow/login" target='_blank'><BsTwitter /></a></li> 
        <li><a className='footer-link-bar' href="https://www.facebook.com/" target='_blank'><BsFacebook /></a></li> 
        <li><a className='footer-link-bar' href="https://www.instagram.com/" target='_blank'><BsInstagram /></a> </li>
        <li><a className='footer-link-bar' href="https://www.linkedin.com" target='_blank'><BsLinkedin /></a></li>
      </ul>
      </div>
    </div>
    <div className='privacy-con'>
        <p>Privacy & Terms © 2022 JSR Production</p>
      </div>
    </div>
  )
}

export default FooterThree
