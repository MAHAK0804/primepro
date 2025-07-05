"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { useModal } from "@/context/ModalContext";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { openModal } = useModal();

  const slides = [
    {
      title: "Protect your brand reputation online",
      features: [
        { text: "Remove Negative Links/URL", icon: "✓" },
        { text: "Remove Negative/Fake reviews", icon: "✓" },
        { text: "Remove Newspaper Articles", icon: "✓" },
        { text: "Reputation analysis and monitor", icon: "✓" },
      ],
      image: "/hero-image.png",
    },
    {
      title: "Remove negative content and restore your online reputation",
      features: [
        {
          text: "PRO helps you and your businesses remove harmful content permanently, manage your reputation, and create powerful online presence with brand development strategies that drive growth fast.",
        },
      ],
      image: "/hero-image2.png",
    },
  ];

  const avatars = [
    { src: "/Testimonial1.png", alt: "Testimonial 1" },
    { src: "/Testimonial2.png", alt: "Testimonial 2" },
    { src: "/Testimonial3.png", alt: "Testimonial 3" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.carousel}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              activeSlide === index ? styles.active : ""
            }`}
          >
            <div className={styles.heroContent}>
              <h1 className={styles.title}>{slide.title}</h1>

              {/* Mobile-only image */}
              <div className={styles.heroImageMobile}>
                <Image
                  src={slide.image}
                  alt="Hero illustration"
                  width={400}
                  height={400}
                  priority={true}
                  className={styles.image}
                />
              </div>

              <div
                className={`${styles.features} ${
                  index === 1 ? styles.singleColumnFeatures : ""
                }`}
              >
                {slide.features.map((feature, idx) => (
                  <div key={idx} className={styles.featureItem}>
                    {index === 0 && (
                      <span className={styles.featureIcon}>{feature.icon}</span>
                    )}
                    <span
                      className={`${styles.featureText} ${
                        index === 1 ? styles.featureTextDescription : ""
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className={styles.ctaSection}>
                <div
                  className={styles.auditBox}
                  onClick={openModal}
                  role="button"
                  tabIndex={0}
                >
                  <span className={styles.auditText}>Get a Free Quote</span>
                </div>

                <div className={styles.trustInfo}>
                  <div className={styles.avatarGroup}>
                    {avatars.map((avatar, idx) => (
                      <div key={idx} className={styles.avatar}>
                        <Image
                          src={avatar.src}
                          alt={avatar.alt}
                          width={48}
                          height={48}
                          className={styles.avatarImage}
                        />
                      </div>
                    ))}
                  </div>
                  <div className={styles.trustText}>
                    <span>Trusted by</span>
                    <span className={styles.trustCount}>5k+</span>
                  </div>
                </div>
              </div>

              <div className={styles.helpText}>
                Get free reputation audit in 24 hours!
              </div>
            </div>

            {/* Desktop image */}
            <div className={styles.heroImageDesktop}>
              {index === 1 ? (
                <div className={styles.wrapper}>
                  <Image
                    src={slide.image}
                    alt="Hero illustration"
                    width={600}
                    height={600}
                    priority={true}
                    className={styles.image}
                  />
                  <div className={`${styles.label} ${styles.label1}`}>
                    Remove Newspaper Article
                  </div>
                  <div className={`${styles.label} ${styles.label2}`}>
                    Remove Negative URL/Link
                  </div>
                </div>
              ) : (
                <Image
                  src={slide.image}
                  alt="Hero illustration"
                  width={600}
                  height={600}
                  priority={true}
                  className={styles.image}
                />
              )}
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className={styles.carouselControls}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.carouselDot} ${
                activeSlide === index ? styles.active : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
