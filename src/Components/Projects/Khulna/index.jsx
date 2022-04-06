import React from 'react'
import KhulnaProject from './KhulnaProject';
import Header from '../../Header';
import Footer from '../../Footer';
import PhoneCard from '../../PhoneCard';
import pic1 from './Khulna-image/pic1.jpg'
import pic2 from './Khulna-image/pic2.jpg'
import pic3 from './Khulna-image/pic3.jpg'
import pic4 from './Khulna-image/pic4.jpg'



const KhulnaCard = () => {
    return(  
        <div>
            <Header/>
            <div className='header1-image mb-5'>Khulna project</div>
            <div className='row  mx-lg-5 mx-3 mb-lg-3'>
                <div className='col-sm-6 d-flex justify-content-center'>
                    <KhulnaProject image={pic1} text='text1'/>
                </div>
                <div className='col-sm-6 d-flex justify-content-center'>
                    <KhulnaProject image={pic2} text='text1'/>
                </div>
                <div className='col-sm-6 d-flex justify-content-center'>
                    <KhulnaProject image={pic3} text='text1'/>
                </div>
                <div className='col-sm-6 d-flex justify-content-center'>
                    <KhulnaProject image={pic4} text='text1'/>
                </div>
            </div> 
            <PhoneCard/>
            
            <Footer />       
        </div>
        
    );
}

export default KhulnaCard;
