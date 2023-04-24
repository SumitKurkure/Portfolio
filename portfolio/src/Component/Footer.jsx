import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="info-div">
                <span className='logo'>Sumit Kurkure</span>
                <span className='email'>sumitkurkure@gmail.com</span>
                <span className='phone'>+91-9637150799</span>
            </div>
            <div className="head-menu">
                <nav>
                    <ul>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/contact"} >Contact</NavLink></li>
                        <li><NavLink to={"/services"} >Services</NavLink></li>
                        <li><NavLink to={"/schedule"} >ScheduleCall</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="head-menu">
                <nav>
                    <ul>
                        <li>
                            <Link >
                                <i class="fa-brands fa-facebook" style={{ color: "#005eff" }}></i>
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <i class="fa-brands fa-youtube" style={{ color: "#ff0000" }}></i>
                                Youtube
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <i class="fa-brands fa-instagram" style={{ color: "#e51fff" }}></i>
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <i class="fa-brands fa-twitter" style={{ color: "#3884ff" }}></i>
                                Twitter
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Footer;