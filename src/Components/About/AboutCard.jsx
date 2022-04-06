import React from 'react'

const AboutCard = (props) => {
    return(
        <div className='aboutCard mt-3 mx-lg-5 mx-3 d-flex justify-content-center'>
            <img src={props.image} alt='...'/>
            <p className='fs-5 py-2 text-success fw-bold text-center'>{props.text}</p>
        </div>
    )
}

export default AboutCard;