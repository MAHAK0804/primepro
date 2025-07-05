import styles from "./ContactTeam.module.css";
import Image from "next/image";

export default function ContactTeam() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.contactTitle}>Contact our friendly team</h2>
      <p className={styles.contactSubtitle}>Let us know how we can help</p>

      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          <div className={styles.iconBox}>
            <div className={styles.iconWrapper}>
              <Image src="/Activity.png" alt="image" width={50} height={50} />
            </div>
          </div>
          <h3 className={styles.cardTitle}>Chat to sales</h3>
          <p className={styles.cardDescription}>Speak to our friendly team</p>
          <a href="mailto:info@primereputation.com" className={styles.cardLink}>
            info@primereputation.com
            <span className={styles.arrow}>→</span>
          </a>
        </div>

        <div className={styles.contactCard}>
          <div className={styles.iconBox}>
            <div className={styles.iconWrapper}>
              <Image src="/Heart.png" alt="image" width={50} height={50} />
            </div>
          </div>
          <h3 className={styles.cardTitle}>Chat to support</h3>
          <p className={styles.cardDescription}>We&apos;re here to help</p>
          <a
            href="mailto:Support@primereputation.com"
            className={styles.cardLink}
          >
            Support@primereputation.com
            <span className={styles.arrow}>→</span>
          </a>
        </div>

        <div className={styles.contactCard}>
          <div className={styles.iconBox}>
            <div className={styles.iconWrapper}>
              <Image src="/Work.png" alt="image" width={50} height={50} />
            </div>
          </div>
          <h3 className={styles.cardTitle}>Free consultation</h3>
          <p className={styles.cardDescription}>Mon-Fri from 8am to 5pm</p>
          <a href="#" className={styles.cardLink}>
            Contact us
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
