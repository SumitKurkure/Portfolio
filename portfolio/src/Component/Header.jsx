import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="logo">
                    <Link className='brand-name' to={"/"}>SUMIT KURKURE</Link>
                </div>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu-btn">
                </label>
                <ul>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/contact"} >Contact</NavLink></li>
                    <li><NavLink to={"/services"} >Services</NavLink></li>
                    <li><span className="material-icons-outlined">dark_mode</span></li>
                    <li><span className="material-icons-outlined">light_mode</span></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;