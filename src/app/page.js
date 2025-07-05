"use client";

import Hero from '@/components/Hero';
import USPstripe from '../components/USPstripe';
import Features from '@/components/Features';
import Services from '@/components/Services';
import About from '@/components/About';
import Protection from '@/components/Protection';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Projects from '@/components/Projects';
import Insights from '@/components/Insights';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';
import ContentWeRemove from '../components/ContentWeRemove';
import ShortBanner from '../components/ShortBanner/ShortBanner';
import TrustedExperts from '../components/TrustedExperts';

export default function Home() {
  return (
    <main style={{background:"#fff"}}>
      <Hero />
      <USPstripe/>
      <Services />
      <About />
      <ContentWeRemove/>
      <ShortBanner bgColor='#333' color='#fff'/>
      <Projects />
      <Testimonials />
      <Insights />
      <FAQ />
      <TrustedExperts/>
    </main>
  );
}
