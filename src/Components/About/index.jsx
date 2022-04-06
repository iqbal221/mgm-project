import React from 'react'
import image1 from './About-image/image1.jpg'
import image2 from './About-image/image2.jpg'
import Footer from '../Footer'
import PhoneCard from '../PhoneCard'
import Header from '../Header'



const About = () => {
    return(
        <div>
            <Header/>
            <div className='header1-image '>About Us</div>
                <div className='ourTeam mt-5 mx-5'>
                    <hr className='text-success fw-bold'/>
                    <div className='row about-us '>
                        <div className='col-sm-6'>
                            <h2 className='fw-bold text-info'>Mission</h2>
                            <p className='fs-5 mt-4 text-secondary'>We exist to create the beautiful design  which our clients experience their lives. We want to give fantastic feeling our honored client. They feel completely home environment feelings. It is our privilege and our promise to design beautiful spaces within which to experience emotion and life.</p>
                        </div>

                        <div className='card col-sm-6 mt-2 '>
                            <img  src={image1} alt='...'/>
                            <p className='fs-3 py-2 text-success fw-bold text-center'>Proprietor</p>
                        </div>
                    </div>

                    <div className='row about-us my-5'>
                        <hr className='text-success fw-bold'/>
                        <div className='card col-sm-6 my-2 text-center'>
                            <img src={image2} className='m-auto' alt='...'/>
                            <p className='fs-3 py-2 text-success fw-bold text-center'>Site Manager</p>
                        </div>

                        <div className='col-sm-6  '>
                            <h2 className='fw-bold text-info mt-5 '>vission</h2>
                            <p className='fs-5 mt-3 text-secondary'>Our vission is clear to provide fantastic design according to our honored client requirements Which will keep our customer experiences alive.</p>
                        </div>
                    </div>
                    
                </div>
                <PhoneCard/>
                <Footer/>
         </div>
    );
}

export default About;
