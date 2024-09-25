import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import userIcon from '../public/JoinUs/userIcon.svg'
import emailIcon from '../public/JoinUs/emailIcon.svg'
import ButtonUI from '../UI/ButtonUI'

export default function JoinUs() {
    const placeholder1 = 'Your full name'
    const placeholder2 = 'Your email'
    return (
        <>
            <div className={styles.joinUsContantContainer}>
                <div className={styles.joinUsContant}>
                    <div className={styles.joinUsContantTitle}>FIND OUT MORE INFORMATION AND JOIN US!</div>
                    <div className={styles.joinUsContantSubTitle}>Become the first user of our service! Fill out the form and get exclusive access to create a professional resume. Leave your contacts now, and we will give you bonuses upon registration!</div>
                    <div className={styles.joinUsContantInputContainer}>
                        {/* <div className={styles.joinUsContantInputContent}>
                            <input type="text" className={styles.joinUsContantInput} placeholder={placeholder1 } />
                            <Image src={userIcon} alt='userIcon'  />
                        </div>
                        <div className={styles.joinUsContantInputContent}>
                            <input type="text" className={styles.joinUsContantInput} placeholder={placeholder2 } />
                            <Image src={emailIcon} alt='emailIcon'/>
                        </div> */}
                    </div>
                    <div className={styles.joinUsContantButtonContainer}>
                        <ButtonUI  childrenButtonText={'Send contacts'}/>
                    </div>
                </div>
            </div>
        </>
  )
}
