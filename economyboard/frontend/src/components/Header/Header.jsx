import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div id='section-header' className={`${styles.header} flex flex-row justify-center items-center text-4xl  py-2`}>
      {/* <span>DAYS <i className={styles.italic}>of</i> ECONOMY</span> */}
      <span>ECONOMY BOARD</span>
    </div>
  )
}

export default Header