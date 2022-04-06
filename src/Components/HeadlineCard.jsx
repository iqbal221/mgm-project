import React from 'react'

const HeadlineCard = (props) => {
    return (
        <div>
            <div className='text-center text-primary mt-4 headline'>
                <h2 className=' fw-bold mt-5'>{props.text}</h2>
                <p className='underline'></p>
            </div>
            
        </div>
        
    )
}

export default HeadlineCard;