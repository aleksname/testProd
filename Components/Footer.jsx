import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import InstagramIcon from '../public/Footer/InstagramIcon.svg'
import TwitterIcon from '../public/Footer/TwitterIcon.svg'
import FBIcon from '../public/Footer/FBIcon.svg'

export default function Footer() {
    return (
        <>
            <div className={styles.footerContantContainer}>
                <div className={styles.footerContant}>
                    <div className={styles.footerContantElementContainer}>
                        <div className={styles.footerContantElement}>
                            <div className={styles.footerContantElementTitle}>FEATURES</div>
                            <div className={styles.footerContantElementLinkBlock}>
                                <a href="#" className={styles.footerContantElementLink}>About us</a>
                            </div>
                            <div className={styles.footerContantElementLinkBlock}>
                                <a href="#" className={styles.footerContantElementLink}>Our advantages</a>
                            </div>
                        </div>

                        <div className={styles.footerContantElement}>
                            <div className={styles.footerContantElementTitle}>RESOURCES</div>
                            <div className={styles.footerContantElementLinkBlock}>
                                <a href="#" className={styles.footerContantElementLink}>FAQ</a>
                            </div>
                        </div>

                        <div className={styles.footerContantElement}>
                            <div className={styles.footerContantElementTitle}>COMPANY</div>
                            <div className={styles.footerContantElementLinkBlock}>
                                <a href="#" className={styles.footerContantElementLink}>Privacy Policy</a>
                            </div>
                             <div className={styles.footerContantElementLinkBlock}>
                                <a href="#" className={styles.footerContantElementLink}>Terms of Service</a>
                            </div>
                        </div>

                        <div className={styles.footerContantElement}>
                            <div className={styles.footerContantElementTitle}>FOLLOW US</div>
                            
                            <div className={styles.footerContantElementMedia}>
                                <div className={styles.footerContantElementLinkBlockMedia}>
                                    <Link href='#'>
                                        <Image src={TwitterIcon} alt='TwitterIcon' className={styles.footerContantElementLinkMedia}></Image>
                                    </Link>
                                </div>
                                <div className={styles.footerContantElementLinkBlockMedia}>
                                    <Link href='#'>
                                        <Image src={FBIcon} alt='FBIcon' className={styles.footerContantElementLinkMedia}></Image>
                                    </Link>
                                </div>
                                <div className={styles.footerContantElementLinkBlockMedia}>
                                    <Link href='#'>
                                        <Image src={InstagramIcon} alt='InstagramIcon' className={styles.footerContantElementLinkMedia}></Image>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.footerContantElementCreativeContainer}>
                        <div className="">2024 Creativity Inc. All rights reserved </div>
                    </div>
                </div>
            </div>
        </>
  )
}
