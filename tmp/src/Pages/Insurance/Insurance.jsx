import React from 'react'
import './Insurance.css'
import PageHeader from '../../Components/PageHeader'

const Insurance = () => {
    return (
        <div id='insurance_container' className={'page_container'}>
            <PageHeader header_text={'Billing & Insurance'} />
            <div className='fr' id='insurance_lineOne'>
                <p>
                    We accept most major insurance companies including:
                    <ul >
                        <li>lorem</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Ipsum</li>
                        <li>Dolor</li>
                        <li>Lorem Sit</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>UMR</li>
                    </ul><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, optio. Perspiciatis veritatis recusandae eius delectus magni fugiat fuga. Tempora culpa sed neque eaque quam nisi error aperiam, quidem illum ea voluptatibus odit dolorum rerum aliquid dolorem repellat? Facilis cupiditate eius, quis sequi recusandae, laboriosam architecto fugit at amet sint eum fuga, ab iure molestiae commodi enim nostrum laborum asperiores. Odio impedit id magni laborum aliquam eveniet, provident tempore blanditiis illo, labore ipsa aperiam harum asperiores.
                </p>
                <div id='insurance_image'>
                    
                </div>
            </div>
            <br />
            <div id="other_insurance">
                
                <h2>Other Insurance</h2>
                <div>
                    <p>
                        <h3>Lorem Ipsum</h3>
                        <ul>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Lorem, ipsum.</li>
                        </ul>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis veritatis reprehenderit error eligendi corporis quasi beatae consectetur vel tempora culpa voluptas eaque sint, corrupti porro, illum ratione totam libero aut maxime omnis. Omnis molestiae laborum fugiat, aliquid non repudiandae delectus ab itaque, eligendi quidem quia eaque recusandae optio et debitis.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Insurance