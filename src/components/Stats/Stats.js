import styles from './Stats.module.css';

export default function Stats() {
  const stats = [
    { label: 'Link Removed', number: '2k+' },
    { label: 'Removed reviews', number: '4k+' },
    { label: 'Trusted Us', number: '5k+' }
  ];

  return (
    <section className={styles.stats}>
      <h2 className={styles.title}>Trusted by thousands</h2>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.number}>{stat.number}</div>
            <div className={styles.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 