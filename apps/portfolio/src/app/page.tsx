import { Motto } from '../components/Motto/Motto';
import { Hero } from '../components/Hero/Hero';
import { Reviews } from '../components/Reviews/Reviews';
import { Works } from '../components/Works/Works';
import { Contact } from '../components/Contact/Contact';

export default function Index() {
  return (
    <main className="main-page">
      <Motto />
      <Hero />
      <Works />
      <Reviews />
      <Contact />
    </main>
  );
}
