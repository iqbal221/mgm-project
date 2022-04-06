import React from 'react'

const ContactFormCard = (props) => {
    return(
        <div className='my-2 contactFormCard'>
            <input type={props.type} name={props.Name} id={props.id} placeholder={props.placeholder} className='form-control p-3' required />
        </div>
    )
}

export default ContactFormCard;