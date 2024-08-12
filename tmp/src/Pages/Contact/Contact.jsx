import React from 'react'
import './Contact.css'
import PageHeader from '../../Components/PageHeader'

const Contact = () => {
    return (
        <div id='contact_container' className={'page_container'}>
            <PageHeader header_text={'Come Visit Us'} />
            <div id='lineOne' className='fr'>
                <img src="hosp2.png" alt="" />
            </div>
            <div id='lineTwo' className='fr'>
                <div id='address'>
                    <h2>Our Address</h2>
                    <br />
                    <p>
                        1281 West Tunnel Blvd <br />
                        Houma, Louisiana <br />
                        76030
                    </p>
                    <br />
                    <p><b>Call Us </b> <a href="tel:+11012023003">(101) 202-3003</a></p>
                    <p><b>Email Us </b> <a href="mailto:exmaple@domain.com">exmaple@domain.com</a></p>
                    <p><b>Fax Us At </b> <a href="mailto:exmaple@domain.com">exmaple@domain.com</a></p>
                </div>                
                <div id='hours'>
                    <h2>Hours Of Operation</h2>
                    <br />
                    <div><span>Monday</span><span>0800 &nbsp; to &nbsp; 1700</span></div>
                    <div><span>Tuenday</span><span>0800 &nbsp; to &nbsp; 1700</span></div>
                    <div><span>Wednesday</span><span>0800 &nbsp; to &nbsp; 1700</span></div>
                    <div><span>Thursday</span><span>0800 &nbsp; to &nbsp; 1700</span></div>
                    <div><span>Friday</span><span>0800 &nbsp; to &nbsp; 1700</span></div>
                    <div><span>Saturday</span><span>0800 &nbsp; to &nbsp; 1200</span></div>
                    <div><span>Sunday</span><span>Closed</span></div>
                </div>

            </div>
            <div id='lineThree'>
                <h2>Find Us on Google Maps</h2>
                <br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13877.01181078537!2d-90.75536038261718!3d29.596332099999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8621055269d3d055%3A0x22b0451730bec07c!2sTerrebonne%20Pediatric%20%26%20Teen%20Clinic!5e0!3m2!1sen!2sus!4v1723218679586!5m2!1sen!2sus" width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

        </div>
    )
}

export default Contact