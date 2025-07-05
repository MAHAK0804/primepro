"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import styles from "./TalkToExpert.module.css";

export default function TalkToExpert() {
  const { openModal } = useModal();

  return (
    <section className={styles.talkToExpert}>
      <div className={styles.expertContent}>
        <div className={styles.expertInfo}>
          <h2 className={styles.expertTitle}>Need help? Talk to an expert</h2>
          <p className={styles.expertText}>
            We help to fix your online reputation
          </p>
        </div>
        <div className={styles.expertAvatars}>
          <Image
            src="/e1.png"
            alt="Expert"
            width={40}
            height={40}
            className={styles.avatar}
          />

          <Image
            src="/e2.png"
            alt="Expert"
            width={40}
            height={40}
            className={styles.avatar}
          />

          <Image
            src="/e3.png"
            alt="Expert"
            width={40}
            height={40}
            className={styles.avatar}
          />
        </div>
        <button className={styles.bookButton} onClick={openModal}>
          Book a consultation
        </button>
      </div>
    </section>
  );
}
