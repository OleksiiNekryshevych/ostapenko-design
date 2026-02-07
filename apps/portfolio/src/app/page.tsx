import { Hero } from '../components/Hero/Hero';
import { About } from '../components/About/About';
import { Works } from '../components/Works/Works';
import { Contact } from '../components/Contact/Contact';

export default function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Works />
      <Contact />
    </main>
  );
}
