import React from 'react'
import style from './Doctors.module.css'

const OneDoctor = ({name, designation = "Senior Pediatrician, MBBS, MD", imgPath}) => {

  return (
    <div className={style.one_doctor} >
        <img src={imgPath} alt="doc" />
        <div>
            <p className={style.title}>{name}</p>
            <p className={style.designation}>{designation}</p>
            <p className={style.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error veniam dicta dolorem amet impedit velit tempore vel, reiciendis ad quos eius non nobis animi laborum dolor exercitationem aut eaque aspernatur!</p>
        </div>
    </div>
  )
}

export default OneDoctor