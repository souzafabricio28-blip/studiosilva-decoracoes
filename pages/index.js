import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Scheduling from '@/components/Scheduling';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Scheduling />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
}
