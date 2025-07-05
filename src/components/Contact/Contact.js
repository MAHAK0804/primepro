import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Need help? Talk to an expert</h2>
          <p className={styles.subtitle}>
            Get in touch with our team for personalized support
          </p>
        </div>

        <form className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
              required
            />
          </div>
          <textarea
            placeholder="How can we help?"
            className={styles.textarea}
            rows="4"
            required
          ></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
} 