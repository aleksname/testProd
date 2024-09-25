import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import heroImage from '../public/Hero/image.svg'
import IconsForButton from '../public/Hero/IconsForButton.svg'
import ButtonUI from '../UI/ButtonUI'

export default function Hero() {
    return (
      <div className={styles.heroContainerContent}>
        <div className={styles.heroContainer}>
            <div className={styles.heroContentContainer}>
                <div className={styles.heroContantTitle}>Your future starts here!</div>      
                <div className={styles.heroContantSubTitle}>We will help you create a resume with which you received an offer!</div>      
                <ButtonUI childrenButtonText={'Try it first'}/>
            </div>
          <Image src={heroImage} alt='heroImage' className={styles.heroContainerIcon} />
        </div>
      </div>
  )
}
