"use client";

import { useState } from 'react';
import styles from './FAQ.module.css';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const faqs = [
    {
      question: "What is online reputation management?",
      answer: "Online Reputation Management (ORM) is the process of shaping public perception by controlling what people find about you and your brand on search engines, social media, and online platforms. A strong ORM strategy combines SEO (Search Engine Optimization), social media management, and digital PR to enhance your brand&apos;s credibility and visibility. It involves monitoring brand mentions, suppressing negative content, removing harmful links, and promoting positive customer reviews to establish trust. Our expert ORM services focus on building, repairing, and maintaining a strong online reputation to ensure your brand stands out positively in search results."
    },
    {
      question: "Why is online reputation management important?",
      answer: `Online Reputation Management (ORM) is a game-changer for businesses, ensuring a strong and positive digital presence. Here's how ORM helps brands thrive:

      • Boost Sales & Conversions: A strong online reputation attracts more potential customers, increasing trust and sales.
      
      • Enhanced Brand Visibility: ORM strengthens your presence on search engines and social media, making your brand more recognizable and authoritative.
      
      • Build Customer Trust: High engagement and positive online interactions establish credibility and long-term customer relationships.
      
      • Leverage Customer Feedback: Monitoring and managing online reviews helps businesses gather valuable insights to improve services and customer satisfaction.
      
      • Strategic Business Growth: Regular ORM monitoring allows brands to refine strategies, enhance customer experience, and plan future goals effectively.
      
      • Manage Negative Content: While negative comments cannot always be erased, ORM helps suppress harmful content and highlight positive brand stories.
      
      • Create a Strong Brand Image: A well-planned ORM strategy ensures a top-tier brand reputation, positioning your business as an industry leader.
      
      With the right ORM strategy, your business can grow stronger, bolder, and more competitive in the digital space!`
    },
    {
      question: "I have a negative review on internet, What should I do?",
      answer: "Stay calm—your online reputation is in safe hands! As your dedicated Reputation Management experts, we&apos;re here to help. Contact us today or fill out the inquiry form, and let&apos;s restore and enhance your brand&apos;s online presence."
    },
    {
      question: "How much time will it take to remove the negative review or URL/Links?",
      answer: "The time required for Online Reputation Management (ORM) depends on the complexity of the issue. In most cases, results can be seen within 24 hours to 60 business days, while more severe cases may take up to 90 days for full resolution."
    },
    {
      question: "Is ORM legal?",
      answer: "Yes, it is fully legal. Till date, there&apos;s no such law that declares it otherwise."
    },
    {
      question: "How do you remove or delete negative reviews and links?",
      answer: "We use 40-45 different techniques to do so, depending upon the content."
    },
    {
      question: "Do you remove negative content permanently or just hide it?",
      answer: "We remove it permanently from all search engines."
    },
    {
      question: "Which type of content or URL you remove?",
      answer: "We specialize in removing unwanted content from the internet as per your request. Our Online Reputation Management (ORM) services cover the removal of links, reviews, personal information, photos, videos, and any other type of content or records that may harm your brand&apos;s reputation."
    },
    {
      question: "How much does it cost to remove negative content or review?",
      answer: "Our Online Reputation Management (ORM) services start at just $99. The final cost depends on the complexity and type of content—whether it&apos;s a URL, link, review, or any other material—to be removed."
    },
    {
      question: "Should I reply to negative reviews?",
      answer: "It&apos;s crucial not to respond to negative reviews, as doing so can make them more permanent. Addressing negative feedback publicly requires significant effort and resources to manage and remove through Online Reputation Management (ORM)."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className={styles.faq}>
      <h1>FAQ's</h1>
      <div className={styles.faqList}>
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
          >
            <button
              className={styles.question}
              onClick={() => toggleAccordion(index)}
            >
              <span className={styles.icon}>
                {activeIndex === index ? '−' : '+'}
              </span>
              {faq.question}
            </button>
            <div className={styles.answer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className={styles.viewAllWrapper}>
          <button
            className={styles.viewAllButton}
            // onClick={() => setShowAll(true)}
            onClick={() => {
              if (pathname === '/FAQs') {
                setShowAll(true); // Expand all on FAQs page
              } else {
                router.push('/FAQs'); // Redirect from homepage
              }
            }}
          >
            View All FAQs
            {/* <span className={styles.arrow}>→</span> */}
          </button>
        </div>
      )}
    </section>
  );
} 