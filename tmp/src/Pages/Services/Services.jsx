import React from 'react'
import style from './Services.module.css'
import PageHeader from '../../Components/PageHeader'
import SingleService from './SingleService'


const Services = () => {

    return (
        <div className={`${style.container} page_container`}>
            <PageHeader header_text={'Our Services'} />
            <SingleService name={'Asthma'} name2={'Urgent Care'} imgPath={'images/serv4.jpg'} />
            <SingleService name={'ADHD'} imgPath={'images/serv2.jpg'} />
            <SingleService name={'Asthma'} name2={'Laboratory'} imgPath={'images/serv3.jpg'} />
            <SingleService name={'ADHD'} imgPath={'images/serv1.jpg'} />
        </div>
      )

}

export default Services