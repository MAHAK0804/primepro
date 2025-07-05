"use client";

import styles from "./page.module.css";
import Image from "next/image";
import USPstripe from "../../../components/USPstripe";
import { useModal } from "@/context/ModalContext";
import BuildReputations from "../../../components/BuildReputation/BuildReputations";
import ShortBanner from "../../../components/ShortBanner/ShortBanner";
import TrustedExperts from "../../../components/TrustedExperts";

export default function BuildYourReputation() {
  const { openModal } = useModal();
  const avatars = [
    { src: "/Testimonial1.png", alt: "Testimonial1 " },
    { src: "/Testimonial2.png", alt: "Testimonial1 " },
    { src: "/Testimonial3.png", alt: "Testimonial1 " },
  ];

  return (
    <>
      <main style={{ background: "#fff" }}>
        <div className="container">
          <div className={`row common_p ${styles.spaceBetween}`}>
            <div className="col-sm-12 col-md-7 col-lg-6 common_align_center">
              <div>
                <h1 className="common_h1">
                  Elevate your brand, engage your audience, expand your reach
                </h1>
                <p className="common_para pt-2">
                  We deliver powerful branding, high-performance websites,
                  consistent content, and social media that works for you.
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
                  src="/BuildBannerImg.png"
                  alt="BuildBanner"
                  className={`img-fluid ${styles.buildImg}`}
                />

                {/* Text Labels */}
                <div className={`${styles.label} ${styles.label1}`}>
                  Web and UI/UX designing
                </div>
                <div className={`${styles.label} ${styles.label2}`}>
                  {" "}
                  Brand reputation
                </div>
                <div className={`${styles.label} ${styles.label3}`}>
                  Content writing
                </div>
                <div className={`${styles.label} ${styles.label5}`}>
                  Social media management
                </div>
              </div>
            </div>
          </div>
        </div>
        <USPstripe />
        <BuildReputations />
        <ShortBanner bgColor="#333" color="#fff" />
        <TrustedExperts />
      </main>
    </>
  );
}
