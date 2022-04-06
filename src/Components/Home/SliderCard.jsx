import React from 'react'
import image1 from './Home-image/image1.jpg';
import image2 from './Home-image/image2.jpg';
import image3 from './Home-image/image3.jpg';
// import image4 from './Home-image/image4.jpg';
// import image5 from './Home-image/image5.jpg';


const SliderCard = (props) => {
    return(
        <div>
            {/* <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.image1} className="m-auto d-block  " alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={props.image2} className="m-auto d-block" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={props.image3} className="m-auto d-block" alt="..."/>
                    </div>
                
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon color-info" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                <div className="carousel-inner">
                    <div className="carousel-item  active">
                        <img src={image1} className="d-block w-100 " alt="..."/>
                        <div className="carousel-caption  d-md-block">
                            <h1 className=' display-3 text-primary fw-bold'>MAKES DREAMS COME TRUE</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption  d-md-block">
                            <h1 className=' display-3 text-warning fw-bold'>MAKES DREAMS COME TRUE</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption  d-md-block">
                            <h1 className=' display-3 text-danger fw-bold'>MAKES DREAMS COME TRUE</h1>
                        </div>
                    </div>
                    
                </div>
               
            </div>
        </div>
        
    );
}

export default SliderCard;