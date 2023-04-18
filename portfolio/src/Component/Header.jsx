import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="logo">
                    <Link className='brand-name' to={"/"}>SumitKurkure</Link>
                </div>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu-btn">
                </label>
                <ul>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"} >Contact</Link></li>
                    <li><Link to={"/services"} >Services</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;