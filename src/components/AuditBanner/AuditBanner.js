import styles from './AuditBanner.module.css';

export default function AuditBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.auditBox}>
          <span className={styles.auditText}>Free Reputation Audit</span>
        </div>

        <div className={styles.trustInfo}>
          <div className={styles.avatarGroup}>
            <div className={styles.avatar} style={{ backgroundImage: 'url("/avatar1.jpg")' }} />
            <div className={styles.avatar} style={{ backgroundImage: 'url("/avatar2.jpg")' }} />
            <div className={styles.avatar} style={{ backgroundImage: 'url("/avatar3.jpg")' }} />
          </div>
          <div className={styles.trustText}>
            <span>Trusted by</span>
            <span className={styles.trustCount}>5k+</span>
          </div>
        </div>
      </div>
    </section>
  );
} 