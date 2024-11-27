import React from 'react'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <div id='section-navigation' className={`${styles.navigation} fr`}>
        <div className={`${styles.nav_item} fr`}>Home</div>
        <div className={`${styles.nav_item} fr`}>Add Entry</div>
        <div className={`${styles.nav_item} fr ${styles.selected}`}>Transactions</div>

    </div>
  )
}

export default Navigation