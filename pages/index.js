import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Scheduling from '@/components/Scheduling';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import ServiceArea from '@/components/ServiceArea';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal delay={100}><Services /></Reveal>
      <Reveal delay={100}><Scheduling /></Reveal>
      <Reveal delay={100}><Gallery /></Reveal>
      <Reveal delay={100}><Testimonials /></Reveal>
      <Reveal delay={100}><FAQ /></Reveal>
      <Reveal delay={100}><ServiceArea /></Reveal>
      <Reveal delay={100}><Contact /></Reveal>
    </>
  );
}
