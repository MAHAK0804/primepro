"use client";

import Image from "next/image";
import styles from "./ContentWeRemove.module.css";

export default function ContentWeRemove() {
  const removalItems = [
    { title: "Instagram", image: "/instagram.svg" },
    { title: "Yellow Pages", image: "/yellow.svg" },
    { title: "Google", image: "/google.svg" },
    { title: "Facebook", image: "/facebook.png" },
    { title: "Trip advisor", image: "/tripadvisor.svg" },
    { title: "Youtube", image: "/youtube.svg" },
    { title: "Twitter", image: "/twitter.svg" },
    { title: "Bing", image: "/bing.svg" },
    { title: "True local", image: "/trueLocal.svg" },
    { title: "Complaints Board", image: "/complaintBoard.svg" },
    { title: "Trust pilot", image: "/trustpilot.svg" },
    { title: "Side Jaber", image: "/siteJabber.svg" },
    { title: "Glossdoor", image: "/glossdoor.svg" },
    { title: "Indeed", image: "/indeed.svg" },
    { title: "LinkedIn", image: "/linkedIn.svg" },
    { title: "Ripoff Report", image: "/rippoffreport.svg" },
    { title: "Yelp", image: "/yelp.svg" },
  ];

  return (
    <>
      <section className={`container ${styles.removal}`}>
        <h2 className={styles.removalTitle}>
          Platforms we remove harmful content from
        </h2>
        <div className="row">
          <div className={`col ${styles.removalGrid}`}>
            {removalItems.map((item, index) => (
              <div key={index} className={styles.removalItem}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={60}
                  className={styles.removalImage}
                />

                <p className={styles.removalText}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
