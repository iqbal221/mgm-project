import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG,faFacebookF,faTwitter, faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <div className='footer'>
            <div className='row mx-sm-4 mx-3 '>
                <div className='col-sm-5 about'>
                    <h4 className='text-center'>ABOUT US</h4>
                    <p>MGM Power & Decor is a trusted and reliable shipping container design agency amoung all the leading and updated design agency in Bangladesh. We are here to bring the luxury to your container interior design.
                        Customer satisfaction is our first priority. Our team is very professional.
                    </p>
                </div>

                <div className='col-sm-3 ms-lg-5 ms-sm-0 ps-lg-5 ps-sm-0 menu'>
                    <h4>QUICK MENU</h4>
                    <div>
                        <p className='mb-2 '><NavLink to='/About'>About Us</NavLink></p>
                        <p className='mb-2 '><NavLink to='/Contact'>Contact Us</NavLink></p>
                        <p className='mb-2 '><NavLink to='/Contact'>Mission & Vission</NavLink></p>
                      
                    </div>
                </div>

                <div className='col-sm-3 ms-lg-5 ms-sm-0 ps-lg-5 ps-sm-0 social'>
                    <h4 >SOCIAL LINK</h4>
                    <a href='https://www.facebook.com//MGMPowerAndDecor' target='_blank' rel="noreferrer"><FontAwesomeIcon className='me-3 social-icon  me-3' icon={faFacebookF}></FontAwesomeIcon></a>
                    <a href='https://www.twitter.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='me-3 social-icon  me-3' icon={faTwitter}></FontAwesomeIcon></a>
                    <a href='https://www.LinkedIn.com' target='_blank' rel="noreferrer"><FontAwesomeIcon className='me-2 social-icon  me-3' icon={faLinkedinIn}></FontAwesomeIcon></a>
                    <a href='https://mgmpowerdecor.business.site' target='_blank' rel="noreferrer"><FontAwesomeIcon className='me-2 social-icon ' icon={faGooglePlusG}></FontAwesomeIcon></a>
                </div>
                <hr />
                <div className='copyright'>
                    <div className='px-lg-0 px-sm-5'>All Rights Reserved by MGM Power & Decor @ 2022</div>
                    <div>Design by Md Zahed Iqbal</div>
                </div>
            </div>
        </div>
        
    );
}

export default Footer;