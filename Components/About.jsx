import React from 'react'
import absoluteIcon from '../public/about-us/aboutIcon.svg'
import absoluteIcon2 from '../public/about-us/aboutIcon2.svg'
import absoluteIcon3 from '../public/about-us/aboutIcon3.svg'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import TitleComponent from './TitleComponent';

export default function About() {
  return (
    <div className={styles.aboutUsContainer}>
          <TitleComponent childrenTitle={'ABOUT'}/>
            <div className={styles.aboutContenContainert}>
                <Image src={absoluteIcon} alt="about image" className={styles.aboutConten} />
                <div className={styles.acoutContent}>
                    <span className={styles.acoutContentSPAN}>W</span>e provide a unique and comprehensive online service for creating a resume and finding a job in the IT field. Our platform helps job seekers in the IT industry present their skills and experience in the best possible light, and makes it easy and efficient to search for suitable vacancies.
                </div>
           </div>
        <div className={styles.aboutContenSubContainert}>
            <div className={styles.aboutContenContainert}>
                <div className={styles.acoutContent}>
                    <span className={styles.acoutContentSPAN}>O</span>ur platform uses advanced technologies and tools to ensure the high performance and reliability of our service. Our platform is optimized for fast page loading and easy navigation for a smooth user experience. We also guarantee the safety of your personal data and ensure the confidentiality of all information.
                </div>
              <Image src={absoluteIcon2} alt="about image" className={ styles.aboutConten} />
            </div>
      </div>
             <div className={styles.aboutContenContainert}>
                <Image src={absoluteIcon3} alt="about image" className={styles.aboutConten} />
                <div className={styles.acoutContent}>
                    <span className={styles.acoutContentSPAN}>W</span>e are proud that our online service is becoming a reliable partner for those who seek to successfully develop in the IT field. Whether you are a beginner or a seasoned professional, our platform will provide you with all the tools and resources you need to further develop and succeed in your career.
                </div>
           </div>
        </div>
  )
}
