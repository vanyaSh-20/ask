import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Button from './Button'

const Home = () => {
    const imgs=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const grid= ["grid1","grid2","grid3","grid4","grid5","grid6","grid7","grid8","grid9"];
    const [imgsShowMore,setImgsShowMore]=useState(false);
    const onAdd =()=>{setImgsShowMore(!imgsShowMore)};
    
    const [toggleBar,setToggleBar]=useState(false);
    const onToggle =()=>{setToggleBar(!toggleBar)}

    return (
        <div> 
        <div id="menu" onClick={onToggle}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
        </div>
        <div className='design-image'>
        <img src={"/JSRS.png"} alt="img" />
        <video playsInline autoPlay loop muted src="/jsr_ad.mp4"></video>
        </div>
        {toggleBar && <NavBar />}
        {/* <div className='video-top'>
            <video playsInline autoPlay loop muted src="/vidTop.mp4"></video>
        </div> */}
        <div className='home-one'>
            <div className='our-story-line'>
            
                <h1>Our Vission</h1>
                <p>We love telling stories of all kinds, but we especially love telling unique stories. 
                We believe that there's always room for innovation in filmmaking: new techniques, 
                new technologies, and new ways of telling stories that make us think differently 
                about ourselves and the world around us. We aim to bring these fresh perspectives to the world 
                through our work as filmmakers.</p>
            </div>
        </div>
        <div className='grids'>
        {
                grid.map((val,index)=>
                <img key={index} src={`/${val}.jpg`} alt="img" />
                )
            }
        </div>
        <div className='home-two'>
            <div className='para'>
                <p>To tackle the ever-increasing competition in the marketplace, at ASK, 
                we are continually looking for new and more effective ways to increase your brand's market influence.</p>
                <Link className='para-link' to="/work">Discover our work</Link>
        </div>
        </div>
        <div className='h-three'><p>Clientele</p></div>
        <div className='studio'>

            {/* <div>
            <img src={"/A.png"} alt="img" />
            </div>
            <img src={"/B.png"} alt="img" /> */}
            {
                imgs.slice(0,imgsShowMore ? imgs.length : 10).map((val,index)=>
                <img key={index} src={`/${val}.png`} alt="img" />
                )
            }

            <Button text={imgsShowMore ? 'Show less' : 'Show more'} onClick={onAdd} />
        </div>
        <div className='h-four'>
        <h1>Testimonials</h1>
        <hr />
        <div className='testimonials' >
            <div className='testimonial'>
                <p>Working with the production was amazing. They were flexible and accommodating and helped us pick out 
                some great locations and vendors. They made sure that we were happy with everything before we went live, 
                which is something I appreciate in a planner.</p>
            </div>
            <div className='testimonial'>
                <p>The JSR team is very professional, and they did a great job making sure everything was exactly as we wanted it. 
                They were very responsive and easy to work with throughout the whole process, which made our experience much less 
                stressful than we expected it to be.</p>
            </div>
            <div className='testimonial'>
                <p>We had a great experience working with The Production Company for our album song FURSAT! The team was very 
                responsive to questions throughout the planning process. They were very professional, helping us edit and also 
                providing us with a platform to launch our work.</p>
            </div>
            <div className='testimonial'>
                <p><b>Team Fursatt: </b>
                I had the pleasure of working with the production team on my project, and it was amazing. 
                They were very easy to work with and made sure that everything was perfect. I would highly recommend them 
                to anyone looking for work with perfection!</p>
            </div>
        </div>
        </div>
        <div className='video'>
            <video width="100%" playsInline autoPlay loop muted src="/vid.mp4"></video>
        </div>
        <Footer />
        </div>
    )
}

export default Home
