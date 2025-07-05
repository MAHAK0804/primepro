"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const allBlogs = [
    {
      slug: "the-influence-of-online-reviews",
      image: "/blogImg1.png",
      title:
        "The Influence of Online Reviews on Consumer Buying Choices and the Importance of Online Reputation Management",
      author: "PRO Team",
      readTime: "7 mins read",
      date: "24 March 2024",
      category: "Online Reviews",
    },
    {
      slug: "why-online-reputation-management-is-essential",
      image: "/blogImg2.png",
      title: "Why Online Reputation Management is Essential in 2025",
      author: "PRO Team",
      readTime: "5 mins read",
      date: "23 March 2024",
      category: "ORM Trends",
    },
    {
      slug: "the-hidden-cost-of-ignoring-negative-content",
      image: "/blogImg3.png",
      title: "The Hidden Cost of Ignoring Negative Content Online",
      author: "PRO Team",
      readTime: "6 mins read",
      date: "22 March 2024",
      category: "ORM Impact",
    },
    {
      slug: "signs-you-need-professional-url-removal",
      image: "/blogImg4.png",
      title: "Signs You Need Professional URL Removal Services",
      author: "PRO Team",
      readTime: "5 mins read",
      date: "21 March 2024",
      category: "URL Removal",
    },
    {
      slug: "how-to-build-a-positive-personal-brand",
      image: "/blogImg1.png",
      title: "How to Build a Positive Personal Brand Image Online",
      author: "PRO Team",
      readTime: "8 mins read",
      date: "19 March 2024",
      category: "Personal Branding",
    },
    {
      slug: "the-influence-of-seo",
      image: "/blogImg2.png",
      title:
        "The Influence of Search Engine Optimization (SEO) in the Maintenance of Online Reputation",
      author: "PRO Team",
      readTime: "8 mins read",
      date: "25 March 2024",
      category: "SEO",
    },
  ];

  return (
    <main>
      <div className={`container ${styles.common_p}`}>
        <div className={`row ${styles.common_r_p}`}>
          <div className={styles.insightCards}>
            {allBlogs.map((blog, index) => (
              <Link
                href={`/blogs/${blog.slug}`}
                key={index}
                className={styles.cardLink}
              >
                <div className={styles.card}>
                  <div className={styles.cardImage}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority={index < 2} // Prioritize loading for first 2 blogs
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.category}>{blog.category}</span>
                    <h4 className={styles.cardTitle}>{blog.title}</h4>
                    <div className={styles.cardMeta}>
                      <span className={styles.authorName}>{blog.author}</span>
                      <div className={styles.meta}>
                        <span>{blog.readTime}</span>
                        <span>•</span>
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
