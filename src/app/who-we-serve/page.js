"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useModal } from "@/context/ModalContext";
import TalkToExpert from "@/components/TalkToExpert";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ContactTeam from "@/components/ContactTeam";
import ContactForm from "@/components/ContactForm";

export default function WhoWeServePage() {
  const { openModal } = useModal();

  const clientTypes = [
    {
      title: "Individuals & Professionals",
      items: [
        {
          heading: "Curate Your Online Image",
          description:
            "Showcase your best self by managing the information, images, and videos that appear when others search for your name online.",
        },
        {
          heading: "Suppress Negative Search Results",
          description:
            "Eliminate outdated news, irrelevant details, defamatory comments, or misleading rumors from your search results.",
        },
        {
          heading: "Protect Your Privacy",
          description:
            "Stop people-search sites from selling your and your family's personal information to scammers and hackers.",
        },
      ],
      image: "/individual.jpeg",
    },
    {
      title: "Job Seekers",
      items: [
        {
          heading: "Shape Your Online Presence",
          description:
            "Make a strong impression by controlling the information, images, and videos that appear when employers search for your name online.",
        },
        {
          heading: "Address Negative Search Results",
          description:
            "Remove outdated news, irrelevant details, or negative comments that could impact your job prospects.",
        },
        {
          heading: "Safeguard Your Personal Information",
          description:
            "Protect your privacy by ensuring that people-search sites don't sell your personal details to scammers and hackers.",
        },
      ],
      image: "/job-seeker.jpeg",
    },
    {
      title: "Small Businesses",
      items: [
        {
          heading: "Enhance Your Online Image",
          description:
            "Control the information, images, and videos that appear when customers search for your business online to create a positive impression.",
        },
        {
          heading: "Mitigate Negative Search Results",
          description:
            "Eliminate outdated news, irrelevant details, or negative reviews that could deter potential customers.",
        },
        {
          heading: "Protect Sensitive Business Information",
          description:
            "Prevent people-search sites from selling your business's personal information, safeguarding you from scammers and hackers.",
        },
      ],
      image: "/small-business.jpeg",
    },
    {
      title: "Executives & VIPs",
      items: [
        {
          heading: "Manage Your Search Results",
          description:
            "Your online image matters. Our unique strategies enable us to reorder your personal search results, influence suggestions, and control the images and videos that represent you.",
        },
        {
          heading: "Shift the Online Narrative",
          description:
            "When negative stories dominate the news, we redirect the focus to more positive topics, safeguarding your long-term online reputation.",
        },
        {
          heading: "Safeguard Your Family's Privacy",
          description:
            "We protect you and your loved ones by blocking disgruntled former employees and malicious actors from accessing personal information, home addresses, or launching cyberattacks.",
        },
      ],
    },
    {
      title: "Large Companies",
      items: [
        {
          heading: "Sync Your Search Results with Your Brand",
          description:
            "Our advanced technologies allow us to manage what appears in your company's search results, helping you establish a strong, authoritative presence that reflects your brand identity.",
        },
        {
          heading: "Enhance Your PR Strategy",
          description:
            "We highlight news that supports your messaging, enabling you to proactively address any unfavorable narratives.",
        },
        {
          heading: "Shield Your Infrastructure from Cyber Threats",
          description:
            "We remove your executive team's personal information from the internet, reducing vulnerability to social engineering attacks and protecting your digital assets.",
        },
      ],
      image: "/large-company.jpeg",
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              Unique solutions for
              <br />
              unique reputation
            </h1>
            <p className={styles.subtitle}>
              We help individuals and businesses protect and enhance their
              online reputation
            </p>
            <button className={styles.heroButton} onClick={openModal}>
              Get Started
            </button>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/hero-illustration.jpeg"
              alt="Reputation Management"
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.clientTypes}>
        <div className={styles.clientSection}>
          <div className={styles.clientInfo}>
            <h2 className={styles.clientTitle}>{clientTypes[0].title}</h2>
            <ul className={styles.itemList}>
              {clientTypes[0].items.map((item, idx) => (
                <li key={idx} className={styles.item}>
                  <h3 className={styles.itemHeading}>{item.heading}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          {clientTypes[0].image && (
            <div className={styles.imageWrapper}>
              <Image
                src={clientTypes[0].image}
                alt={clientTypes[0].title}
                width={300}
                height={200}
                className={styles.clientImage}
              />
            </div>
          )}
        </div>

        <TalkToExpert />

        {clientTypes.slice(1).map((client, index) => (
          <div key={index + 1} className={styles.clientSection}>
            <div className={styles.clientInfo}>
              <h2 className={styles.clientTitle}>{client.title}</h2>
              <ul className={styles.itemList}>
                {client.items.map((item, idx) => (
                  <li key={idx} className={styles.item}>
                    <h3 className={styles.itemHeading}>{item.heading}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            {client.image && (
              <div className={styles.imageWrapper}>
                <Image
                  src={client.image}
                  alt={client.title}
                  width={300}
                  height={200}
                  className={styles.clientImage}
                />
              </div>
            )}
          </div>
        ))}
      </section>

      <Testimonials />
      <ContactTeam />

      <section className={styles.contactFormSection}>
        <div className={styles.contactFormWrapper}>
          <ContactForm />
        </div>
      </section>

      <section className={styles.faqSection}>
        <FAQ />
      </section>
    </main>
  );
}
