import Image from "next/image";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import ContactTeam from "@/components/ContactTeam";
import styles from "./page.module.css";

export default function AboutPage() {
  const features = [
    { text: "Monitor & Repair reputation" },
    { text: "Remove personal information" },
    { text: "Delete Fake/Spam Reviews" },
    { text: "Fix your search results" },
  ];

  const benefits = [
    {
      title: "Improved SEO Performance",
      description:
        "By eliminating harmful backlinks, you can regain lost rankings and improve your site's overall SEO health.",
    },
    {
      title: "Better Brand Reputation",
      description:
        "Removing low-quality and spammy links helps protect and enhance your brand's online reputation.",
    },
    {
      title: "Higher Search Engine Ranking",
      description:
        "By eliminating harmful backlinks, you can regain lost rankings and improve your site's overall SEO health.",
    },
    {
      title: "Improved SEO Performance",
      description:
        "A clean backlink profile is a strong signal to search engines, potentially boosting your rankings and visibility.",
    },
  ];

  const teamMembers = [
    {
      name: "Anurag Chhonkar",
      role: "Founder & CEO",
      image: "/avt-1.png",
    },
    {
      name: "Ashish Tripathi",
      role: "VP of Design",
      image: "/avt-2.png",
    },
    {
      name: "Monica Chhonkar",
      role: "Communication head",
      image: "/avt-3.png",
    },
    {
      name: "Sonika Singh",
      role: "Design Consultant",
      image: "/team-4.png",
    },
    {
      name: "Anamika Singh",
      role: "Creative head",
      image: "/team-5.png",
    },
    {
      name: "Renuka",
      role: "Content Writer",
      image: "/team-6.png",
    },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <h1 className={styles.bannerTitle}>
          Protect & Build stronger
          <br />
          brand reputation
        </h1>
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              {feature.text}
            </div>
          ))}
        </div>
      </section>

      <About />

      <section className={styles.hero}>
        <h1 className={styles.title}>
          We&apos;ve got an entire team dedicated to supporting you and your
          business
        </h1>
        <p className={styles.subtitle}>
          Get help 24/7, with our award winning support network of tech and ORM
          experts
        </p>
      </section>

      <section className={styles.team}>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={280}
                  height={280}
                  className={styles.memberImage}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.benefitsHeader}>
          <span className={styles.badge}>BENEFITS</span>
          <h2 className={styles.benefitsTitle}>
            Benefits of our
            <br />
            Link Removal
            <br />
            Service
          </h2>
          <p className={styles.benefitsDescription}>
            Our team of SEO experts will analyze your site&apos;s backlink
            profile, identify problematic links, and take the necessary steps to
            remove them.
          </p>
          <button className={styles.viewServices}>View our services</button>
          <div className={styles.trustedBy}>
            <div className={styles.avatars}>
              <Image
                src="/Testimonial1.png"
                alt="Testimonial 1"
                width={40}
                height={40}
                className={styles.avatar}
              />

              <Image
                src="/Testimonial2.png"
                alt="Testimonial 2"
                width={40}
                height={40}
                className={styles.avatar}
              />

              <Image
                src="/Testimonial3.png"
                alt="Testimonial 3"
                width={40}
                height={40}
                className={styles.avatar}
              />
            </div>
            <div className={styles.trustedText}>
              <span>Trusted by</span>
              <strong>5k+</strong>
            </div>
          </div>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
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

      <FAQ />
    </main>
  );
}
