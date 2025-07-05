"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const testimonials = [
    {
      name: "Amelia Joseph",
      role: "Chief Manager",
      image: "/Testimonial1.png",
      quote:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      rating: 4.8,
    },
    {
      name: "Sonika Chhonkar",
      role: "Design consultant",
      image: "/Testimonial2.png",
      quote:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
      rating: 5,
    },
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      image: "/Testimonial3.png",
      quote:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
      rating: 4.7,
    },
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      image: "/Testimonial3.png",
      quote:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
      rating: 4.7,
    },
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      image: "/Testimonial3.png",
      quote:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
      rating: 4.7,
    },
  ];

  const scroll = (dir) => {
    const container = scrollRef.current;
    const cardWidth = 330; // Card + margin
    container?.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = 330; // width + gap

    const index = Math.round(scrollLeft / cardWidth);
    setActiveCard(index);

    setAtStart(scrollLeft === 0);
    setAtEnd(scrollLeft + container.offsetWidth >= container.scrollWidth - 5);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    checkScrollPosition(); // Initial check

    container.addEventListener("scroll", checkScrollPosition);
    return () => container.removeEventListener("scroll", checkScrollPosition);
  }, []);
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.testimonialsTitle}>
        What our client said about us
      </h2>
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrow} ${atStart ? styles.disabled : ""}`}
          onClick={() => scroll("left")}
          disabled={atStart}
        >
          ←
        </button>

        <div className={styles.carousel} ref={scrollRef}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`${styles.card} ${
                i === activeCard ? styles.activeCard : styles.inactiveCard
              }`}
            >
              <div className={styles.header}>
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className={styles.avatar}
                />

                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                  <div className={styles.rating}>
                    {"★".repeat(Math.floor(t.rating))}
                    {t.rating % 1 > 0 ? "½" : ""}{" "}
                    <span>{t.rating} / 5 rating</span>
                  </div>
                </div>
              </div>
              <p className={styles.quote}>{t.quote}</p>
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${atEnd ? styles.disabled : ""}`}
          onClick={() => scroll("right")}
          disabled={atEnd}
        >
          →
        </button>
      </div>
    </section>
  );
}
