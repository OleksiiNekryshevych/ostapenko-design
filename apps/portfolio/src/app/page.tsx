import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Works } from '../components/Works/Works';
import { Contact } from '../components/Contact/Contact';

export default function Index() {
  return (
    <main>
      {/* Note: Header/Footer should ideally be in Layout, but keeping simple for now or adding here */}
      <Hero />
      <About />
      <Works />
      <Contact />
    </main>
  );
}
