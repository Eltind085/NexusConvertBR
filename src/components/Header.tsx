import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTA = () => {
    window.open("https://wa.me/5585920015464?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20landing%20pages", "_blank");
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#121212]/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-brand-dark border border-white/10 overflow-visible">
                {/* Custom glowing rising line SVG resembling the source logo */}
                <svg className="w-6 h-6 filter drop-shadow-[0_0_6px_#00E5FF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18L9 13L14 16L20 7" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="18" r="2.5" fill="#00E5FF" />
                  <circle cx="9" cy="13" r="2.5" fill="#00E5FF" />
                  <circle cx="14" cy="16" r="2.5" fill="#39FF14" />
                  <circle cx="20" cy="7" r="2.5" fill="#39FF14" />
                  <path d="M17 7H20V10" stroke="#39FF14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="logo-grad" x1="4" y1="18" x2="20" y2="7" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00E5FF" />
                      <stop offset="1" stopColor="#39FF14" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-brand-cyan to-brand-green rounded-lg blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
              </div>
              
              <div>
                <span className="font-display font-bold text-xl tracking-tight text-white block">
                  NEXUS <span className="text-brand-cyan">CONVERT</span> BR
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-brand-green uppercase font-semibold">
                  Engenharia de Conversão
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("diferenciais")} 
                className="text-sm text-gray-400 hover:text-white transition duration-200 cursor-pointer"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection("comunidades")} 
                className="text-sm text-gray-400 hover:text-white transition duration-200 cursor-pointer"
              >
                Nicho / Segmentos
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")} 
                className="text-sm text-gray-400 hover:text-white transition duration-200 cursor-pointer text-brand-green font-semibold"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection("depoimentos")} 
                className="text-sm text-gray-400 hover:text-white transition duration-200 cursor-pointer"
              >
                Resultados
              </button>
              <button 
                onClick={() => scrollToSection("faq")} 
                className="text-sm text-gray-400 hover:text-white transition duration-200 cursor-pointer"
              >
                Perguntas
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={handleCTA}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold overflow-hidden rounded-full group cursor-pointer border border-brand-green/30 bg-[#121212] transition-all duration-300 hover:border-brand-green glow-green"
              >
                <span className="relative z-10 text-white group-hover:text-brand-green transition duration-200 flex items-center gap-1.5 font-display uppercase tracking-wider">
                  Falar no WhatsApp <ArrowUpRight className="w-3.5 h-3.5 text-brand-green" />
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none focus:ring-0"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#121212]/95 border-b border-white/5 py-6 px-4 md:hidden backdrop-blur-lg flex flex-col gap-4"
          >
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-left py-2 text-base text-gray-300 hover:text-white border-b border-white/5 transition"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("comunidades")}
              className="text-left py-2 text-base text-gray-300 hover:text-white border-b border-white/5 transition"
            >
              Nicho / Segmentos
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-left py-2 text-base text-brand-green font-semibold hover:text-white border-b border-white/5 transition"
            >
              Portfólio
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-left py-2 text-base text-gray-300 hover:text-white border-b border-white/5 transition"
            >
              Resultados
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-left py-2 text-base text-gray-300 hover:text-white border-b border-white/5 transition"
            >
              Perguntas
            </button>
            <button
              onClick={handleCTA}
              className="mt-2 w-full py-3 bg-brand-green text-brand-dark rounded-full font-display font-bold uppercase tracking-wider text-xs text-center flex items-center justify-center gap-1"
            >
              Falar Via WhatsApp <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
