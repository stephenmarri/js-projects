import React from 'react'
import style from './Services.module.css'
import PageHeader from '../../Components/PageHeader'
import SingleService from './SingleService'


const Services = () => {

    return (
        <div className={`${style.container} page_container`}>
            <PageHeader header_text={'Our Services'} />
            <SingleService name={'Teens'} name2={'Urgent Care'} imgPath={'/cc/services-cartoon.png'} />
            <SingleService name={'Pediatrics'} imgPath={'/cc/services-cartoon2.png'} />
            <SingleService name={'Regular Checkups'} name2={'Children'} imgPath={'/cc/services-cartoon3.png'} />
            <SingleService name={'ADHD'} imgPath={'/cc/services-cartoon4.png'} />
        </div>
      )

}

export default Services