import Sidebar from '@/components/Sidebar';
import Services from '@/components/Missions';
import NutriSection from '@/components/NutriSection';
import AboutNutri from '@/components/AboutNutri';
import ConsultOnline from '@/components/ConsultOnline';
import Instagram from '@/components/Instagram';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Sidebar />

      <div className=''>
        <NutriSection />      

        <Services />

        <AboutNutri />

        <ConsultOnline />

        <Instagram />

        <Contact />
      </div>

    </div>
  );
}
