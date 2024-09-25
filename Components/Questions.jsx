import React from 'react'
import styles from '../styles/Home.module.css'
import TitleComponent from './TitleComponent'

export default function Questions() {
    return (
    <>
        <div className={styles.questionsContantContainer}>
            <TitleComponent childrenTitle={'FREQUENTLY ASKED QUESTIONS'}/>
            <div className={styles.questionsContant}>
                <div className={styles.questionsContantQuestionContainer}>
                    <div className={styles.questionsContantQuestionElement}>
                        <div className={styles.questionsContantQuestionElementTitle}>1. What benefits does your resume platform provide?</div>
                        <div className={styles.questionsContantQuestionElementSubTitle}>Our platform provides a user-friendly resume builder with various templates to help you stand out from the competition. We also offer guidance on design, important sections, and key skills to give you the best chance of success.</div>
                    </div>
                    <div className={styles.questionsContantQuestionElement}>
                        <div className={styles.questionsContantQuestionElementTitle}>2. What benefits does your resume platform provide?</div>
                        <div className={styles.questionsContantQuestionElementSubTitle}>Our platform provides a user-friendly resume builder with various templates to help you stand out from the competition. We also offer guidance on design, important sections, and key skills to give you the best chance of success.</div>
                    </div> 
                    <div className={styles.questionsContantQuestionElement}>
                        <div className={styles.questionsContantQuestionElementTitle}>3. What benefits does your resume platform provide?</div>
                        <div className={styles.questionsContantQuestionElementSubTitle}>Our platform provides a user-friendly resume builder with various templates to help you stand out from the competition. We also offer guidance on design, important sections, and key skills to give you the best chance of success.</div>
                    </div> 
                </div>        
            </div>
        </div>    
    </>
  )
}
