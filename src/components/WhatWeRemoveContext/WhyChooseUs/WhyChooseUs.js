"use client";

import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
    return (
        <section className={styles.bg}>
            <div className={`container`}>
                <div className='row'>
                    <div className={`col-sm-12 col-md-6 col-lg-6 ${styles.text}`}>
                        <div>
                            <h1>Why Choose us?</h1>
                            <div className={styles.para}>At PRO, we understand the devastating impact of negative or sensitive content
                                on your personal or business reputation. Our negative content removal and
                                online reputation management services combine advanced technology, legal
                                expertise, and SEO strategies to deliver results. We’re committed to protecting your digital image with ethical, transparent, and effective solutions.</div>
                        </div>
                        <div>
                            <p>
                                <span>Proven Expertise: </span>
                                A track record of successfully removing harmful content for individuals and businesses.
                            </p>
                            <p>
                                <span>24/7 Support:</span>
                                Dedicated experts available to guide you every step of the way.
                            </p>
                            <p>
                                <span>Ethical Practices:</span>
                                Compliant methods that prioritize your long-term reputation.
                            </p>
                            <p>
                                <span>Customized Strategies: </span>
                                Tailored solutions to address your specific content removal needs.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 p-0'>
                        <img src='/whyChooseUs.png' className="img-fluid w-100 h-auto" alt="Why Choose Us"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}