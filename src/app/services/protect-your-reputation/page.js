"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import USPstripe from "../../../components/USPstripe";
import ReputationServices from "../../../components/ReputationServices";
import ShortBanner from "../../../components/ShortBanner/ShortBanner";
import TrustedExperts from "../../../components/TrustedExperts";

export default function ProtectYourReputations() {
  const { openModal } = useModal();

  const avatars = [
    { src: "/Testimonial1.png", alt: "Testimonial1 " },
    { src: "/Testimonial2.png", alt: "Testimonial1 " },
    { src: "/Testimonial3.png", alt: "Testimonial1 " },
  ];
  return (
    <main style={{ background: "#fff" }}>
      <div className="container">
        <div className="row common_p padding_bottom common_spaceBetween">
          <div className="col-sm-12 col-md-7 col-lg-6 common_align_center">
            <div>
              <h1 className="common_h1">
                Services
                <br />
                Solution . Focused
              </h1>
              <p className="common_para padding_right pt-0">
                From Negative to Positive, Take Control of Your
                <br /> Online Reputation Today
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
                src="/WorldVector.png"
                alt="World Vector"
                className={styles.globe}
              />

              {/* Text Labels */}
              <div className={`${styles.label} ${styles.label1}`}>
                Delete Fake/Spam Reviews
              </div>
              <div className={`${styles.label} ${styles.label2}`}>
                Remove News Articles
              </div>
              <div className={`${styles.label} ${styles.label3}`}>
                Monitor Your Reputation
              </div>
              <div className={`${styles.label} ${styles.label4}`}>
                Repair Your Reputation
              </div>
              <div className={`${styles.label} ${styles.label5}`}>
                Build Your Reputation
              </div>
              <div className={`${styles.label} ${styles.label6}`}>
                Remove Negative Content
              </div>
            </div>
          </div>
        </div>
      </div>
      <USPstripe />
      <ReputationServices />
      <ShortBanner bgColor="#333" color="#fff" />
      <TrustedExperts />
    </main>
  );
}
