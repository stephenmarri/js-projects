import React from 'react'
import './Resources.css'
import PageHeader from '../../Components/PageHeader'

const Resources = () => {
    return (
        <div id='resources_container' className={'page_container'}>
            <PageHeader header_text={'Patient Education'} />

            <div id='forms_container' className='fr'>
                <div>
                    <h2>Downloadable Forms</h2>
                    <p>
                        Lorem ipsum dolor sit <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing.<br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing <br />
                        Lorem ipsum dolor sit amet consec<br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                    </p>
                </div>
                <div>
                    <h2>New Patient Medical Forms</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ad.<br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /><br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing.<br />
                        Lorem ipsum dolor, sit amet consec
                    </p>
                </div>
            </div>

            <div id='video_resources'>
                <br /><br />
                <PageHeader header_text={'Video Material'} />

                <div className='fr'>
                    <iframe
                        src="https://www.youtube.com/embed/K5lq-kJxioA?si=kwjJOk-H6GGGZWPO"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
                <br /><br />
                <div className='fr'>
                    <iframe
                        src="https://www.youtube.com/embed/g11wOz6I8fg?si=5jD2LaQalo0oHeNf"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                </div>
            </div>
        </div>
    )
}

export default Resources