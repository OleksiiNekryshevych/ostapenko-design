import { Hero } from '../components/Hero/Hero';
import { HeroStats } from '../components/HeroStats';
import { About } from '../components/About/About';
import { Reviews } from '../components/Reviews/Reviews';
import { Works } from '../components/Works/Works';
import { Contact } from '../components/Contact/Contact';

export default function Index() {
  return (
    <main>
      <Hero />
      <HeroStats />
      <About />
      <Reviews />
      <Works />
      <Contact />
    </main>
  );
}
