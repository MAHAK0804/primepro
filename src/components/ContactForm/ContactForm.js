"use client";

import { useState } from 'react';
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';


export default function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    service: '',
    query: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create WhatsApp message text
    const message = `
*New Consultation Request*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Time: ${formData.date}
Service: ${formData.service}
Query: ${formData.query}
    `.trim();

    const phoneNumber = '+919220496258'; // Replace with your number (with country code, no spaces or symbols)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Close the form
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Get a consultation right now!</h2>
      <p className={styles.subtitle}>To get started, please provide your contact info:</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="04"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">Date and Time</label>
            <select
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            >
              <option value="">Select your prefer date and time</option>
              <option value="morning">Morning (9AM - 12PM)</option>
              <option value="afternoon">Afternoon (12PM - 5PM)</option>
              <option value="evening">Evening (5PM - 8PM)</option>
            </select>
          </div>
        </div>

        <div className={styles.formBottom}>
          <div className={styles.formGroup}>
            <label htmlFor="service">Choose a service</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select your prefer service</option>
              <option value="reputation">Reputation Management</option>
              <option value="removal">Content Removal</option>
              <option value="monitoring">Brand Monitoring</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="query">Query</label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="If any"
              rows="1"
            />
          </div>
        </div>

        <p className={styles.privacy}>
          By filling out the form, you consent to the processing of personal data.{' '}
          <a href="/privacy">Privacy policy</a>
        </p>

        <button type="submit" className={styles.submitButton}>
          Submit query
        </button>
      </form>
    </div>
  );
} 