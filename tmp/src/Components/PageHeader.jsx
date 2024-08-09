import React from 'react'
import style from '../smaller.module.css'

const PageHeader = ({header_text}) => {

  return (
    <div className={style.pageheader_container}>{header_text}</div>
  )
}

export default PageHeader