import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactCard = (props) => {
    return(
        <div className="card px-lg-1 px-sm-1 mb-sm-0 mb-4 mt-3 ContactCard" >
            <div className="card-body text-center">
                <h2 className="card-title fw-bold mt-5 mb-5">{props.title}</h2>
                <div><FontAwesomeIcon className=' fs-1 mb-5 text-warning ' icon={props.icon}/></div>
                <div className="card-text text-secondary ">
                    <p className='px-5 mx-1 fs-5 '>{props.text}</p>  
                </div>
                
            </div>
        </div>
    )
}

export default ContactCard;