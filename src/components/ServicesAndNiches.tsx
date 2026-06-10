import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, ArrowRight, Sparkles, AlertCircle, Phone } from "lucide-react";
import { NICHES, CATEGORIES } from "../data";

export default function ServicesAndNiches() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNiches = NICHES.filter((niche) => {
    const matchesCategory = selectedCategory === "all" || niche.category === selectedCategory;
    const matchesSearch = niche.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          niche.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleConsultation = (nicheName: string) => {
    const text = `Olá, gostaria de saber mais sobre a criação de uma página de vendas para o meu segmento: ${nicheName}`;
    window.open(`https://wa.me/5585920015464?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="comunidades" className="py-24 bg-brand-dark relative scroll-mt-20">
      {/* Absolute Glow Lights */}
      <div className="absolute top-1/3 left-10 w-[250px] h-[250px] bg-brand-cyan/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[250px] h-[250px] bg-brand-green/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-brand-green uppercase font-bold bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            EXPLORAR SEGMENTOS
          </span>
          <h2 className="mt-6 font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Soluções Feitas Para o <span className="text-brand-cyan">Seu Nicho</span> de Atuação
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Páginas projetadas com gatilhos de venda específicos para o seu setor de mercado, garantindo lucros ao invés de despesas com acessos que não compram.
          </p>
        </div>

        {/* Search and Category Filter Header */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 p-3 rounded-2xl border border-white/5 bg-brand-grid/30 backdrop-blur">
          {/* Categories Tab Row */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-brand-green text-brand-dark font-semibold shadow-[0_0_15px_rgba(57,255,20,0.2)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar segmento (Ex: dentista)..."
              className="w-full pl-10 pr-4 py-2.5 bg-brand-dark/80 rounded-xl border border-white/10 text-xs font-medium text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
          </div>
        </div>

        {/* Niches Dynamic Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredNiches.map((niche) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.90 }}
                transition={{ duration: 0.3 }}
                key={niche.id}
                onClick={() => handleConsultation(niche.name)}
                className="group relative rounded-2xl border border-white/10 bg-brand-grid/30 hover:bg-brand-grid/60 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between glow-cyan-hover"
              >
                {/* Card visual showcase */}
                <div className="relative h-56 overflow-hidden w-full">
                  {/* Background image */}
                  <img
                    src={niche.imageUrl}
                    alt={niche.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  
                  {/* Visual Overlay Gredients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                  
                  {/* Absolute Top Badge */}
                  <div className="absolute top-4 left-4 bg-brand-green text-brand-dark px-3 py-1.5 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {niche.conversionBoost} de Conversão
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-brand-green uppercase font-bold block mb-1">
                        ★ RECOMENDADO
                      </span>
                      <h3 className="font-display font-bold text-xl text-white tracking-tight">
                        {niche.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Bottom part / Description and conversion CTA */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Result label showcase */}
                    <div className="flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 rounded-xl px-3 py-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse shrink-0" />
                      <span className="text-[11px] font-medium text-brand-green font-mono uppercase tracking-wide">
                        {niche.statsLabel}
                      </span>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-2 font-semibold">
                        Recursos Focados em Conversão:
                      </span>
                      {niche.recommendedFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckIcon />
                          <span className="text-xs text-gray-300 leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Hover action indicator */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold uppercase text-brand-cyan group-hover:text-white transition">
                    <span>Falar com Especialista</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State / Customized niche query */}
        {filteredNiches.length === 0 && (
          <div className="max-w-xl mx-auto text-center py-16 border border-white/5 bg-brand-grid/20 rounded-2xl p-8">
            <AlertCircle className="w-12 h-12 text-brand-cyan mx-auto mb-4" />
            <h4 className="font-display font-semibold text-xl text-white">
              Seu segmento específico não está listado?
            </h4>
            <p className="mt-2 text-sm text-gray-400">
              Isso significa apenas que o seu projeto será 100% exclusivo e personalizado. Desenvolvemos landing pages para absolutamente qualquer segmento com os mesmos critérios científicos de conversão.
            </p>
            <button
              onClick={() => handleConsultation("Personalizado")}
              className="mt-6 inline-flex items-center gap-2 bg-brand-green text-brand-dark font-display text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full cursor-pointer hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition"
            >
              Falar de Projeto Exclusivo <Phone className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}
