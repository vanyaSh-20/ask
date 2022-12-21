import React from 'react'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const FooterTwo = () => {
  return (
    <div>
      <ul className='footer-two'>
        <li><a className='footer-link-two' href="https://twitter.com/i/flow/login" target='_blank'><BsTwitter /> Twitter </a></li>
        <li><a className='footer-link-two' href="https://www.facebook.com/" target='_blank'><BsFacebook /> Facebook </a></li>
        <li><a className='footer-link-two' href="https://www.instagram.com/" target='_blank'><BsInstagram /> Instragram</a> </li>
        <li><a className='footer-link-two' href="https://www.linkedin.com" target='_blank'><BsLinkedin /> Linkedin </a></li>
      </ul>
      <div className='privacy-two'>
        <p>Privacy & Terms © 2022 JSR Production</p>
      </div>
    </div>
  )
}

export default FooterTwo
