"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import styles from "./SERM.module.css";
import TalkToExpert from "@/components/TalkToExpert";

export default function SERM() {
  const { openModal } = useModal();

  const features = [
    {
      text: "Remove Negative Content from search results",
      icon: "✓",
    },
    {
      text: "Expert Search Engine Collaboration for best results",
      icon: "✓",
    },
    {
      text: "Ongoing Monitoring of search results",
      icon: "✓",
    },
  ];

  const timelineSteps = [
    {
      avatar: "/avatar.jpg",
      title: "Give us a Call",
      subtitle: "Pick a suitable date and time.",
      progress: 1,
    },
    {
      avatar: "/avatar.jpg",
      title: "Get a free consultation",
      subtitle: "Pick a suitable date and time.",
      progress: 2,
    },
    {
      avatar: "/avatar.jpg",
      title: "Start owning your home",
      subtitle: "Let us handle all the paper work.",
      progress: 3,
    },
  ];

  return (
    <>
      <section className={styles.serm}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <Image
              src="/serm-illustration.jpeg"
              alt="SERM Illustration"
              width={500}
              height={400}
              className={styles.illustration}
            />
          </div>

          <div className={styles.rightContent}>
            <h2 className={styles.title}>
              Search Engine Reputation Management
            </h2>
            <p className={styles.description}>
              We specialize in replacing negative content, images, and videos on
              Google&apos;s first page through Search Engine Reputation
              Management (SERM).
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
        </div>
      </section>
      <section className={styles.talkToExpertWrapper}>
        <TalkToExpert />
      </section>
    </>
  );
}
