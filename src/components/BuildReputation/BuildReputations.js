"use client";

import styles from './BuildReputations.module.css';

export default function BuildReputations() {

    const features = [
        {
            brandReputation: [
                { text: 'Brand Strategy' },
                { text: 'Visual Identity Design' },
                { text: 'Brand Messaging' },
                { text: 'Brand Collateral Design' },
                { text: 'Brand Management & Maintenance' },
            ]
        },
        {
            uiDesigning: [
                { text: 'Custom website development.' },
                { text: 'Landing page design.' },
                { text: 'E-commerce solutions.' },
                { text: 'Website redesigns and ongoing maintenance with SEO enhancements.' },
                { text: 'Form integrations and performance optimization.' }
            ]

        },
        {
            socialMedia: [
                { text: 'Content creation and design.' },
                { text: 'Strategic content planning with monthly calendars and hashtag research.' },
                { text: 'Social media managemen.' },
                { text: 'Performance monitoring with detailed analytics and strategic insights.' },
                { text: 'Ad campaign management for targeted reach and A/B testing.' }
            ]
        },
        {
            contentWriting: [
                { text: 'Website copywriting. ' },
                { text: 'SEO blog writing with content planning.' },
                { text: 'Social media captions tailored to each platform, current trends, and your brand voice.' },
                { text: 'Social media captions tailored to trends and brand voice.' },
                { text: 'Email campaigns' },
                { text: 'Ad copy for Google, Instagram, and more' },
                { text: 'LinkedIn bios and brand introductions' },
                { text: 'Content editing and proofreading for tone, grammar, and SEO' }
            ]
        }
    ]

    return (
        <>
            <div className="container text-center">
                <div className={styles.common_p}>
                    <span className='blue_tag'>Our Services</span>
                    <h1 className='common_h1'> Leading the way in innovative brand building</h1>
                    <div className={`row ${styles.common_row_gap} ${styles.mobRev}`}>
                        <div className={`col-sm-12 col-md-6 col-lg-5 ${styles.flex_start}`}>
                            <h3>Brand reputation</h3>
                            <p>At PRO, we specialize in brand development, crafting a powerful and cohesive identity that sets
                                your business apart, builds trust, and connects deeply with your audience. </p>
                            {/* <button className='common_tag'>What we do</button> */}
                            <div>
                                {features[0].brandReputation.map((item, idx) => (
                                    <div key={idx} className={styles.eachFeature}>
                                        <span className={styles.featureText}>
                                            <div className='row'>
                                                <div className='col-1' style={{ width: "18px" }}>
                                                    <img src='/checkmark.svg' className='img-fluid'></img>
                                                </div>
                                                <div className='col'>
                                                    {item.text && <span>{item.text}</span>}
                                                </div>
                                            </div>
                                        </span>

                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <img src='/brandRep.png' className='img-fluid'></img>
                        </div>
                    </div>

                    <div className={`row ${styles.common_row_gap}`}>

                        <div className='col-sm-12 col-md-6 col-lg-5 p-0 img_flex_start'>
                            <img src='/webDesign.png' className='img-fluid'></img>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-6 ${styles.flex_start}`}>
                            <h3>Web and UI/UX designing</h3>
                            <p>Our Web Design and UI/UX team creates visually stunning, user-friendly, and high-performing websites
                                that drive engagement and conversions. We offer:</p>
                            <div>
                                {features[1].uiDesigning.map((item, idx) => (
                                    <div key={idx} className={styles.eachFeature}>
                                        <span className={styles.featureText}>
                                            <div className='row'>
                                                <div className='col-1' style={{ width: "18px" }}>
                                                    <img src='/checkmark.svg'></img>
                                                </div>
                                                <div className='col'>
                                                    {item.text && <span>{item.text}</span>}
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={`row ${styles.common_row_gap} ${styles.mobRev}`}>
                        <div className={`col-sm-12 col-md-6 col-lg-5 ${styles.flex_start}`}>
                            <h3>Social media management</h3>
                            <p>Our Social Media Marketing services boost your online presence by building communities and driving
                                 engagement. We create, plan, and publish tailored content—custom graphics, videos, reels, and
                                  captions—that align with your brand voice across platforms like Instagram, Facebook, LinkedIn, and X. We provide:</p>
                            <div>
                                {features[2].socialMedia.map((item, idx) => (
                                    <div key={idx} className={styles.eachFeature}>
                                        <span className={styles.featureText}>
                                            <div className='row'>
                                                <div className='col-1' style={{ width: "18px" }}>
                                                    <img src='/checkmark.svg' className='img-fluid'></img>
                                                </div>
                                                <div className='col'>
                                                    {item.text && <span>{item.text}</span>}
                                                </div>
                                            </div>
                                        </span>

                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-6 ${styles.img_flex_end}`}>
                            <img src='/socialMedia.png' className={`img-fluid ${styles.subjective_img}`}></img>
                        </div>
                    </div>

                    <div className={`row ${styles.common_row_gap}`}>

                        <div className={`col-sm-12 col-md-6 col-lg-6 ${styles.img_flex_start}`}>
                            <img src='/contentWriting.png' className='img-fluid'></img>
                        </div>
                        <div className={`col-sm-12 col-md-6 col-lg-5 ${styles.flex_start}`}>
                            <h3>Content writing</h3>
                            <p>We specialize in creating customized content for websites, blogs, social media channels, emails,
                                and marketing campaigns to strengthen your brand message, improve SEO rankings, and foster customer
                                loyalty. We provide:</p>
                            <div>
                                {features[3].contentWriting.map((item, idx) => (
                                    <div key={idx} className={styles.eachFeature}>
                                        <span className={styles.featureText}> 
                                            <div className='row'>
                                                <div className='col-1' style={{width:"18px"}}>
                                                    <img src='/checkmark.svg' className='img-fluid'></img>
                                                </div>
                                                <div className='col'>
                                                     {item.text && <span>{item.text}</span>}
                                                </div>
                                            </div> 
                                        </span>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}