import React from 'react'
import logo from './Home/Home-image/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header fixed-top'>
            
                <div className='row contact bg-success '>
                    <div className='col-sm-12 col-12  d-flex justify-content-center align-items-center '>
                        <div><FontAwesomeIcon className='text-white me-2 ms-lg-0 ms-sm-4' icon={faPhone}/></div>
                        <div className='phone p-2'>+88 01818 909220</div>
                    </div>
                </div>
            
            

                <nav className="navbar navbar-expand-lg navbar-light bg-white  py-lg-3 px-lg-4 px-sm-2 ">
                    <div class="container-fluid">
                        <div className=''>
                            <NavLink className="d-flex align-items-center navbar-brand text-success fw-bold fs-5 " to="/">
                                <img className='logo' src={logo} alt='...' />
                                <div>
                                    <div className='companyName'>MGM POWER & DECOR</div>
                                    <div className='slogan '>Makes dreams come true</div>
                                </div>
                            </NavLink>
                        </div>
                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            
                                <li className="nav-item dropdown me-4">
                                    <NavLink className="nav-link  fw-bold " to="/" >
                                        Home
                                    </NavLink>
                            
                                </li>
                                
                                <li className="nav-item dropdown dropdown-dark me-4">
                                    <NavLink className="nav-link  fw-bold dropdown-toggle-dark" to="/ChittagongCard" >
                                        Projects
                                    </NavLink>
                                
                                </li>

                                <li className="nav-item dropdown me-4">
                                    <NavLink className="nav-link  fw-bold" to="/About" >
                                        About
                                    </NavLink>
                                
                                </li>

                                <li className="nav-item dropdown me-4">
                                    <NavLink className="nav-link  fw-bold " to="/Contact" >
                                        Contact
                                    </NavLink>
                                
                                </li>

                            </ul>
                    
                        </div>
                    </div>
                </nav>
            
            
            
        </header>
    )
}

export default Header;