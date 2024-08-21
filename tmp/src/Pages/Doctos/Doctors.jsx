import React from 'react'
import style from './Doctors.module.css'
import PageHeader from '../../Components/PageHeader'
import OneDoctor from './OneDoctor'

const Doctors = () => {
  return (
    <div className={`${style.container} page_container`} >
        <PageHeader header_text={'Our Doctors'}  />
        <OneDoctor name={"Dr. Doctor One"}   imgPath={"cc/doctor.png"} />
        <OneDoctor name={"Dr. Doctor Two"}   imgPath={"cc/doctor.png"} />
        <OneDoctor name={"Dr. Doctor Three"} imgPath={"cc/doctor.png"} />
        <OneDoctor name={"Dr. Doctor Four"}  imgPath={"cc/doctor.png"} />
        <OneDoctor name={"Dr. Doctor Five"}  imgPath={"cc/doctor.png"} />

    </div>
  )
}

export default Doctors