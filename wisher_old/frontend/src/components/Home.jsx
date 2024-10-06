import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='home_container'>
        <h1><Link to={"/enter"}>Wisher</Link></h1>

        {/* <div>
            <Link to={"/enter"}>Enter</Link>
            <Link to={"/singup"}>Singup</Link>

        </div> */}
        
    </div>
  )
}

export default Home