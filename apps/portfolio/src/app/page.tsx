import { Hero } from '../components/Hero/Hero';
import { HeroStats } from '../components/HeroStats';
import { About } from '../components/About/About';
import { Works } from '../components/Works/Works';
import { Contact } from '../components/Contact/Contact';

export default function Index() {
  return (
    <main>
      <Hero />
      <HeroStats />
      <About />
      <Works />
      <Contact />
    </main>
  );
}
