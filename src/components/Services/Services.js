"use client";

import { useState, useRef } from "react";
import styles from "./Services.module.css";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function ChevronLeft() {
  return (
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
  );
}

function ChevronRight() {
  return (
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
  );
}

const arrowIcon = "/circleArrow.svg";

function ServiceCard({ icon, title, description, link }) {
  const router = useRouter();
  return (
    <div className={styles.flex}>
      <div className={styles.card}>
        <div className={styles.iconCircle}>
          <div className={styles.iconWrapper}>
            <Image
              src={icon}
              className={styles.img}
              alt={title}
              width={32}
              height={32}
            />
          </div>
        </div>

        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardDescription}>{description}</p>

        <button onClick={() => router.push(link)} className={styles.learnMore}>
          Explore{" "}
          <span className={styles.arrow}>
            <Image
              src={arrowIcon}
              alt="arrow icon"
              width={20}
              height={20}
            ></Image>
          </span>
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState("protect");
  const sliderRef = useRef(null);
  const router = useRouter();

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 340; // card width (320) + gap (20)
      const currentScroll = sliderRef.current.scrollLeft;

      sliderRef.current.scrollTo({
        left:
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const servicesData = {
    protect: [
      {
        icon: "/removelink.svg",
        title: "Remove negative Links/URL",
        description:
          "We remove harmful links and URLs to safeguard your online reputation, ensuring a clean and positive digital presence.",
        link: "/services/protect-your-reputation",
      },
      {
        icon: "/removereviews.svg",
        title: "Remove negative reviews",
        description:
          "We help protect your brand's reputation by managing and removing negative reviews, enhaning your online credibility and trust.",
        link: "/services/protect-your-reputation",
      },
      {
        icon: "/removearticle.svg",
        title: "Remove newspaper/Article",
        description:
          "We help remove negative newspaper articles to protect your reputation and maintain a positive online image.",
        link: "/services/protect-your-reputation",
      },
      {
        icon: "/negativelinkburial.svg",
        title: "Negative link burial",
        description:
          "We push down negative links in search results with strategic SEO and positive content, restoring your online reputation.",
        link: "/services/protect-your-reputation",
      },
      {
        icon: "/googleautosuggest.svg",
        title: "Google autosuggest removal",
        description:
          "We remove negative Google Autosuggestions to ensure your brand is represented positively in search results.",
        link: "/services/protect-your-reputation",
      },
      {
        icon: "/reputationmonitoring.svg",
        title: "Reputation monitoring and analysis",
        description:
          "We monitor and analyze your online reputation, providing insights and strategies to maintain a positive brand image.",
        link: "/services/protect-your-reputation",
      },
    ],
    build: [
      {
        icon: "/brand_identity_development.svg",
        title: "Brand identity development",
        description:
          "We craft a strong brand identity with a memorable logo, tagline, cohesive color palette, and typography, ensuring consistency through clear brand guidelines.",
        link: "/services/build-your-reputation",
      },
      {
        icon: "/web_design_development.svg",
        title: "Web Design & Development",
        description:
          "We design and develop user-friendly, responsive websites with SEO-optimized content, secure hosting, and a seamless user experience.",
        link: "/services/build-your-reputation",
      },
      {
        icon: "/Content_writing.svg",
        title: "Content Writing",
        description:
          "We create value-driven content through blogs, videos, and social media posts, engaging your audience with your brand’s unique voice.",
        link: "/services/build-your-reputation",
      },
      {
        icon: "/social_media_marketing.svg",
        title: "Social Media Marketing",
        description:
          "We grow your brand with platform-specific strategies, influencer collaborations, and targeted paid social campaigns for maximum engagement.",
        link: "/services/build-your-reputation",
      },
    ],
  };

  const services =
    activeTab === "protect" ? servicesData.protect : servicesData.build;

  return (
    <section className={styles.services}>
      <h2 className={styles.sectionTitle}>What we do</h2>
      <h3 className={styles.mainTitle}>
        A leading innovator in online reputation solutions
      </h3>

      <div className={styles.tabs}>
        <div className={styles.tabsWidth}>
          <button
            className={`${styles.tab} ${
              activeTab === "protect" ? styles.active : styles.borderProtect
            }`}
            onClick={() => setActiveTab("protect")}
          >
            Protect your reputation
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "build" ? styles.active : styles.borderBuild
            }`}
            onClick={() => setActiveTab("build")}
          >
            Build your reputation
          </button>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <button
          className={styles.sliderButton}
          onClick={() => scroll("left")}
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>

        <div className={styles.slider} ref={sliderRef}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <button
          className={styles.sliderButton}
          onClick={() => scroll("right")}
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>
      </div>

      {isHomePage ? (
        <div className={styles.viewAll}>
          <button
            className={styles.viewAllButton}
            onClick={() => {
              if (activeTab === "protect") {
                router.push("/services/protect-your-reputation");
              } else {
                router.push("/services/build-your-reputation");
              }
            }}
          >
            View all services
          </button>
        </div>
      ) : null}
    </section>
  );
}
