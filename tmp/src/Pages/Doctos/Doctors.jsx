import React from 'react'
import style from './Doctors.module.css'
import PageHeader from '../../Components/PageHeader'
import OneDoctor from './OneDoctor'

const Doctors = () => {
  return (
    <div className={`${style.container} page_container`} >
        <PageHeader header_text={'Our Doctors'}  />
        <OneDoctor name={"Dr. Doctor One"}   imgPath={"images/doctor-female.jpg"} />
        <OneDoctor name={"Dr. Doctor Two"}   imgPath={"images/doctor-male.jpg"} />
        <OneDoctor name={"Dr. Doctor Three"} imgPath={"images/doctor-female.jpg"} />
        <OneDoctor name={"Dr. Doctor Four"}  imgPath={"images/doctor-female.jpg"} />
        <OneDoctor name={"Dr. Doctor Five"}  imgPath={"images/doctor-female.jpg"} />

    </div>
  )
}

export default Doctors