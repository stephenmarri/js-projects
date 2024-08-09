import React from 'react'
import style from './Navbar.module.css'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div id='navbar' className={style.container}>
            <div className={style.lineOne}>
                <h2>Terrebone<br/>Pediatrics</h2>
                <div>
                    <a className={style.call_us} href="tel:123 456 7890">Call Us</a>
                    <Link to="/contact">Request Appointment</Link>
                </div>
            </div>
            <div id="nav_links" className={style.lineTwo}>
                <nav>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/homepage">Home</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/doctors">Doctors</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/services">Services</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/insurance">Insurance</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/resources">Resources</NavLink>
                    <NavLink
                        className={({isActive}) => isActive ? "active" : ""}
                        to="/contact">Contact Us</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Navbar