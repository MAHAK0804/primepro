"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import USPstripe from "../../components/USPstripe";
import WhatWeRemove from "../../components/WhatWeRemoveContext";
import WhyChooseUs from "../../components/WhatWeRemoveContext/WhyChooseUs";
import ContentWeRemove from "../../components/ContentWeRemove/ContentWeRemove";
import ShortBanner from "../../components/ShortBanner/ShortBanner";
import FAQ from "../../components/FAQ/FAQ";

export default function WhatWeRemoveContext() {
  const { openModal } = useModal();

  const avatars = [
    { src: "/Testimonial1.png", alt: "Testimonial1 " },
    { src: "/Testimonial2.png", alt: "Testimonial1 " },
    { src: "/Testimonial3.png", alt: "Testimonial1 " },
  ];

  return (
    <main>
      <div className="container">
        <div className={`row ${styles.spaceBetween} ${styles.padding}`}>
          <div className="col-sm-12 col-md-7 col-lg-6 common_align_center">
            <div>
              <h5 className={styles.tag}>
                Reclaim control of your online image
              </h5>
              <h1 className="common_h1">What we will remove</h1>
              <p className="common_para pt-2">
                From negative reviews and outdated articles to sensitive
                personal data, we help you take back control with smart,
                discreet, and effective removal solutions.
              </p>
            </div>
            <div className="content">
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
              <span className="helptext">
                Get free reputation audit in 24 hours!
              </span>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5">
            <div className={styles.wrapper}>
              <Image
                src="/whatWeRemoveBanner.png"
                alt="what we remove banner"
                className={`img-fluid w-100 ${styles.buildImg}`}
              />

              <div className={`${styles.label} ${styles.label1}`}>
                Negative reviews and URL/Link
              </div>
              <div className={`${styles.label} ${styles.label2}`}>
                Personal information
              </div>
              <div className={`${styles.label} ${styles.label3}`}>
                Criminal records
              </div>
              <div className={`${styles.label} ${styles.label5}`}>
                Newspaper articles
              </div>
              <div className={`${styles.label} ${styles.label6}`}>
                Leaked data
              </div>
            </div>
          </div>
        </div>
      </div>
      <USPstripe />
      <WhatWeRemove />
      <WhyChooseUs />
      <ContentWeRemove />
      <ShortBanner bgColor="#A3E5034D" color="#333" />
      <FAQ />
    </main>
  );
}
