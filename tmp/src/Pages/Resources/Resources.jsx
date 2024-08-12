import React from 'react'
import './Resources.css'
import PageHeader from '../../Components/PageHeader'

const Resources = () => {
    return (
        <div id='resources_container' className={'page_container'}>
            <PageHeader header_text={'Available Forms'} />

            <div id='forms_container' className='fr'>
                <div>
                    <h3>Downloadable Forms</h3>
                    <p>
                        <ul>

                            <li>New Patient Form </li>
                            <li>New Patient Form Older </li>
                            <li>New Patient Form </li>
                            <li>Old Patient Form Older</li>
                            <li>Old Patient Form Older</li>
                        </ul>

                    </p>
                </div>
                <div>
                    <h3>New Patient Medical Forms</h3>
                    <p>
                        <ul>

                            <li>New Patient Form </li>
                            <li>New Patient Form Older </li>
                            <li>New Patient Form </li>
                            <li>Old Patient Form Older</li>
                            <li>Old Patient Form Older</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h3>New Patient Medical Forms</h3>
                    <p>
                        <ul>

                            <li>New Patient Form </li>
                            <li>New Patient Form Older </li>
                            <li>New Patient Form </li>
                            <li>Old Patient Form Older</li>
                            <li>Old Patient Form Older</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h3>New Patient Medical Forms</h3>
                    <p>
                        <ul>

                            <li>New Patient Form </li>
                            <li>New Patient Form Older </li>
                            <li>New Patient Form </li>
                            <li>Old Patient Form Older</li>
                            <li>Old Patient Form Older</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h3>New Patient Medical Forms</h3>
                    <p>
                        <ul>

                            <li>New Patient Form </li>
                            <li>New Patient Form Older </li>
                            <li>New Patient Form </li>
                            <li>Old Patient Form Older</li>
                            <li>Old Patient Form Older</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div id='video_resources' className=''>
                <br /><br />
                <PageHeader header_text={'Blog & Resources'} />

                <div className='fr row-cont'>
                    <div className='fr frame'>
                        <iframe
                            src="https://www.youtube.com/embed/XMcab1MFaLc?si=K6WQ2zz8edMuMssR"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                    <br /><br />
                    <div className='fr frame'>
                        <iframe
                            src="https://www.youtube.com/embed/g11wOz6I8fg?si=5jD2LaQalo0oHeNf"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </div>
                <br /><br />
                <div className='fr row-cont'>
                    <div className='fr frame'>
                        <iframe
                            src="https://www.youtube.com/embed/3PmVJQUCm4E?si=wkQEajoRtW9VR_RJ"
                            title="YouTube video player"
                            frameBorder="0"
                            controls="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                    <br /><br />
                    <div className='fr frame'>
                        <iframe
                            src="https://www.youtube.com/embed/K5lq-kJxioA?si=kwjJOk-H6GGGZWPO"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources