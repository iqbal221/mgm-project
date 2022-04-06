import React from 'react'
import ChittagongProject from './ChittagongProject';
import Header from '../../Header';
import Footer from '../../Footer';
import PhoneCard from '../../PhoneCard';
import pic1 from './Chittagong-image/pic1.jpg'
import pic2 from './Chittagong-image/pic2.jpg'
import pic3 from './Chittagong-image/pic3.jpg'
import pic4 from './Chittagong-image/pic4.jpg'



const ChittagongCard = () => {
    return(  
        <div>
            <Header/>
            <div className='header1-image mb-5'>Chittagong project</div>
            <div className='row  mx-lg-5 mx-3 mb-lg-3'>
                <div className='col-sm-6 d-flex justify-content-center'>
                    <ChittagongProject image={pic1} text='text1'/>
                </div>
                <div className='col-sm-6 d-flex justify-content-center'>
                    <ChittagongProject image={pic2} text='text1'/>
                </div>
                <div className='col-sm-6 d-flex justify-content-center'>
                    <ChittagongProject image={pic3} text='text1'/>
                </div>
                <div className='col-sm-6 d-flex justify-content-center'>
                    <ChittagongProject image={pic4} text='text1'/>
                </div>
            </div> 
            <PhoneCard/>
            
            <Footer />       
        </div>
        
    );
}

export default ChittagongCard;
