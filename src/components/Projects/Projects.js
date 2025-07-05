import Image from "next/image";
import styles from "./Projects.module.css";

export default function Projects() {
  const categories = [
    ["Foodtech", "Fintech"],
    ["Healthtech", "AI Bots"],
    ["Traveltech", "ECom"],
    ["Realtech", "Edtech"],
  ];

  return (
    <section className={styles.projects}>
      <div className={styles.content}>
        <h2 className={styles.title}>1900+ projects completed</h2>
        <p className={styles.subtitle}>and counting more..</p>

        <div className={styles.mapContainer}>
          <div className={styles.map}>
            <Image
              src="/map.png"
              alt="World Map"
              fill={true}
              className={styles.mapImage}
              priority
            />
          </div>
        </div>

        <div className={styles.categories}>
          {categories.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.categoryColumn}>
              {column.map((category, index) => (
                <div key={index} className={styles.category}>
                  <span className={styles.dot}></span>
                  {category}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
