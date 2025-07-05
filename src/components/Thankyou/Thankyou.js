"use client";

import { useState, useRef } from 'react';
import styles from './Thankyou.module.css';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function ThankyouForm() {
      const router = useRouter();
      const pathname = usePathname();

    return (
        <section>
            <div className={`container ${styles.formBg}`}>
                <div className='row'>
                    <div className='col text-center'>
                        <img src="/success.svg" className='pb-3'></img>
                        <h1 className={`${styles.h1}`}>Thank you for submitting your query!</h1>
                        <p className={styles.p}>We've received your request and our team will get back to you shortly.
                            We appreciate your patience and look forward to assisting you.</p>
                        <button type='submit'
                            className={styles.btn}
                            onClick={() => {
                                router.push('/');
                            }}>Back to Home</button>
                    </div>
                </div>
            </div>
        </section>
    )
}