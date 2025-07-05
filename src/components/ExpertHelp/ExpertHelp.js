"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import styles from "./ExpertHelp.module.css";

export default function ExpertHelp() {
  const { openModal } = useModal();

  return (
    <section className={styles.expertHelp}>
      <div className={styles.content}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>Need help? Talk to an expert</h2>
          <p className={styles.description}>
            We help to fix your online reputation
          </p>
        </div>

        <div className={styles.avatarGroup}>
          <div className={styles.avatarStack}>
            <div className={styles.avatar}>
              <Image
                src="/e1.png"
                alt="Expert"
                width={48}
                height={48}
                className={styles.avatarImage}
              />
            </div>
            <div className={styles.avatar}>
              <Image
                src="/e2.png"
                alt="Expert"
                width={48}
                height={48}
                className={styles.avatarImage}
              />
            </div>
            <div className={styles.avatar}>
              <Image
                src="/e3.png"
                alt="Expert"
                width={48}
                height={48}
                className={styles.avatarImage}
              />
            </div>
          </div>
        </div>

        <button className={styles.button} onClick={openModal}>
          Book a consultation
        </button>
      </div>
    </section>
  );
}
