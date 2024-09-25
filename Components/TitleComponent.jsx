import React from 'react'
import styles from '../styles/Home.module.css'

export default function TitleComponent({childrenTitle}) {
  return (
    <div className={styles.aboutUsContainerTitle}>
          <h2 className={styles.aboutTitle}>{ childrenTitle}</h2>
    </div>
  )
}
