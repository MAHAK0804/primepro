"use client";

import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import styles from "./page.module.css";
import ContactTeam from "@/components/ContactTeam";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export default function ServicesPage() {
  const { openModal } = useModal();

  const removalItems = [
    { title: "Instagram", image: "/instagram.svg" },
    { title: "Yellow Pages", image: "/yellow.svg" },
    { title: "Google", image: "/google.svg" },
    { title: "Facebook", image: "/facebook.png" },
    { title: "Trip advisor", image: "/tripadvisor.svg" },
    { title: "Youtube", image: "/youtube.svg" },
    { title: "Twitter", image: "/twitter.svg" },
    { title: "Bing", image: "/bing.svg" },
    { title: "True local", image: "/trueLocal.svg" },
    { title: "Complaints Board", image: "/complaintBoard.svg" },
    { title: "Trust pilot", image: "/trustpilot.svg" },
    { title: "Side Jaber", image: "/siteJabber.svg" },
    { title: "Glossdoor", image: "/glossdoor.svg" },
    { title: "Indeed", image: "/indeed.svg" },
    { title: "LinkedIn", image: "/linkedIn.svg" },
    { title: "Ripoff Report", image: "/rippoffreport.svg" },
    { title: "Yelp", image: "/yelp.svg" },
  ];

  const stats = [
    { label: "Negative Links Removed", value: "2k+" },
    { label: "Happy Clients", value: "4k+" },
    { label: "Success Rate", value: "95%" },
  ];

  const testimonials = [
    {
      name: "Amelia Joseph",
      role: "Chief Manager",
      image: "/Testimonial1.png",
      quote:
        "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
      rating: 4.8,
    },
    {
      name: "Sonika Chhonkar",
      role: "Design consultant",
      image: "/Testimonial2.png",
      quote:
        "I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!",
      rating: 5,
    },
    {
      name: "Jacob Joshua",
      role: "Chief Manager",
      image: "/Testimonial3.png",
      quote:
        "Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!",
      rating: 4.7,
    },
  ];

  const standForItems = [
    {
      title: "Emotion Navigators",
      description:
        "A team that understands its clients' challenges is genuinely committed to delivering effective solutions.",
      bgColor: "#FFFBEB", // Light yellow background
    },
    {
      title: "Concern Investigators",
      description:
        "A true team not only listens to your concerns but collaborates to find solutions that bring you peace of mind.",
      bgColor: "#FEF2F2", // Light pink background
    },
    {
      title: "Solution Specialists",
      description:
        "The true hallmark of an exceptional team lies in its capacity to transform your challenges into effective solutions.",
      bgColor: "#F0F9FF", // Light blue background
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.grayWrapper}>
        <section className={styles.hero}>
          <div className={styles.badge}>OUR SERVICES</div>
          <h1 className={styles.title}>
            Google Never Forgets,
            <br />
            But We Can Help It
            <br />
            Forgive!
          </h1>
          <p className={styles.subtitle}>
            ReputationGrower by ReputationDefender lets you put your
            <br />
            best foot forward online
          </p>
          <button className={styles.consultationButton} onClick={openModal}>
            Book a consultation
          </button>
        </section>

        <section>
          <Services />
        </section>
      </div>

      <section className={styles.removal}>
        <h2 className={styles.removalTitle}>What we will remove for you</h2>
        <div className={styles.removalGrid}>
          {removalItems.map((item, index) => (
            <div key={index} className={styles.removalItem}>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={60}
                className={styles.removalImage}
              />

              <p className={styles.removalText}>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.stats}>
        <h2 className={styles.statsTitle}>Our Data tells Better about us</h2>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <div className={styles.statLabel}>
                <span className={styles.checkIcon}>✓</span>
                {stat.label}
              </div>
              <div className={styles.statValue}>{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.talkToExpert}>
        <div className={styles.expertContent}>
          <div className={styles.expertInfo}>
            <h2 className={styles.expertTitle}>Need help? Talk to an expert</h2>
            <p className={styles.expertText}>
              We help to fix your online reputation
            </p>
          </div>
          <div className={styles.expertAvatars}>
            <Image
              src="/e1.png"
              alt="Expert"
              width={40}
              height={40}
              className={styles.avatar}
            />

            <Image
              src="/e2.png"
              alt="Expert"
              width={40}
              height={40}
              className={styles.avatar}
            />

            <Image
              src="/e3.png"
              alt="Expert"
              width={40}
              height={40}
              className={styles.avatar}
            />
          </div>
          <button className={styles.bookButton} onClick={openModal}>
            Book a consultation
          </button>
        </div>
      </section>

      <section className={styles.standFor}>
        <div className={styles.standForContent}>
          <div className={styles.standForBadge}>What we stand for</div>
          <h1 className={styles.standForTitle}>
            Personalized IT
            <br />
            Services to
            <br />
            Enhance Your
            <br />
            Business
          </h1>
          <p className={styles.standForDescription}>
            Discover tailored IT solutions that align with your business goals.
            Our expert team crafts innovative strategies to drive your success
            and efficiency.
          </p>
        </div>
        <div className={styles.standForGrid}>
          {standForItems.map((item, index) => (
            <div
              key={index}
              className={styles.standForCard}
              style={{ backgroundColor: item.bgColor }}
            >
              <h3 className={styles.standForCardTitle}>{item.title}</h3>
              <p className={styles.standForCardDescription}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2 className={styles.testimonialsTitle}>
          What our client said about us
        </h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className={styles.testimonialImage}
                />

                <div className={styles.testimonialInfo}>
                  <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                  <p className={styles.testimonialRole}>{testimonial.role}</p>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`${styles.star} ${
                          i < Math.floor(testimonial.rating)
                            ? styles.filled
                            : i < testimonial.rating
                            ? styles.halfFilled
                            : ""
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className={styles.ratingNumber}>
                      ({testimonial.rating})
                    </span>
                  </div>
                </div>
              </div>
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactTeam />

      <section className={styles.contactFormSection}>
        <div className={styles.contactFormWrapper}>
          <ContactForm />
        </div>
      </section>

      <section className={styles.faqSection}>
        <FAQ />
      </section>
    </main>
  );
}
