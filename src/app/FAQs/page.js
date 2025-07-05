"use client";

import USPstripe from '../../components/USPstripe';
import FAQ from '../../components/FAQ/FAQ';
import styles from './page.module.css';

export default function FAQs(){
    return(
        <>
        <main>
            <div className='container text-center'>
                <h1 className={styles.headingFAQ}>Got Questions? We’ve Got Answers!</h1>
            </div>
            <USPstripe/>
            <FAQ/>
        </main>
        </>
    )
}