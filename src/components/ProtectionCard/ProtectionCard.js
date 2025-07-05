import Image from "next/image";
import styles from "./ProtectionCard.module.css";

export default function ProtectionCard() {
  return (
    <div className={styles.card}>
      {/* Profile Section */}
      <div className={styles.profile}>
        <div className={styles.avatar}>
          <Image src="/avatar.jpg" alt="John Smith" width={56} height={56} />
        </div>
        <div className={styles.profileInfo}>
          <h3 className={styles.name}>John Smith</h3>
          <p className={styles.role}>Design lead</p>
        </div>
        <div className={styles.dots}>
          <Image src="/blue-dots.png" alt="dots" width={38} height={44} />
        </div>
      </div>

      {/* Rating Section */}
      <div className={styles.rating}>
        <div className={styles.ratingScore}>
          <span className={styles.score}>3.8</span>
          <div className={styles.stars}>★★★★☆</div>
        </div>
        <div className={styles.reviews}>
          <Image
            src="/google.svg"
            alt="Google"
            width={20}
            height={20}
            className={styles.googleIcon}
          />

          <span>788 Google Reviews</span>
        </div>
      </div>

      {/* Details Section */}
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <h4>Experience</h4>
          <p>10 years</p>
        </div>
        <div className={styles.detailItem}>
          <h4>Services</h4>
          <p>VIC</p>
        </div>
      </div>
    </div>
  );
}
