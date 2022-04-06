
import React from 'react'
import pic from './Home-image/pic.jpg'



const ArticleCard = () =>{

        return(            
            <div className='row mt-5 py-5 px-2 articleCard'>
                <div className='col-sm-6  my-auto'>
                    <h2 className='text-success ps-3 fw-bold'>About Interior Design</h2>
                    <p className='p-3 fs-5'>
                        Interior design is the art and science of enhancing the interior of a building to achieve a healthier and more aesthetically pleasing environment for the people using the space. An interior designer is someone who plans, researches, coordinates, and manages such enhancement projects. Interior design is a multifaceted profession that includes conceptual development, space planning, site inspections, programming, research, communicating with the stakeholders of a project, construction management, and execution of the design.
                        
                    </p>
                    
                </div>
                <div className='col-sm-6 '>
                    <img src={pic} alt='...'/>
                </div> 
                
            </div>        
        );
    }



export default ArticleCard;
