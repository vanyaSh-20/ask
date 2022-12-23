import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Slider from "react-slick";
// import Button from './Button'

const Home = () => {
//   const imgs = [
//     "1v",
//     "1",
//     "2",
//     "2v",
//     "3",
//     "4",
//     "3v",
//     "5",
//     "6",
//     "4v",
//     "7",
//     "8",
//     "5v",
//     "9",
//     "10",
//     "6v",
//   ];
  const grid = [
    "72_Hours",
    "Mai_Shiv_Hu",
    "Tu_Na_Sahi",
    "Bairi_Piya",
    "Rukhsat",
    "Baby_Bas_Kar",
  ];

  var settings = {
    dots: false,
    infinite: true,
    arrows:false,
    slidesToShow: 4.2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    pauseOnHover: true,
    cssEase: "linear"
  };


  // const [imgsShowMore,setImgsShowMore]=useState(false);
  // const onAdd =()=>{setImgsShowMore(!imgsShowMore)};

  const [toggleBar, setToggleBar] = useState(false);
  const onToggle = () => {
    setToggleBar(!toggleBar);
  };

  return (
    <div>
      <div id="menu" onClick={onToggle}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
      </div>
      <div className="design-image">
        <img src={"/JSRS.png"} alt="img" />
        <video playsInline autoPlay loop muted src="/jsr_ad.mp4"></video>
      </div>
      {toggleBar && <NavBar />}
      {/* <div className='video-top'>
            <video playsInline autoPlay loop muted src="/vidTop.mp4"></video>
        </div> */}
      <div className="home-one">
        <div className="our-story-line">
          <h1>Our Vission</h1>
          <p>
            We love telling stories of all kinds, but we especially love telling
            unique stories. We believe that there's always room for innovation
            in filmmaking: new techniques, new technologies, and new ways of
            telling stories that make us think differently about ourselves and
            the world around us. We aim to bring these fresh perspectives to the
            world through our work as filmmakers.
          </p>
        </div>
      </div>
      <div className="grids">
        {
            grid.map((val, index) => (
             <img key={index} src={`/${val}.png`} alt="img" />
            ))
        }
      </div>
      <div className="home-two">
        <div className="para">
          <p>
            To tackle the ever-increasing competition in the marketplace, at
            ASK, we are continually looking for new and more effective ways to
            increase your brand's market influence.
          </p>
          <Link className="para-link" to="/work">
            Discover our work
          </Link>
        </div>
      </div>
      <div className="carousel">
        <Slider {...settings}>
        <div className="vertical">
          <img src={"/1v.png"} alt="img" />
        </div>
        <div className="horizontal">
          <img src={"/1.png"} alt="img" />
          <img src={"/2.png"} alt="img" />
        </div>
        <div className="vertical">
          <img src={"/2v.png"} alt="img" />
        </div>
        <div className="horizontal">
          <img src={"/3.png"} alt="img" />
          <img src={"/4.png"} alt="img" />
        </div>
        <div className="vertical">
          <img src={"/3v.png"} alt="img" />
        </div>
        <div className="horizontal">
          <img src={"/5.png"} alt="img" />
          <img src={"/6.png"} alt="img" />
        </div>
        <div className="vertical">
          <img src={"/4v.png"} alt="img" />
        </div>
        <div className="horizontal">
          <img src={"/7.png"} alt="img" />
          <img src={"/8.png"} alt="img" />
        </div>
        <div className="vertical">
          <img src={"/5v.png"} alt="img" />
        </div>
        <div className="horizontal">
          <img src={"/9.png"} alt="img" />
          <img src={"/10.png"} alt="img" />
        </div>
           {/* {
            imgs.map((val, index) => (
             <img key={index} src={`/${val}.png`} alt="img" />
            ))
           } */}
        </Slider>

        {/* <div>
            <img src={"/A.png"} alt="img" />
            </div>
            {/* <img src={"/B.png"} alt="img" /> */}
        {/* {
                imgs.slice(0,imgsShowMore ? imgs.length : 10).map((val,index)=>
                <img key={index} src={`/${val}.png`} alt="img" />
                )
            }

            <Button text={imgsShowMore ? 'Show less' : 'Show more'} onClick={onAdd} /> */}
      </div>
      <div className="h-four">
        <div></div>
        <h1>Testimonials</h1>
        <hr />
        <div className="testimonials">
          <div className="testimonial">
            <p>
              Working with the production was amazing. They were flexible and
              accommodating and helped us pick out some great locations and
              vendors. They made sure that we were happy with everything before
              we went live, which is something I appreciate in a planner.
            </p>
          </div>
          <div className="testimonial">
            <p>
              The JSR team is very professional, and they did a great job making
              sure everything was exactly as we wanted it. They were very
              responsive and easy to work with throughout the whole process,
              which made our experience much less stressful than we expected it
              to be.
            </p>
          </div>
          <div className="testimonial">
            <p>
              We had a great experience working with The Production Company for
              our album song FURSAT! The team was very responsive to questions
              throughout the planning process. They were very professional,
              helping us edit and also providing us with a platform to launch
              our work.
            </p>
          </div>
          <div className="testimonial">
            <p>
              <b>Team Fursatt: </b>I had the pleasure of working with the
              production team on my project, and it was amazing. They were very
              easy to work with and made sure that everything was perfect. I
              would highly recommend them to anyone looking for work with
              perfection!
            </p>
          </div>
        </div>
        {/* <img src={"/3.png"} alt="img" /> */}
      </div>
      <div className="video">
        <video
          width="100%"
          playsInline
          autoPlay
          loop
          muted
          src="/shape_motion.mp4"
        ></video>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
