import React from 'react'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <ul className='footer'>
        <li><a className='footer-link' href="https://twitter.com/house_jsr" target='_blank'><BsTwitter /> Twitter </a></li>
        <li><a className='footer-link' href="https://www.facebook.com/JSRProductionhouse/" target='_blank'><BsFacebook /> Facebook </a></li>
        <li><a className='footer-link' href="https://www.instagram.com/jsrproductionhouse/?hl=en" target='_blank'><BsInstagram /> Instragram</a> </li>
        <li><a className='footer-link' href="https://www.linkedin.com" target='_blank'><BsLinkedin /> Linkedin </a></li>
      </ul>
      <div className='privacy'>
        <p>Privacy & Terms © 2022 JSR Production</p>
      </div>
    </div>
  )
}

export default Footer
