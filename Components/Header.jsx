import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Logo from '../public/Logotipe/Logo.svg'
import Link from 'next/link'
export default function Header() {
  return (
    <div className={styles.headerContainer}>
          <div className={styles.headerLogotipeContainer}>
              <Link href='/'>
                  <Image src={Logo} alt='Logotipe' />
              </Link>
              <div className={styles.headerNavigationContainer}>
                <nav className={styles.headerNav}>
                    <ul className={styles.headerUl}>
                        <li className={styles.headerli}><a href="/advantages" className={styles.headerLink}> Advantages</a></li>
                        <li className={styles.headerli}><a href="/about" className={styles.headerLink}> About us</a></li>
                        <li className={styles.headerli}><a href="/faq" className={styles.headerLink}> FAQ</a></li>
                    </ul>
                </nav>
                <div className={styles.headerButtonContainer}>
                    <button className={styles.headerButton}>Join us</button>
                </div>
                  
              </div>
          </div>      
    </div>
  )
}
