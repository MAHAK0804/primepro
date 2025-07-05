"use client";

import Hero from "@/components/Hero";
import USPstripe from "../components/USPstripe";
import Services from "@/components/Services";
import About from "@/components/About";
import ContentWeRemove from "../components/ContentWeRemove";
import ShortBanner from "../components/ShortBanner/ShortBanner";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import TrustedExperts from "../components/TrustedExperts";

export default function Home() {
  console.log({
    Hero,
    USPstripe,
    Services,
    About,
    ContentWeRemove,
    ShortBanner,
    Projects,
    Testimonials,
    Insights,
    FAQ,
    TrustedExperts,
  });

  return (
    <main style={{ background: "#fff" }}>
      <Hero />
      <USPstripe />
      <Services />
      <About />
      <ContentWeRemove />
      <ShortBanner bgColor="#333" color="#fff" />
      <Projects />
      <Testimonials />
      <Insights />
      <FAQ />
      <TrustedExperts />
    </main>
  );
}
