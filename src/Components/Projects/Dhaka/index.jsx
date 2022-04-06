import React from 'react'
import DhakaProject from './DhakaProject';
import Header from '../../Header';
import Footer from '../../Footer';
import PhoneCard from '../../PhoneCard';
import pic1 from './Dhaka-image/pic1.jpg'
import pic2 from './Dhaka-image/pic2.jpg'
import pic3 from './Dhaka-image/pic3.jpg'
import pic4 from './Dhaka-image/pic4.jpg'



const DhakaCard = () => {
    return(  
        <div>
            <Header/>
            <div className='header1-image mb-5'>Dhaka project</div>
            <div className='row  mx-lg-5 mx-3 mb-lg-3'>
                <div className='col-sm-6'>
                    <DhakaProject image={pic1} text='text1'/>
                </div>
                <div className='col-sm-6'>
                    <DhakaProject image={pic2} text='text1'/>
                </div>
                <div className='col-sm-6'>
                    <DhakaProject image={pic3} text='text1'/>
                </div>
                <div className='col-sm-6'>
                    <DhakaProject image={pic4} text='text1'/>
                </div>
            </div> 
            <PhoneCard/>
            
            <Footer />       
        </div>
        
    );
}

export default DhakaCard;
