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
        <img src={"/JSR.png"} alt="img" />
        <video playsInline autoPlay loop muted src="/vidTop.mp4"></video>
        </div>
        {toggleBar && <NavBar />}
        {/* <div className='video-top'>
            <video playsInline autoPlay loop muted src="/vidTop.mp4"></video>
        </div> */}
        <div className='home-one'>
            <div className='our-story-line'>
            
                <h1>A Straight Forward Narrative</h1>
                <p>Our firm isn't just concerned with providing a service to our clients.
                    We believe in developing a long-term relationship with them to make the delivery
                    of their message a seamless, thought-provoking experience that inspires action.
                    We apprehend how crucial it is to expand and innovate. Therefore we are willing to help.</p>
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
                <Link className='para-link' to="/About">Discover our work</Link>
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
        <div className='video'>
            <video width="100%" playsInline autoPlay loop muted src="/vid.mp4"></video>
        </div>
        <Footer />
        </div>
    )
}

export default Home
