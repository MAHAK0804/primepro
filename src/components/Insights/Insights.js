"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import styles from "./Insights.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Insights() {
  const { openModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);

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
      image: "/blog-Placeholder.png",
      title: "How to Build a Positive Personal Brand Image Online",
      author: "PRO Team",
      readTime: "8 mins read",
      date: "19 March 2024",
      category: "Personal Branding",
    },
    {
      slug: "the-influence-of-seo",
      image: "/blog-Placeholder.png",
      title:
        "The Influence of Search Engine Optimization (SEO) in the Maintenance of Online Reputation",
      author: "PRO Team",
      readTime: "8 mins read",
      date: "25 March 2024",
      category: "SEO",
    },
  ];

  const blogsPerPage = 3;
  const totalSlides = Math.ceil(allBlogs.length / blogsPerPage);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleBlogs = allBlogs.slice(
    currentSlide * blogsPerPage,
    (currentSlide + 1) * blogsPerPage
  );

  return (
    <section className={styles.insights}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoWrapper}>
            <Image
              src="/LogoW.png"
              alt="PRO"
              width={120}
              height={120}
              className={styles.logo}
              priority={true}
            />
          </div>
          <div className={styles.headerText}>
            <span className={styles.badge}>Build your brand</span>
            <h2 className={styles.title}>Elevate Your Brand Today</h2>
            <p className={styles.description}>
              Build a strong, recognizable, and influential brand with our
              all-encompassing business branding services.
            </p>
            <button className={styles.getStartedButton} onClick={openModal}>
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>

      <div className={styles.insightsSection}>
        <h3 className={styles.insightsTitle}>Browse Latest Insights</h3>
        <div className={styles.sliderContainer}>
          <button
            className={styles.sliderArrow}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className={styles.insightCards}>
            {visibleBlogs.map((blog, index) => (
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
                      fill={true}
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
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

          <button
            className={styles.sliderArrow}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
