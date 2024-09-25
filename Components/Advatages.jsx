import React from 'react'
import styles from '../styles/Home.module.css'
import TitleComponent from './TitleComponent'
import Image from 'next/image'

import closk from '../public/Advantages/closk.svg'
import document from '../public/Advantages/document.svg'
import aiFile from '../public/Advantages/aiFile.svg'

export default function Advatages() {
    return (
        <>
            <div className={styles.advatagesContantContainer}>
                <TitleComponent childrenTitle={'OUR ADVANTAGES'} />
                <div className={styles.advatagesContanElementContainer}>
                    <div className={styles.advatagesContantElement}>
                        <Image src={closk} alt='closk' className={styles.advatagesElementIcon } />
                        <div className={styles.advatagesElementTitle}>Save time</div>
                        <div className={styles.advatagesElementSubTitle}>Create a resume in a matter of minutes thanks to an easy-to-understand interface. No more spending hours on formatting and structuring.</div>
                    </div>

                    <div className={styles.advatagesContantElement}>
                        <Image src={document} alt='document' className={styles.advatagesElementIcon }/>
                        <div className={styles.advatagesElementTitle}>Resume creation</div>
                        <div className={styles.advatagesElementSubTitle}>Create professional resumes easily, create modern and industry-specific resumes.</div>
                    </div>

                    <div className={styles.advatagesContantElement}>
                        <Image src={aiFile} alt='aiFile' className={styles.advatagesElementIcon }/>
                        <div className={styles.advatagesElementTitle}>AI analysis</div>
                        <div className={styles.advatagesElementSubTitle}>Get a detailed analysis of your resume using artificial intelligence, which will tell you what you can improve to increase your chances of success.</div>
                    </div>
                </div>
            </div>    
        </>
    )
}
