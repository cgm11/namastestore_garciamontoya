import React from 'react'

import logo from '../../assets/logo.PNG';
import styles from './styles.module.css'
import Tabs from './Tabs'

const NavBar = () => {
    return(
        <div className={styles.navBarContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
            <Tabs />
        </div>
    )
}

export default NavBar