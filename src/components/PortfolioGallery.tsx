import { useEffect, useRef, useState } from "react";
import { PORTFOLIO_ITEMS } from "../data";
import { PortfolioItem } from "../types";
import { ArrowUpRight, CheckCircle2, Award, Zap, Sparkles, X, ChevronRight } from "lucide-react";
import gsap from "gsap";

export default function PortfolioGallery() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Animate grid cards on scroll intersection
  useEffect(() => {
    if (cardsContainerRef.current) {
      const cards = cardsContainerRef.current.querySelectorAll(".portfolio-card");
      
      // Set initial state
      gsap.set(cards, { opacity: 0, y: 30 });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                cards,
                { opacity: 0, y: 30 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  stagger: 0.15,
                  ease: "power3.out",
                }
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(cardsContainerRef.current);
      
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  // GSAP animation for opening the modal
  const handleOpenModal = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  // Wait for state update then animate modal elements
  useEffect(() => {
    if (selectedItem && modalRef.current && backdropRef.current) {
      // Background fade-in
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Modal window scale and fade
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "back.out(1.1)" }
      );

      // Contents slide up elegantly
      gsap.fromTo(
        modalRef.current.querySelectorAll(".modal-fade-in"),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power3.out", delay: 0.1 }
      );
    }
  }, [selectedItem]);

  const handleCloseModal = () => {
    if (modalRef.current && backdropRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.92,
        y: 15,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(backdropRef.current, {
            opacity: 0,
            duration: 0.15,
            ease: "power1.in",
            onComplete: () => {
              setSelectedItem(null);
            },
          });
        },
      });
    } else {
      setSelectedItem(null);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#121212] border-t border-white/5 relative overflow-hidden">
      {/* Dynamic Background subtle grid glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-mt-24">
          <span className="text-[11px] font-mono tracking-[0.25em] text-brand-cyan uppercase font-bold bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            ESTRUTURAS COMERCIAIS ATIVAS
          </span>
          <h2 className="mt-6 font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Nossos Sucessos em <span className="text-brand-green">Código Puro</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Veja as landing pages de alta conversão criadas exclusivamente para reter o interesse de quem pesquisa do celular e gerar novas vendas imediatamente.
          </p>
        </div>

        {/* Portfolio Items Grid Container */}
        <div 
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="portfolio-card group relative rounded-2xl border border-white/10 bg-brand-grid/30 hover:bg-brand-grid/60 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between glow-cyan-hover"
              onClick={() => handleOpenModal(item)}
              id={`portfolio-item-${item.id}`}
            >
              {/* Card visual showcase */}
              <div className="relative h-64 overflow-hidden w-full">
                {/* Background image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                
                {/* Visual Overlay Gredients */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                
                {/* Absolute Top Badge */}
                <div className="absolute top-4 left-4 bg-brand-cyan text-brand-dark px-3 py-1.5 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                  {item.conversionRate}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold block mb-1">
                      {item.niche}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Bottom part / Description and conversion CTA */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Result label showcase */}
                  <div className="flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-xl px-3 py-2">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                    <span className="text-[11px] font-medium text-brand-green font-mono uppercase tracking-wide">
                      {item.resultLabel}
                    </span>
                  </div>
                </div>

                {/* Simulated Hover action indicator */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold uppercase text-brand-cyan group-hover:text-white transition">
                  <span>Analisar Estrutura de Sucesso</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Modal Structure */}
        {selectedItem && (
          <div 
            ref={backdropRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md overflow-y-auto"
            onClick={handleCloseModal}
          >
            <div 
              ref={modalRef}
              className="relative w-full max-w-4xl bg-[#161616] border border-white/15 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] focus:outline-none text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button top-right */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition cursor-pointer"
                aria-label="Minimizar detalhes"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Layout Body */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Visual Showcase - Side column (4 cols) */}
                <div className="md:col-span-5 relative h-48 md:h-auto bg-brand-dark overflow-hidden flex flex-col justify-end p-8 border-b md:border-b-0 md:border-r border-white/10">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/70 to-transparent" />
                  
                  {/* Badge conversion */}
                  <div className="relative z-10 mb-auto">
                    <span className="inline-block bg-brand-green text-brand-dark px-3.5 py-1.5 rounded-lg font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                      ESTATÍSTICA REAL DE SUPORTE
                    </span>
                    <div className="text-4xl font-display font-extrabold text-white text-glow-green mt-1">
                      {selectedItem.conversionRate}
                    </div>
                  </div>

                  <div className="relative z-10 mt-12">
                    <span className="text-[10px] font-mono tracking-widest text-[#888] uppercase block mb-1">
                      Segmento Atendido
                    </span>
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider bg-white/5 border border-white/10 px-3 py-1 rounded-full inline-block">
                      {selectedItem.niche}
                    </span>
                  </div>
                </div>

                {/* Copywriting and Specs Content - Main column (7 cols) */}
                <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="border-b border-white/5 pb-5 mb-5">
                      <div className="flex items-center gap-2 text-brand-cyan mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold">Diagnóstico Clínico de Conversão</span>
                      </div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight modal-fade-in">
                        {selectedItem.title}
                      </h3>
                      <p className="text-xs text-brand-green font-semibold mt-2 flex items-center gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green" />
                        {selectedItem.resultLabel}
                      </p>
                    </div>

                    {/* Description Strategy */}
                    <div className="mb-6">
                      <h4 className="text-[10px] font-mono uppercase text-gray-500 tracking-wider mb-2 font-bold">A Psicologia Aplicada na Copy:</h4>
                      <p className="text-sm text-gray-300 leading-relaxed modal-fade-in">
                        {selectedItem.description}
                      </p>
                    </div>

                    {/* Highlights (Speed, Performance) */}
                    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <h4 className="text-[10px] font-mono uppercase text-gray-500 tracking-wider mb-2 font-bold">Pilares de Código:</h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {selectedItem.highlights.map((high, i) => (
                            <li key={i} className="flex items-start gap-1.5 modal-fade-in">
                              <Zap className="w-3.5 h-3.5 text-brand-cyan mt-0.5 flex-shrink-0" />
                              <span>{high}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key features of conversion */}
                      <div>
                        <h4 className="text-[10px] font-mono uppercase text-gray-500 tracking-wider mb-2 font-bold font-semibold">Funções de Captura:</h4>
                        <ul className="space-y-1.5 text-xs text-gray-400">
                          {selectedItem.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-1.5 modal-fade-in">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green mt-0.5 flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic CTA */}
                  <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                      <a
                        href="https://wa.me/5585920015464?text=Olá,%20vi%20o%20caso%20no%20portfólio%20e%20gostaria%20de%20uma%20estrutura%20de%20conversão%20para%20meu%20negócio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto relative group inline-flex items-center justify-center px-6 py-3 font-display font-bold uppercase tracking-wider text-[11px] rounded-full bg-brand-green text-brand-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] cursor-pointer"
                      >
                        Quero uma Estrutura Como Esta <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
                      </a>
                      
                      {selectedItem.projectUrl && (
                        <a
                          href={selectedItem.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-6 py-3 border border-brand-cyan/30 text-brand-cyan hover:text-white hover:border-brand-cyan hover:bg-brand-cyan/10 rounded-full transition text-[11px] font-mono font-bold uppercase tracking-wider cursor-pointer text-center"
                        >
                          Acessar Site Ao Vivo
                        </a>
                      )}
                    </div>

                    <button
                      onClick={handleCloseModal}
                      className="w-full sm:w-auto px-6 py-3 border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition text-[11px] font-mono uppercase tracking-wider cursor-pointer text-center"
                    >
                      Voltar
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
