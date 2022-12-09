import React from 'react'
import FooterTwo from './FooterTwo'
import NavBarTwo from './NavBarTwo'

const About = () => {
  return (
    <div>
    <NavBarTwo />
    <div className='about-one'>
      <h1>Ours is a simple story ↓</h1>
    </div>
    <div className='about-two'>
     <img src="/banner.jpg" alt="" />
      <h2>ABOUT US</h2>
      <p>ASK believes in creating a long-term relationship with its consumers to ensure seamless message 
      delivery so that it becomes a thought-provoking experience engendering action. Our organization focuses 
      on three primary genre types, active in the hospitality, tourist, and municipal government industries. 
      We intend to provide comprehensive branding and marketing advice and communication development strategies 
      for companies across the United Arab Emirates. Our business is not only concerned with providing a service to our customers. 
      We look forward to developing a customer experience for our clients that includes consultation, goal and market analysis. 
      In today's business environment, it can be challenging for any firm to stand out among a sea of rivals. For this reason, 
      we continuously look for new and better ways to boost your brand's influence in the marketplace. 
      ASK is aware that our clients in the area have unique requirements for reaching the public with their information and messages 
      and inspiring them to take action. We want to see our customers thrive and are willing to go the extra mile.</p>
    </div>
    <FooterTwo />
    </div>
  )
}

export default About
