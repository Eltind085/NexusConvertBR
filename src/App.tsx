import Header from "./components/Header";
import Hero from "./components/Hero";
import AuthorityMarquee from "./components/AuthorityMarquee";
import BentoGrid from "./components/BentoGrid";
import ServicesAndNiches from "./components/ServicesAndNiches";
import PortfolioGallery from "./components/PortfolioGallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#121212] text-gray-100 font-sans selection:bg-brand-cyan/30 selection:text-white">
      {/* Structural Components */}
      <Header />
      <main>
        {/* Cinematic landing page flow */}
        <Hero />
        <AuthorityMarquee />
        <BentoGrid />
        <ServicesAndNiches />
        <PortfolioGallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
