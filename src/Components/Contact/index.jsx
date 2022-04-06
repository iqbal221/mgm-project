import React from 'react'
import HeadlineCard from '../HeadlineCard'
import Header from '../Header'
import PhoneCard from '../PhoneCard'
import Footer from '../Footer'
import ContactCard from './ContactCard'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import ContactFormCard from './ContactFormCard'
import image1 from './Contact-image/image1.jpg'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import MapContainer from './GoogleMap'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_qcv71a3', 'template_plzj4su', form.current, 'user_iT4rjjIubf9xtNhDpO2CL')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        alert('Send Email');
    };

    return(
        <div className='body'>
            <Header />
            <div className='header1-image'>Contact Us</div>
            <div className='contactUs'>
                <div className='row mx-lg-5 mx-sm-3 mx-3 '>
                    <HeadlineCard text='Contact Us'/>
                    <div className='col-sm-4  '>
                        <ContactCard title='Meet with us' text='Bhatiary Uttor Bazar, Jamuna Bank Building,
                            , Bhatiary, Sitakunda, Chattogram-4315' icon={faLocationDot} />
                    </div>
                            
                    <div className='col-sm-4  '>
                        <ContactCard title='Email with us' text='mgmpoweranddecor@gmail.com' icon={faEnvelope} />
                    </div>

                    <div className='col-sm-4  '>
                        <ContactCard title='Phone with us' text='+8801818909220' icon={faPhone}/>
                    </div>    
                </div>
           </div>
            
            

            <div className='row mx-sm-5 lg-mx-5 mx-3 my-5 text-center'>
                
                <div className='col-sm-6 mb-3 mt-5 contactForm' >
                    <h2 className='text-primary text-center fw-bold mb-3'>Get In Touch</h2>
                  

                    <form ref={form} onSubmit={sendEmail}> 
                            
                        <ContactFormCard  type={'text'} Name={'name'} id={'name'} placeholder={'Enter your name'} />
                        <ContactFormCard   type={'email'} Name={'email'} id={'email'} placeholder={'Enter valid email'} />
                        <ContactFormCard  type={'subject'} Name={'subject'} id={'subject'} placeholder={'Enter your subject'} />

                        <div>
                            <textarea name='message' id='textArea' rows='6' placeholder='Message here' className='form-control p-3' required></textarea>
                        </div>

                        <button type='submit' className='btn btn-primary px-4 my-3 contact-btn'>Send Message</button>
                    </form>

                </div> 
                <div className='col-sm-6 my-auto contact-image'>
                    <img src={image1} alt='...'/>
                </div>

           
            </div>
            <div className='mx-lg-5 mx-4 mb-5'>
                <h3 className='text-center text-danger fw-bold mb-5'>Google Maps</h3>
                <MapContainer />
            </div>
            
            <PhoneCard />
            <Footer />
        </div>
        
    )
}

export default Contact;