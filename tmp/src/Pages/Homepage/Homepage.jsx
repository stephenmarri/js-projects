import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='fc'>
        <Link to="/doctors">Doctors</Link>        
        <Link to="/Homepage">Hompage</Link>
        <Link to="/services">Services</Link>
        <Link to="/insurance">Insurance</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/contact">Contact Us</Link>
    </div>
  )
}

export default Homepage