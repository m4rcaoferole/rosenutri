import AboutNutri from "@/components/AboutNutri";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  MetodoSakuraIntro,
  MetodoSakuraPackage,
  MetodoSakuraPainPoints,
  MetodoSakuraPhases,
  MetodoSakuraResults,
  MetodoSakuraSolution,
} from "@/components/MetodoSakura";
import NutriSection from "@/components/NutriSection";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-white">
        <NutriSection />

        <MetodoSakuraPainPoints />

        <MetodoSakuraIntro />

        <MetodoSakuraSolution />

        <MetodoSakuraPhases />

        <MetodoSakuraPackage />

        <MetodoSakuraResults />

        <Testimonials />

        <AboutNutri />

        <Philosophy />

        <FAQ />

        <Contact />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}
