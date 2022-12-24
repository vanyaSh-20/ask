import React from 'react'
import FooterThree from './FooterThree'
import NavBarThree from './NavBarThree'


const Contact = () => {
    return (
        <div>
        <NavBarThree />
            {/* <iframe className="map" url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7958687185096!2d55.337820314815524!3d25.24379953387456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d99a3c36131%3A0x9039cff0e8ab86ba!2sGarhoud%20Views%20Building!5e0!3m2!1sen!2sin!4v1664705243543!5m2!1sen!2sin"
                width="600"
                height="450"
                // style="border:0;"
                // allowfullscreen=""
                loading="lazy"
                referrerPolicy={"no-referrer-when-downgrade" }
                /> */}
                <iframe title='map' className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.351185324611!2d78.03660211512079!3d30.284062481795758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092904359ef497%3A0xdbfac6e5851578c1!2sJSR%20Production%20House!5e0!3m2!1sen!2sin!4v1671614416827!5m2!1sen!2sin" 
                 style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <FooterThree />
        </div>
    )
}

export default Contact
