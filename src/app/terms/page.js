"use client";

import styles from "./page.module.css";

export default function TermsPage() {
  const sections = [
    {
      title: "Introduction",
      content:
        "Prime Reputation Online - We provides online reputation management (ORM), digital branding, SEO optimization, and review monitoring services. These terms govern your use of our website and services.",
    },
    {
      title: "Eligibility",
      content:
        "By using our services, you confirm that you are at least 18 years old and legally capable of entering into a binding contract.",
    },
    {
      title: "Services Offered",
      content:
        "We provide the following services to help individuals and businesses build and protect their online presence:",
      listItems: [
        "Online Reputation Repair: Removing or suppressing negative content from search engine results",
        "Brand Monitoring: Tracking online mentions and reviews to safeguard your digital presence",
        "SEO Reputation Management: Optimizing search results with positive and authoritative content",
        "Social Media Management: Enhancing engagement and brand image on various platforms",
        "Review Management: Encouraging positive reviews and addressing negative feedback",
      ],
    },
    {
      title: "Payment & Billing",
      listItems: [
        "Pricing for services will be as per the customized package agreed upon with the client",
        "Clients must pay 50% upfront before we begin any work. The remaining 50% after user completion",
        "Payments can be made via Bank Transfer, Wire, PayPal (UPI preferred)",
        "No refunds will be provided once work has begun, except under special circumstances at our discretion",
      ],
    },
    {
      title: "Client Responsibilities",
      listItems: [
        "You agree to provide accurate and complete information required for reputation management services",
        "You must not use our services for any unlawful, misleading, or unethical purposes",
        "You acknowledge that online reputation management involves several factors beyond our control, such as Google search results, third-party websites, and social media policies",
      ],
    },
    {
      title: "Service Limitations",
      listItems: [
        "We do not guarantee permanent removal of negative content in certain circumstances, such as:",
        "1) Outdated data that has been indexed for a long time",
        "2) Legal restrictions preventing content removal",
        "3) Third-party platform policies that do not allow content deletion",
        "4) Content hosted on highly authoritative websites beyond our influence",
        "We do not engage in unethical tactics like hacking, fake reviews, or black-hat SEO techniques",
        "SEO and reputation management results may vary due to search engine algorithm changes and market conditions",
        "While we strive for results, search engine algorithms and digital trends may affect timelines",
      ],
    },
    {
      title: "Implementation Timeline for ORM Strategies",
      listItems: [
        "Our ORM strategies take up to 90 working days to be fully implemented for the removal or suppression of negative content",
        "The timeline may vary depending on search engine algorithms, third-party platform policies, and the complexity of the case",
      ],
    },
    {
      title: "Confidentiality",
      content:
        "We maintain strict confidentiality regarding client information and project details However, we are not responsible for breaches caused by third parties beyond our control",
    },
    {
      title: "Intellectual Property Rights",
      listItems: [
        "All content, strategies, and materials developed for your ORM campaign remain our intellectual property until full payment is received",
        "You may not reproduce, distribute, or use our strategies for unauthorized purposes",
      ],
    },
    {
      title: "Third-Party Links & Liability",
      listItems: [
        "Our website may contain links to third-party sites. We are not responsible for their content or privacy policies",
        "We do not take responsibility for Google, Facebook, Twitter, Instagram, LinkedIn, or other third-party policies that may affect ORM strategies",
      ],
    },
    {
      title: "Termination of Services",
      listItems: [
        "We reserve the right to terminate services if a client engages in fraudulent activities, misrepresentation, or unethical behavior",
        "Clients may cancel services with prior written notice, but no refunds will be issued for work already completed",
      ],
    },
    {
      title: "Disclaimer & Limitation of Liability",
      listItems: [
        "We provide ORM services on a best-effort basis, and results may vary based on factors outside our control",
        "We are not liable for direct, indirect, or consequential damages arising from the use of our services",
      ],
    },
    {
      title: "Governing Law",
      content:
        "These terms are governed by the laws of our jurisdiction, and any disputes will be resolved in the appropriate court of that jurisdiction",
    },
    {
      title: "Changes to Terms & Conditions",
      content:
        "We may update these terms at any time. Continued use of our services after changes constitutes acceptance of the revised terms",
    },
    {
      title: "Contact Information",
      content: (
        <>
          For any questions regarding these Terms & Conditions, please contact
          us at:{" "}
          <a
            href="mailto:communications@primereputationonline.com"
            className={styles.emailLink}
          >
            communications@primereputationonline.com
          </a>
        </>
      ),
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Terms and Conditions</h1>
      <p className={styles.intro}>
        Welcome to Prime Reputation Online! By using our online reputation
        management services, you agree to comply with the following Terms and
        Conditions. Please read them carefully before using our website and
        services.
      </p>

      <div className={styles.content}>
        {sections.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.content && (
              <p className={styles.text}>{section.content}</p>
            )}
            {section.listItems && (
              <ul className={styles.list}>
                {section.listItems.map((item, idx) => (
                  <li key={idx} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
