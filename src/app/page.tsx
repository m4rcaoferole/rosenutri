import AboutNutri from '@/components/AboutNutri';
import Consultation from '@/components/Consultation';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Services from '@/components/Missions';
import NutriSection from '@/components/NutriSection';
import Phrase from '@/components/Phrase';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="bg-white">
        <NutriSection />

        <Phrase />

        <Services />

        <AboutNutri />

        <Testimonials />

        <Consultation />

        <Contact />
      </div>
    </div>
  );
}
