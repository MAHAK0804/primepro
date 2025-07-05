"use client";

import '../global.css';
import styles from './WhatWeRemove.module.css';

export default function WhatWeRemove() {

    const RemovableContext = [
        {
            "NewspaperArticles": [
                {
                    heading: "Newspaper articles",
                    para: "Negative or outdated news articles can impact your reputation long after they're published. Our removal services help ensure they no longer define you or your business.",
                    link:"How We Help",
                    Features: [
                        { title: "Article Identification:", desc: "Pinpoint harmful news articles across search engines, news sites, and archives." },
                        { title: "Takedown Requests:", desc: "Collaborate with publishers, webmasters, and legal teams to request the removal of defamatory or outdated articles." },
                        { title: "SEO Suppression:", desc: "Promote positive content to bury negative articles deep in search results" },
                        { title: "Ongoing Monitoring: ", desc: "Ensure removed articles don’t resurface and address new threats promptly." },
                    ]
                }
            ]
        },
        {
            "NegativeReviews": [
                {
                    heading: "Negative reviews and URL/Link",
                    para: "Negative reviews and harmful URLs/links can unfairly tarnish your business’s credibility and drive away customers. Our negative review removal and URL removal services help you eliminate fake or malicious feedback and damaging links from the web.",
                    link:"How We Help",
                    Features: [
                        { title: "Review Audit:", desc: "Analyze reviews on platforms like Google, Yelp, Trustpilot, and others to identify fake, spam, or defamatory content." },
                        { title: "URL/Link Removal:", desc: "Target harmful URLs or links containing negative content and work with platforms or search engines to remove them." },
                        { title: "Platform Appeals:", desc: "Submit detailed requests to review sites or web hosts to delete fraudulent reviews or links violating their policies." },
                        { title: "Positive Review Strategy: ", desc: "Encourage genuine, positive reviews to outweigh and overshadow negative ones." },
                    ]
                }
            ]
        },
        {
            "CriminalRecords": [
                {
                    heading: "Criminal records",
                    para: "Criminal records appearing online can severely impact your personal and professional life, even if the information is outdated, expunged, or inaccurate. Our criminal record removal services help you remove or suppress this sensitive information from the internet.",
                    link:"How We Help",
                    Features: [
                        { title: "Record Identification: ", desc: "Locate criminal records or related content on search engines, background check sites, or public databases." },
                        { title: "Legal Takedowns:", desc: "Work with legal teams and website administrators to request the removal of expunged or inaccurate records." },
                        { title: "SEO Suppression:", desc: "Push down criminal record listings by promoting positive, optimized content." },
                        { title: "Privacy Protection:", desc: "Monitor the web to ensure removed records don’t reappear." },
                    ]
                }
            ]
        },
        {
            "PersonalInfo": [
                {
                    heading: "Personal Information",
                    para: "Exposed personal information—such as addresses, phone numbers, or financial details—can lead to privacy breaches, identity theft, or reputational harm. Our personal information removal services ensure your sensitive data is removed from the internet.",
                    link:"How We Help",
                    Features: [
                        { title: "Data Identification:", desc: "Scan the web for exposed personal details, including addresses, phone numbers, emails, or financial information." },
                        { title: "Data Broker Removal:", desc: "Request the deletion of your information from data broker websites like Spoken, White-pages, or BeenVerified." },
                        { title: "Search Engine Suppression:", desc: "Push down search results containing personal information using SEO strategies." },
                        { title: "Continuous Monitoring:", desc: "Prevent re-exposure by monitoring data broker sites and search engines for new leaks" },
                    ]
                }
            ]
        },
        {
            "LeakedData": [
                {
                    heading: "Leaked data",
                    para: "Leaked data, such as hacked emails, passwords, or private documents, can expose you to significant risks, including reputational damage and security threats. Our leaked data removal services help you eliminate compromised information and secure your digital presence.",
                    link:"How We Help",
                    Features: [
                        { title: "Leak Detection:", desc: "Identify leaked data, such as emails, passwords, or documents, on the dark web, forums, or public sites." },
                        { title: "Takedown Requests:", desc: "Work with website hosts, search engines, and platforms to remove leaked content." },
                        { title: "Security Recommendations:", desc: "Provide guidance on securing accounts and preventing future leaks." },
                        { title: "Ongoing Monitoring:", desc: "Continuously track the web to ensure removed data doesn’t resurface." },
                    ]
                }
            ]
        }
    ]
    return (
        <section className="container">
            <div className='text-center common_p'>
                <span className='common_section_tag'>What We Remove</span>
                <h1>Protect Your Online Reputation</h1>
                <p>In today’s digital world, negative content can harm your reputation instantly. At PRO, we specialize
                    in online reputation management and negative content removal. From fake reviews to defamatory
                    articles and personal data, we use ethical, effective methods to eliminate or suppress damaging
                    content and restore your online image.</p>
            </div>

            {RemovableContext.map((item, index) => {
                const key = Object.keys(item)[0];
                const itemsArray = item[key];

                return itemsArray.map((data, subIndex) => {
                    const isEven = (index + subIndex) % 2 === 0;
                    const bgClasses = ['bgAlt1', 'bgAlt3', 'bgAlt2'];
                    const bgClass = isEven ? bgClasses[(index + subIndex) % bgClasses.length] : '';

                    return (
                        <div className={`row mb-5 space_btw ${bgClass}`} key={`${index}-${subIndex}`}>
                            {isEven ? (
                                <>
                                    {/* Heading on left */}
                                    <div className={`col-sm-12 col-md-5 col-lg-5 ${styles.textContainer}`}>
                                        <h3>{data.heading}</h3>
                                        <p>{data.para}</p>
                                        <h4>{data.link} <div className='line'></div></h4>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 offset-lg-1">
                                        <div className="">
                                            {data.Features.map((feature, i) => (
                                                <p key={i} className="common_card">
                                                    <strong className='title'>{feature.title}</strong> {feature.desc}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Features on left */}
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <div className="list-unstyled">
                                            {data.Features.map((feature, i) => (
                                                <p key={i} className="common_card">
                                                    <strong>{feature.title}</strong> {feature.desc}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className={`col-sm-12 col-md-5 col-lg-5 ${styles.textContainer}`}>
                                        <h3>{data.heading}</h3>
                                        <p>{data.para}</p>
                                        <h4>{data.link} <div className='line'></div></h4>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                });
            })}


        </section>
    )
}