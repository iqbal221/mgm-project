import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ExclusiveCard from './ExclusiveCard'
import ProjectCard from './ProjectCard'
import Headline from '../HeadlineCard'
import PhoneCard from '../PhoneCard'
import pic1 from './Home-image/pic1.jpg'
import pic2 from './Home-image/pic2.jpg'
import pic3 from './Home-image/pic3.jpg'
import pic4 from './Home-image/pic4.jpg'
import pic5 from './Home-image/pic5.jpg'
import pic6 from './Home-image/pic6.jpg'
import pic7 from './Home-image/pic7.jpg'
import pic8 from './Home-image/pic8.jpg'
import pic9 from './Home-image/pic9.jpg'
import ArticleCard from './ArticleCard'
import SliderCard from './SliderCard'

const Home = () => {
    return(
        <div className='body'>
            
            <Header/>
            <div>
                <SliderCard/>
            </div>

            <div className='row mx-lg-5 mx-3 mt-5 exclusive-card'>
                <Headline text='Our Exclusive Work'/>
                <div className='col-sm-4'>
                    < ExclusiveCard pic={pic1} text='Exclusive Design 1'/>
                </div>

                <div className='col-sm-4 '>
                    < ExclusiveCard pic={pic2} text='Exclusive Design 2'/>
                </div>

                <div className='col-sm-4 '>
                    < ExclusiveCard pic={pic3} text='Exclusive Design 3' />
                </div>
            </div>

            <div className='mt-5 mx-lg-5 mx-4 article'>
                <ArticleCard/>
            </div>

            <div className='row mx-lg-5 mx-3 py-4'>
                <Headline id='Projects' text='Our Projects'/>
                <div className='col-sm-4'>
                    < ProjectCard pic={pic4} text='Chattogram project' link='/ChittagongCard' />
                </div>

                <div className='col-sm-4 '>
                    < ProjectCard pic={pic5} text='Dhaka project' link='/DhakaCard'/>
                </div>

                <div className='col-sm-4 '>
                    < ProjectCard pic={pic6} text='Khulna project'link='/KhulnaCard'/>
                </div>

                <div className='col-sm-4 '>
                    < ProjectCard pic={pic7} text='Sylhet project' link='/SylhetCard'/>
                </div>

                <div className='col-sm-4 '>
                    < ProjectCard pic={pic8} text='Rajshahi project' link='/RajshahiCard'/>
                </div>

                <div className='col-sm-4 '>
                    < ProjectCard pic={pic9} text='Comilla project' link='/ComillaCard'/>
                </div>

            </div>
            
            
            <PhoneCard/>
            
            <Footer />
       </div>       
        
    );
}

export default Home;