"use client";

import React, { useRef, useState, useEffect } from "react";
// import { useEffect, useState } from 'react';
import styles from './TrustedContactForm.module.css';
import emailjs from "@emailjs/browser";
import { useRouter, usePathname } from 'next/navigation';
import Select from "react-select";
import { getNames, getCode } from "country-list";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



export default function TrustedContactForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    user_country: "",
    user_query: ""
  });
  const [phone, setPhone] = useState('');

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const getFlagEmoji = (countryCode) =>
    countryCode
      .toUpperCase()
      .replace(/./g, (char) =>
        String.fromCodePoint(127397 + char.charCodeAt())
      );

  const countryOptions = getNames().map((name) => {
    const code = getCode(name);
    return {
      label: `${getFlagEmoji(code)} ${name}`,
      value: code,
    };
  });

  const validate = () => {
    let tempErrors = {};
    if (!formData.user_name.trim()) tempErrors.user_name = "Name is required";
    if (!formData.user_phone.trim()) tempErrors.user_phone = "Phone is required";
    if (!formData.user_email.trim()) {
      tempErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      tempErrors.user_email = "Email is invalid";
    }
    if (!formData.user_country.trim()) tempErrors.user_country = "Country is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await emailjs.sendForm(
        "service_63hp0fg",
        "template_e5qyf0d",
        form.current,
        "8QdDvgRQXusw8ZpKX"
      );

      setStatus("success");
      form.current?.reset();
      setFormData({
        user_name: "",
        user_phone: "",
        user_email: "",
        user_country: "",
        user_query: ""
      });

      // Navigate after successful email send
      router.push('/thankyou');
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  useEffect(() => {
    setMounted(true); // avoid SSR mismatch
  }, []);



  if (!mounted) return null;

  return (
    <section className={`container ${styles.formBg}`}>
      <h2>Get started today!</h2>

      <div className={`row ${styles.display}`}>
        <form ref={form} onSubmit={sendEmail}>
          <div className="col-12">
            <label className={styles.label}>Your Name*</label>
            <input
              className={styles.input}
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            <span className={`${styles.requiredText}`}> {errors.user_name || '\u00A0'}</span>
          </div>
          <div className="col-12">
            <label className={styles.label}>Phone Number*</label>
            <PhoneInput
              country={'in'}
              style={{with:"100%"}}
              value={formData.user_phone}
              onChange={(value) =>
                setFormData({ ...formData, user_phone: value })
              }
              inputProps={{
                name: 'user_phone',
                required: true
              }}
            />
            <span className={`${styles.requiredText}`}> {errors.user_phone || '\u00A0'}</span>
          </div>
          <div className="col-12">
            <label className={styles.label}>Email*</label>
            <input
              className={styles.input}
              type="text"
              name="user_email"
              placeholder="Enter your email"
              value={formData.user_email}
              onChange={handleChange}
            />
            <span className={`${styles.requiredText}`}> {errors.user_email || '\u00A0'}</span>
          </div>
          <div className="col-12">
            <label className={styles.label}>Country*</label>
            {/* <input
              className={styles.input}
              type="text"
              name="user_country"
              value={formData.user_country}
              onChange={handleChange}
            /> */}

            <Select
              options={countryOptions}
              onChange={(selected) =>
                setFormData({ ...formData, user_country: selected.label })
              }
              placeholder="Select your country"
            />
            <input type="hidden" className={styles.input} name="user_country" value={formData.user_country} />
            <span className={`${styles.requiredText}`}> {errors.user_country || '\u00A0'}</span>
          </div>
          <div className="col-12">
            <label className={styles.label}>Query</label>
            <textarea
              className={styles.input}
              name="user_query"
              value={formData.user_query}
              onChange={handleChange}
              placeholder="How can we help you? Please provide the URL which needs to be removed."
            />
            {/* <span className={`${styles.requiredText}`}> {errors.user_query || '\u00A0'}</span> */}
          </div>
          <div className="col-12 pb-2">
            <span className={styles.helptext}>
              By filling out the form, you consent to the processing of provided data. Privacy policy
            </span>
          </div>
          <div className="col-12">
            <button className={styles.sendMessageButton} type="submit">
              Send Message
            </button>
            {status === "success" && (
              <p className="text-green-600 mt-3">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-3">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
