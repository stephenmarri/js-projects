import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'


const Homepage = () => {
  return (
    <>
      <div id='home_container' className={'page_container'}>
        <div id='home__lineOne'>
          <div id='image_here' >
          </div>
          <div className="bg-text">
            <h1>Pediatrics and Teen Care Center</h1>
            <br />
            <h4>1281, West Tunnel Boulevard <br />HOUMA, (101) 202-3003</h4>
          </div>
        </div>

        <div id="lineTwo">
          <br />
          <h2>About Us</h2>
          <p>Our mission is to provide the highest quality evidence-based healthcare in a welcoming, caring and unrushed environment to maximize the potential of every child.</p>
          <br />
        </div>
        <div id="lineTwo">
          <div>
            <h2>Where our patients come from</h2>
            <p>
              We are conveniently located at 1281 West Tunnel Boulevard, Houma, LA 70360. We are proud and humbled to serve our patients living in the metroplex and beyond including Irving, Coppell, Dallas, Arlington, Euless, Lewisville, Flower Mound, Farmers Branch, Carrollton, The Colony, Grapevine, Bedford, Colleyville, Double Oak, Addison, Southlake, Fort Worth, Keller, Prosper, and Argyle.
              We hope you will consider us next time you are searching for a "Pediatrician near me"!</p>
          </div>
          <div>

          </div>
        </div>
        <div id="lineTwo">
          <br />
          <h1>A Personalized Approach</h1>
          <p>
            A Personalized Approach
            Our pediatrician partners with children and their families to develop personalized health treatment approaches that best aligns with your values and comfort. We believe in a compassionate approach and strive to create a welcoming and supportive environment. Our goal is to build a long-lasting relationship with your family and provide the best possible care. Families visiting our pediatric clinic appreciate our <br />
          </p>
        </div>
        
        <div id="lineThree">

        </div>



      </div>
    </>
  )
}

export default Homepage