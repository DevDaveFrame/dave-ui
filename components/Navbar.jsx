import React from 'react';
import styles from './Navbar.module.scss'

function Navbar({}) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.items}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>About</li>
        <li className={styles.item}>News</li>
        <li className={styles.item}>Content</li>
      </ul>
    </nav>
  )
}

export default Navbar;
