import styles from './Features.module.css';

export default function Features() {
  const features = [
    {
      text: "Remove Negative Links/URL",
      icon: "✓"
    },
    {
      text: "Remove Negative/Fake reviews",
      icon: "✓"
    },
    {
      text: "Remove Newspaper Articles",
      icon: "✓"
    },
    {
      text: "Reputation analysis and monitor",
      icon: "✓"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {features.map((feature, index) => (
          <div key={index} className={styles.featureItem}>
            <span className={styles.featureIcon}>{feature.icon}</span>
            <span className={styles.featureText}>{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 