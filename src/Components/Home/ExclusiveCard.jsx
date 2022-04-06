import React from 'react'



const ExclusiveCard = (props) => {
    return(            
        <div className="card  exclusiveCard mb-lg-4 mb-sm-4 mb-4 " >
            <img src={props.pic} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title fw-bold text-center text-success my-3 ">{props.text}</h3>
            </div>
        </div>        
    );
}

export default ExclusiveCard;
