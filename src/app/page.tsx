import Sidebar from '@/components/Sidebar';
import Services from '@/components/Missions';
import NutriSection from '@/components/NutriSection';
import AboutNutri from '@/components/AboutNutri';
import Consultation from '@/components/Consultation';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Sidebar />

      <div className=''>
        <NutriSection />

        <Services />

        <AboutNutri />

        <Testimonials />

        <Consultation />

        <Contact />
      </div>

    </div>
  );
}
