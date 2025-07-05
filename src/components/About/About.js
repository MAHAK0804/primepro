import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  const stats = [
    {
      label: "Negative Link Removed",
      value: "2k+",
    },
    {
      label: "Success Rate",
      value: "4k+",
    },
    {
      label: "Trusted Us",
      value: "5k+",
    },
  ];

  const img = "/whoWeAreImg.png";

  return (
    <section className={`container-fluid ${styles.about}`}>
      <h2 className={styles.sectionTitle}>Who we are</h2>
      <p className={styles.mainTitle}>
        &quot;We are a global leader in online reputation management, blending
        innovative solutions with expert services.&quot;
      </p>

      <div className={`row ${styles.content}`}>
        <div className={`col-sm-12 col-md-4 col-lg-3 ${styles.workWithUs}`}>
          {/* <div className={styles.workContent}>
            <span className={styles.label}>Let's get started</span>
            <h3 className={styles.title}>Work<br />With Us</h3>
            <p className={styles.subtitle}>Together we can build<br />your reputation</p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/work-with-us.jpg"
              alt="Work with us" 
              fill
              className={styles.image}
            />
          </div> */}
          <img src={img} alt="who we are" />
        </div>

        <div className={`col-sm-12 col-md-5 col-lg-5 ${styles.stats}`}>
          <h3 className={styles.statsTitle}>
            Trusted by thousand, proven by data.{" "}
          </h3>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statValue}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
