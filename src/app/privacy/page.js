"use client";

import styles from './page.module.css';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect the following types of information:",
      subsections: [
        {
          subtitle: "Personal Information",
          listItems: [
            "Name, email address, phone number, and company name",
            "Billing and payment details",
            "Any other details you provide related to your reputation management needs"
          ]
        },
        {
          subtitle: "Non-Personal Information",
          listItems: [
            "IP address, browser type, and device information",
            "Website usage data through cookies and analytics tools",
            "Referring websites or sources that led you to our website"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      listItems: [
        "Provide online reputation management, digital branding, and SEO reputation repair services",
        "Process payments and manage billing",
        "Improve website functionality and user experience",
        "Respond to inquiries and customer support requests",
        "Monitor and analyze trends to enhance our services",
        "Comply with legal and regulatory requirements"
      ]
    },
    {
      title: "How We Protect Your Information",
      content: "We implement strict security measures to protect your data from unauthorized access, disclosure, or misuse. These include:",
      listItems: [
        "Encrypted payment transactions",
        "Secure storage of personal and sensitive data",
        "Limited access to authorized personnel only"
      ],
      note: "However, no online system is 100% secure, and we cannot guarantee absolute data protection."
    },
    {
      title: "Sharing of Information",
      content: "We do not sell, rent, or trade your personal data. However, we may share information with:",
      listItems: [
        "Trusted third-party service providers (e.g., payment processors, hosting services) to assist with service delivery",
        "Legal authorities if required to comply with the law",
        "Business partners only when necessary for fulfilling ORM services"
      ]
    },
    {
      title: "Implementation Timeline for ORM Strategies",
      listItems: [
        "Our ORM strategies take up to 90 working days to be fully implemented for the removal or suppression of negative content",
        "The timeline may vary depending on search engine algorithms, third-party platform policies, and the complexity of the case"
      ]
    },
    {
      title: "Cookies & Tracking Technologies",
      content: "Our website uses cookies to:",
      listItems: [
        "Improve your browsing experience",
        "Remember your preferences",
        "Analyze website traffic"
      ],
      note: "You can manage or disable cookies through your browser settings, but this may affect website functionality."
    },
    {
      title: "Third-Party Links",
      content: "Our website may contain links to third-party sites. We are not responsible for their privacy policies or content. We recommend reviewing their policies before sharing any personal data."
    },
    {
      title: "Data Retention",
      content: "We retain personal information for as long as necessary to fulfill service obligations, comply with legal requirements, and improve our offerings. If you wish to have your data removed, please contact us."
    },
    {
      title: "Your Rights & Choices",
      content: "You have the right to:",
      listItems: [
        "Access the personal data we hold about you",
        "Request corrections or updates to your information",
        "Request deletion of your data (subject to legal obligations)",
        "Opt out of marketing communications"
      ],
      note: (
        <>
          To exercise your rights, contact us at{' '}
          <a 
            href="mailto:communications@primereputationonline.com"
            className={styles.emailLink}
          >
            communications@primereputationonline.com
          </a>
        </>
      )
    },
    {
      title: "Updates to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. Continued use of our services after updates indicates your acceptance of the revised policy."
    },
    {
      title: "Contact Information",
      content: (
        <>
          For any questions regarding Privacy Policy, please contact us at:{' '}
          <a 
            href="mailto:communications@primereputationonline.com"
            className={styles.emailLink}
          >
            communications@primereputationonline.com
          </a>
        </>
      )
    }
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.intro}>
        Welcome to Prime Reputation Online! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our online reputation management services.
      </p>

      <div className={styles.content}>
        {sections.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.content && <p className={styles.text}>{section.content}</p>}
            
            {section.subsections && section.subsections.map((subsection, subIndex) => (
              <div key={subIndex} className={styles.subsection}>
                <h3 className={styles.subsectionTitle}>{subsection.subtitle}</h3>
                <ul className={styles.list}>
                  {subsection.listItems.map((item, idx) => (
                    <li key={idx} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {section.listItems && (
              <ul className={styles.list}>
                {section.listItems.map((item, idx) => (
                  <li key={idx} className={styles.listItem}>{item}</li>
                ))}
              </ul>
            )}

            {section.note && <p className={styles.note}>{section.note}</p>}
          </section>
        ))}
      </div>
    </main>
  );
} 