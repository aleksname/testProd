import React from 'react'
import styles from '../styles/Home.module.css'

export default function ButtonUI({childrenButtonText}) {
  return (
    <div className={styles.heroContantButtonContainer}>
          <button className={styles.heroContantButton}>{ childrenButtonText}</button>
    </div>
  )
}
