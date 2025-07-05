"use client";

import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { openModal } = useModal();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image src="/footer-logo.png" alt="PRO" width={130} height={25} />
            </Link>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.linkColumn}>
              <h3>QUICK LINKS</h3>
              <div className="container p-0">
                <div className="row">
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/services">Services</Link>
                  </div>
                  <div
                    className="col"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    <Link href="/who-we-serve">Who we serve</Link>
                    <Link href="/what-we-remove">What we remove</Link>
                    <Link href="/FAQs">FAQ</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.linkColumn}>
              <h3>OTHER LINKS</h3>
              <button className={styles.footerLink} onClick={openModal}>
                Talk to an Expert
              </button>
              {/* <button 
                className={styles.footerLink}
                onClick={openModal}
              >
                Build your reputation
              </button> */}
              <Link href="/services/build-your-reputation">
                Build your reputations
              </Link>
              <Link href="/terms">Terms of Use</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>

            <div className={styles.newsletterSection}>
              <div className={styles.socialLinks}>
                <Link
                  href="https://www.linkedin.com/company/primereputationonline/"
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Image
                    src="https://i.ibb.co/20cmxKYc/linkedin.png"
                    alt="LinkedIn"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/primereputationonline"
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Image
                    src="https://i.ibb.co/60qXh8pH/facebook.png"
                    alt="Facebook"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/primereputationonline"
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Image
                    src="https://i.ibb.co/20cmxKYc/linkedin.png"
                    alt="Instagram"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link
                  href="https://twitter.com/primeorm?s=11"
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Image
                    src="https://i.ibb.co/kWjCsZt/twitter.png"
                    alt="Twitter"
                    width={32}
                    height={32}
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@primereputation"
                  target="_blank"
                  className={styles.socialLink}
                >
                  <Image
                    src="https://i.ibb.co/H1MwMGS/youtube.png"
                    alt="YouTube"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>Copyright © Primereputationonline.com</p>
          <div className={styles.contactInfo}>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Delhi, India
            </span>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Schedule a call
            </span>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Communications@primereputationonline.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
