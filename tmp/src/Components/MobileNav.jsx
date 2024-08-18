import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'


const MobileNav = () => {


    const [showMenu, setShowMenu] = useState(true);
    const isMobile = window.screen.width < 1000

    const clickMobileMenu = () => {
        console.log(window.screen.width)
        if (isMobile) setShowMenu(!showMenu)
    }

    useEffect(() => {
        if (isMobile) {
            setShowMenu(false)
        }
    }, [])
    return (
        <>
            {
                isMobile ?
                    <div id="mobile_nav" >
                        <nav className='fr'>
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
                                to="/contact">Contact Us &nbsp;</NavLink>
                        </nav>
                    </div>
                    : null
            }

        </>
    )
}

export default MobileNav