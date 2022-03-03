import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

import styles from './styles.module.css'

const CartWidget = () => {
    return (
        <div className={styles.iconContainer}>
            <FaShoppingCart />
        </div>
    )
}

export default CartWidget