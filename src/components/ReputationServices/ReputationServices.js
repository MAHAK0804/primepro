"use client"

import styles from './ReputationServices.module.css';
import '../../components/global.css';
import Image from 'next/image';
// import '../../../public/checkmark.svg'

export default function ReputationServices() {

    const features = [
        {
            monitoringRep: [
                { text: 'Real-Time Tracking' },
                { text: 'Comprehensive Reporting' },
                { text: 'Early Detection' },
                { text: 'Custom Alerts' },
            ]

        },
        {
            RepairingRep: [
                { text: 'Negative Content Suppression' },
                { text: 'Content Creation' },
                { text: 'Review Management:' },
                { text: 'Search Engine Optimization: ' },
            ]

        },
        {
            buildRep: [
                { text: 'Positive Content Creation' },
                { text: 'Social Media Management' },
                { text: 'Review Generation' },
                { text: 'Authority Building' },
            ]
        },
        {
            removeNegativeContent: [
                { text: 'Content Analysis' },
                { text: 'Legal Requests' },
                { text: 'SEO Suppression' },
                { text: 'Continuous Monitoring' },
            ]
        },
        {
            deleteFakeReview: [
                { text: 'Review Audit' },
                { text: 'Platform Appeals' },
                { text: 'Customer Engagement' },
                { text: 'Reputation Monitoring' },
            ]
        },
        {
            removeNewsArticles: [
                { text: 'Article Analysis' },
                { text: 'Takedown Requests' },
                { text: 'SEO Suppression' },
                { text: 'Ongoing Monitoring' },
            ]
        },
    ]
    return (
        <div className="container text-center">
            <div className={styles.common_p}>
            <span className='blue_tag'>Our Services</span>
            <h1 className='common_h1'> Protect your reputation</h1>
            <div className={`row ${styles.common_row_gap} ${styles.mobRev}`}>
                <div className={`col-sm-12 col-md-6 col-lg-5 ${styles.flex_start}`}>
                    <h3>Monitor your reputation</h3>
                    <p>Negative feedback, fake reviews, or harmful content can appear on search engines, social media,
                        or review platforms without warning. Our reputation monitoring services track mentions of your brand, name,
                        or business across the web, ensuring you are informed of any risks before they escalate.</p>
                    <button className='common_tag'>What we do</button>
                    <div>
                        {features[0].monitoringRep.map((item, idx) => (
                            <div key={idx} className={styles.eachFeature}>
                                <span className={styles.featureText}> <img src='/checkmark.svg'></img>
                                    {item.text && <span>{item.text}</span>}</span>

                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <img src='/monitorRep.png' className='img-fluid'></img>
                </div>
            </div>

            <div className={`row ${styles.common_row_gap}`}>
                
                <div className='col-sm-12 col-md-6 col-lg-5 img_flex_start'>
                    <img src='/repairRep.png' className='img-fluid'></img>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-6 ${styles.flex_start}`}>
                    <h3>Repair your reputationn</h3>
                    <p>A single negative review or damaging article can push away customers and harm your credibility. 
                        Our online reputation repair strategies focus on suppressing negative content and promoting positive 
                        narratives to restore your brand’s image.</p>
                    <button className='common_tag'>What we do</button>
                    <div>
                        {features[1].RepairingRep.map((item, idx) => (
                            <div key={idx} className={styles.eachFeature}>
                                <span className={styles.featureText}> <img src='/checkmark.svg'></img>
                                    {item.text && <span>{item.text}</span>}</span>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`row ${styles.common_row_gap} ${styles.mobRev}`}>
                <div className={`col-sm-12 col-md-6 col-lg-5 ${styles.flex_start}`}>
                    <h3>Build Your Reputation</h3>
                    <p>A proactive approach to online reputation management ensures your brand is seen in a positive light across
                         search engines, social media, and review platforms. Building a strong reputation establishes credibility
                          and sets you apart from competitors</p>
                    <button className='common_tag'>What we do</button>
                    <div>
                        {features[2].buildRep.map((item, idx) => (
                            <div key={idx} className={styles.eachFeature}>
                                <span className={styles.featureText}> <img src='/checkmark.svg'></img>
                                    {item.text && <span>{item.text}</span>}</span>

                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <img src='/buildRep.png' className='img-fluid'></img>
                </div>
            </div>

            <div className={`row ${styles.common_row_gap}`}>
                
                <div className='col-sm-12 col-md-6 col-lg-5 img_flex_start'>
                    <img src='/removeNegative.png' className='img-fluid'></img>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-6 ${styles.flex_start}`}>
                    <h3>Remove negative content</h3>
                    <p>Negative content appearing in search results can deter customers and harm your credibility. Our expert 
                        team uses ethical, effective strategies to remove negative content and minimize its impact on your 
                        reputation.</p>
                    <button className='common_tag'>What we do</button>
                    <div>
                        {features[3].removeNegativeContent.map((item, idx) => (
                            <div key={idx} className={styles.eachFeature}>
                                <span className={styles.featureText}> <img src='/checkmark.svg'></img>
                                    {item.text && <span>{item.text}</span>}</span>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`row ${styles.common_row_gap} ${styles.mobRev}`}>
                <div className={`col-sm-12 col-md-6 col-lg-5 ${styles.flex_start}`}>
                    <h3>Delete fake/spam reviews</h3>
                    <p>Fake or spam reviews can unfairly damage your business’s credibility and turn away potential customers. 
                        Our fake review removal services help you eliminate fraudulent reviews and maintain a trustworthy online
                         presence.</p>
                    <button className='common_tag'>What we do</button>
                    <div>
                        {features[4].deleteFakeReview.map((item, idx) => (
                            <div key={idx} className={styles.eachFeature}>
                                <span className={styles.featureText}> <img src='/checkmark.svg'></img>
                                    {item.text && <span>{item.text}</span>}</span>

                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <img src='/deleteLink.png' className='img-fluid'></img>
                </div>
            </div>

            <div className={`row ${styles.common_row_gap}`}>
                
                <div className='col-sm-12 col-md-6 col-lg-5 img_flex_start p-0'>
                    <img src='/removeNewsArticle.png' className='img-fluid'></img>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-6 ${styles.flex_start}`}>
                    <h3>Remove news articles</h3>
                    <p>A single negative news article can dominate search results and shape public perception. Our team uses
                         strategic methods to remove news articles or push them out of sight, ensuring your reputation remains
                          intact.</p>
                    <button className='common_tag'>What we do</button>
                    <div>
                        {features[5].removeNewsArticles.map((item, idx) => (
                            <div key={idx} className={styles.eachFeature}>
                                <span className={styles.featureText}> <img src='/checkmark.svg'></img>
                                    {item.text && <span>{item.text}</span>}</span>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}