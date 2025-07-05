"use client";

import TrustedContactForm from "../TrustedContactForm";
import styles from "./TrustedExperts.module.css";

export default function TrustedExperts() {
  return (
    <>
      <div className={`container-fluid ${styles.trustedBg}`}>
        <div className="container">
          <div className="row m-0 p-0">
            <div
              className={`col-sm-12 col-md-6 col-lg-7 ${styles.trustedText}`}
            >
              <h1>
                Trusted experts in online reputation recovery. Contact Us!
              </h1>
              <p>
                To get started, please provide your contact info,<br></br>{" "}
                Restore Your Online Reputation Today!
              </p>
              <div className={styles.divider_line}></div>
              <div className={styles.addressContainer}>
                <span>
                  {" "}
                  <img src="/call_icon.svg" /> +91 92204 96258
                </span>
                <span>
                  {" "}
                  <img src="/internet_icon.svg" />{" "}
                  communications@primereputationonline.com
                </span>
                <span>
                  {" "}
                  <img src="/location_icon.svg" /> D56 , Tajpur Street,
                  Badarpur, New Delhi 110044
                </span>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5">
              <div className={styles.contactform}>
                <TrustedContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
