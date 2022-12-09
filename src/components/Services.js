import React from 'react'
import { Link } from 'react-router-dom'
import FooterTwo from './FooterTwo'
import NavBarTwo from './NavBarTwo'

const Services = () => {
    return (
        <div>
        <NavBarTwo />
            <div className='services-one'>
                <h1>Ours work flash here ↓</h1>
            </div>

            <div className='services-two'>

                <div className='col card'>
                <div className='front'>
                    <h5>BRAND STRATEGY AND IDENTITY</h5>
                    <hr />
                </div>
                <div className='back'>
                    <p>By defining your brand's identity and tone of voice to appeal to your target audience,
                        ASK's comprehensive approach will help you develop a substantial and differentiating presence.</p>
                    <Link className='col-link' to="/">Learn more</Link>
                </div>
                </div>

                <div className='col card'>
                <div className='front'>
                    <h5>CREATIVE SERVICES</h5>
                    <hr />
                </div>
                <div className='back'>
                    <p>Our audacious skills give messages life by offering creative strategies, marketing efforts,
                        and all-encompassing solutions to assist brands.</p>
                    <Link className='col-link' to="/">Learn more</Link>
                </div>
                </div>

                <div className='col card'>
                <div className='front'>
                    <h5>ADVERTISING SOLUTIONS</h5>
                    <hr />
                </div>
                <div className='back'>
                    <p>We offer our clients comprehensive solutions to increase the reach of business,
                        whether it be through strategy, creative, or production services.</p>
                    <Link className='col-link' to="/">Learn more</Link>
                </div>
                </div>

                <div className='col card'>
                <div className='front'>
                    <h5>NAMING AND POSITIONING</h5>
                    <hr />
                </div>
                <div className='back'>
                    <p>We can help you create a compelling, well-thought-out positioning statement that ties
                        together your overall value proposition and your positioning for a product.</p>
                    <Link className='col-link' to="/">Learn more</Link>
                </div> 
                </div>

                <div className='col card'>
                <div className='front'>
                    <h5>COLATERAL DESIGN AND PRINT PRODUCTION</h5>
                    <hr />
                </div>
                <div className='back'>
                    <p>From collateral design through print manufacturing, we pay close attention to the little things
                        while highlighting the importance of collaterals for brand image development.</p>
                    <Link className='col-link' to="/">Learn more</Link>
                </div>
                </div>

                <div className='col card'>
                <div className='front'>
                    <h5>INTERACTIVE AND MOBILE APP DESIGN AND PROGRAMMING</h5>
                    <hr />
                </div>
                <div className='back'>
                    <p>With our business partners, we create Mobile Apps for regulatory requirements.
                        Your company can reach more people on any mobile device.</p>
                    <Link className='col-link' to="/">Learn more</Link>
                </div>
                </div>

                <div className='col card'>
                <div className='front'>
                    <h5>WEBSITE SOLUTIONS</h5>
                    <hr />
                </div>
                <div className='back'>
                    <p>In collaboration with our business partners, we offer newly created websites, online portals,
                        feature-rich web apps, and continuing maintenance, monitoring, and support.</p>
                    <Link className='col-link' to="/">Learn more</Link>
                </div>
                </div>

                <div className='col card'>
                <div className='front'>
                    <h5>CONTENT MANAGEMENT</h5>
                    <hr />
                </div>
                <div className='back'>
                    <p>We regularly collaborate with our clients to ensure that material is
                        current and driving consumer interaction.</p>
                    <Link className='col-link' to="/">Learn more</Link>
                </div>
                </div>

                <div className='col card'>
                <div className='front'>
                    <h5>MARKETING STRATEGY</h5>
                    <hr />
                </div>
                <div className='back'>
                    <p>Are you unsure how to jumpstart your strategy? We provide you with an achievable and
                        focused plan for marketing goals.</p>
                    <Link className='col-link' to="/">Learn more</Link>
                </div>
                </div>

            </div>
        <FooterTwo />
        </div>
    )
}

export default Services
