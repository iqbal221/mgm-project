import React from 'react'
import { NavLink } from 'react-router-dom';


const ProjectCard = (props) => {
    return(            
        <div className="card projectCard mb-4" >
            <img src={props.pic} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title my-3 fw-bold ">{props.text}</h3>
                <NavLink to={props.link} className="btn btn-warning px-4">Details</NavLink>
            </div>
        </div>        
    );
}

export default ProjectCard;
