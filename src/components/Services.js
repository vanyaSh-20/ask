import React from 'react'
//import { Link } from 'react-router-dom'
import FooterTwo from './FooterTwo'
import NavBarTwo from './NavBarTwo'
import { useState } from 'react'
import DetailsOne from './DetailsOne'
import DetailsTwo from './DetailsTwo'
import DetailsThree from './DetailsThree'
import DetailsFour from './DetailsFour'

const Services = () => {
    const [show, setShow] = useState(false)
    const [showTwo, setShowTwo] = useState(false)
    const [showThree, setShowThree] = useState(false)
    const [showFour, setShowFour] = useState(false)

    return (
        <div>
        <NavBarTwo />
            <div className='services-one'>
                <h1>Ours work flash here ↓</h1>
            </div>

            <div className='services-two'>

                <div className='card'>
                  <h1>Pre-Production</h1>
                    <div className='content'>
                        <h3>Story and Scriptwriting</h3>
                        <p>Do you have a story idea but don't know how to show it on screen? 
                        Don't worry, we have your back. We are storytellers who know what makes people 
                        laugh, cry, or jump out of their seats with excitement.</p>
                        <br />
                        <button className='detail_btn' onClick={()=> {setShow(!show)}}>Details ⮟</button> <br /><br />
                        {
                            show ?
                            <DetailsOne />
                            :null
                        }
                    </div>
                </div>

                <div className='card'>
                  <h1>Production</h1>
                    <div className='content'>
                        <h3>Filming</h3>
                        <p>We specialize in producing and directing award-winning films. We create outstanding 
                        videos that tell tales in the most powerful way possible!</p>
                        <br />
                        <button className='detail_btn' onClick={()=> {setShowTwo(!showTwo)}}>Details ⮟</button> <br /><br />
                        {
                            showTwo ?
                            <DetailsTwo />
                            :null
                        }
                    </div>
                </div>

                <div className='card'>
                  <h1>Post-Production</h1>
                    <div className='content'>
                        <h3>Editing</h3>
                        <p>Our editing team will make your project seamless and impeccable. Using our professional tools and 
                        software, we make sure that your project is perfectly edited.</p>
                        <br />
                        <button className='detail_btn' onClick={()=> {setShowThree(!showThree)}}>Details ⮟</button> <br /><br />
                        {
                            showThree ?
                            <DetailsThree />
                            :null
                        }
                    </div>
                </div>

                <div className='card'>
                  <h1>Audio-Production</h1>
                    <div className='content'>
                        <h3>Music Production</h3>
                        <p>We can help you compose your music and lyrics with our team of efficient composers and songwriters 
                        with years of industry experience.</p>
                        <br />
                        <button className='detail_btn' onClick={()=> {setShowFour(!showFour)}}>Details ⮟</button> <br /><br />
                        {
                            showFour ?
                            <DetailsFour />
                            :null
                        }
                    </div>
                </div>

            </div>
        <FooterTwo />
        </div>
    )
}

export default Services
