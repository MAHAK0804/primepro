"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import styles from "./Protection.module.css";
import ProtectionCard from "@/components/ProtectionCard";

export default function Protection() {
  const { openModal } = useModal();

  const features = [
    {
      text: "Block unauthorized data access",
      icon: "✓",
    },
    {
      text: "Secure your privacy with proactive removal",
      icon: "✓",
    },
    {
      text: "Block unauthorized data access",
      icon: "✓",
    },
  ];

  return (
    <section className={styles.protection}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>Protect your personal information</h2>
          <p className={styles.description}>
            Prevent data brokers and cybercriminals from accessing your
            information with personal data removal strategies that safeguard
            your online privacy and security.
          </p>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <span className={styles.featureText}>{feature.text}</span>
              </div>
            ))}
          </div>

          <button className={styles.button} onClick={openModal}>
            Get Started
          </button>
        </div>

        <div className={styles.rightContent}>
          <Image
            src="/protection-illustration.jpeg"
            alt="Protection Illustration"
            width={500}
            height={400}
            className={styles.illustration}
          />

          {/* <div className={styles.greyBox}></div>
          <div className={styles.cardWrapper}>
            <ProtectionCard />
          </div>
          <div className={styles.scheduleCard}>
            <div className={styles.progressBar}>
              <div className={`${styles.progressStep} ${styles.active}`}></div>
              <div className={styles.progressStep}></div>
              <div className={styles.progressStep}></div>
            </div>
            <h3 className={styles.scheduleTitle}>Schedule a call</h3>
            <p className={styles.scheduleSubtitle}>Pick a date and time</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
