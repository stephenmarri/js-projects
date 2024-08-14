import React, { useState } from 'react'
import style from './Navbar.module.css'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(true);

    const clickMobileMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div id='navbar' className={style.container}>
            <div className={style.lineOne}>
                <div className={style.title_and_logo}>
                    <div className={style.page_logo}>

                    </div>

                    <h2>Terrebone<br />Pediatrics</h2>
                    <div onClick={clickMobileMenu} id='mobile_menu' style={{ backgroundImage: `url('/icons/bars.svg')` }}>
                    </div>
                </div>
                <div id='navbar_appointment'>
                    <a className={style.call_us} href="tel:123 456 7890">Call Us</a>
                    <Link to="/contact">Request Appointment</Link>
                </div>

            </div>
            {
                showMenu ?

                    <div  id="nav_links" className={style.lineTwo}>
                        <nav>
                            <NavLink
                                className={({ isActive }) => isActive ? "active" : ""}
                                to="/home">Home</NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "active" : ""}
                                to="/doctors">Doctors</NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "active" : ""}
                                to="/services">Services</NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "active" : ""}
                                to="/insurance">Insurance</NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "active" : ""}
                                to="/resources">Resources</NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "active" : ""}
                                to="/contact">Contact Us</NavLink>
                        </nav>
                    </div>
: null } 
        </div>
    )
}

export default Navbar