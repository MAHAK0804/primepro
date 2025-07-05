"use client";

import Image from "next/image";
import styles from "./ShortBanner.module.css";
import { useModal } from "@/context/ModalContext";

export default function ShortBanner({ bgColor = "#ffffff", color = "#333" }) {
  const { openModal } = useModal();

  const avatars = [
    { src: "/Testimonial1.png", alt: "Testimonial1 " },
    { src: "/Testimonial2.png", alt: "Testimonial1 " },
    { src: "/Testimonial3.png", alt: "Testimonial1 " },
  ];

  return (
    <>
      <section
        className="container-fluid"
        style={{ background: bgColor, color: color }}
      >
        <div className={`row ${styles.shortBannerBg}`}>
          <div className="col">
            <div className="container">
              <div className={`row ${styles.spaceCenter}`}>
                <div className={`col-sm-12 col-md-7 col-lg-5 ${styles.text}`}>
                  <h1>Need help? Talk to an expert</h1>
                  <p>We help to fix your online reputation</p>
                </div>
                <div className={`col-sm-12 col-md-5 col-lg-5 ${styles.flex}`}>
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

                  <div
                    className={styles.auditBox}
                    role="button"
                    onClick={openModal}
                    tabIndex={0}
                  >
                    <span className={styles.auditText}>Get a Free Quote</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
