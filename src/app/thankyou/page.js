"use client";

import styles from './page.module.css';
import ThankyouForm from '../../components/Thankyou/Thankyou';

export default function Thankyou() {
    return (
        <div className={`container-fluid p-0`}>
            <div className={styles.trustedBg}>
                <div className='container'>
                    <div className="row m-0 p-0 space_btw">
                        <div className={`col-sm-12 col-md-6 col-lg-6 ${styles.trustedText}`}>
                            <h1>Trusted experts in online reputation recovery.
                                Contact Us!</h1>
                            <p>
                                To get started, please provide your contact info,<br></br>  Restore Your Online Reputation Today!
                            </p>
                            <div className={styles.divider_line}></div>
                            <div className={styles.addressContainer}>
                                <span> <img src="call_icon.svg"></img> +91 92204 96258</span>
                                <span> <img src='internet_icon.svg'></img> communications@primereputationonline.com</span>
                                <span> <img src="location_icon.svg"></img> D56 , Tajpur Street, Badarpur, New Delhi 110044</span>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-5">
                            <div className={styles.contactform}>
                                <ThankyouForm />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='container'>
                <div className={`row ${styles.padding}`}>
                    <div className='col'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.350196626114!2d77.300923!3d28.499390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1b53086e711%3A0x4db3208b728e5417!2sBadarpur%2C%20New%20Delhi%2C%20Delhi%20110044!5e0!3m2!1sen!2sin!4v1652270557389!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>
                </div>
            </div>
        </div>
    )
}