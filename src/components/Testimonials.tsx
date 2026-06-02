import { motion } from "motion/react";
import { Star, CheckCircle, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-brand-dark/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Glow ambient background light */}
        <div className="absolute top-1/2 left-10 w-[200px] h-[200px] bg-brand-cyan/5 rounded-full blur-[90px] pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-mono tracking-[0.25em] text-brand-cyan uppercase font-bold bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            QUEM CONFIA NA NEXS
          </span>
          <h2 className="mt-6 font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Prova Real de <span className="text-brand-green">Resultados Concretos</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Muito mais que depoimentos vagos, nossos clientes medem o impacto da nova Landing Page de Alta Conversão no faturamento de suas clínicas, estúdios e escritórios locais da região.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={t.id}
              className="rounded-2xl border border-white/10 bg-brand-grid/40 p-8 flex flex-col justify-between relative hover:border-brand-green/30 transition-all duration-300 group"
            >
              {/* Star rating Row */}
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-green text-brand-green" />
                  ))}
                </div>

                <p className="text-sm text-gray-300 italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Row with dynamic conversion tag indicators */}
              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                  />
                  <div className="text-left">
                    <span className="block font-display font-bold text-sm text-white">
                      {t.name}
                    </span>
                    <span className="block text-[11px] text-gray-500">
                      {t.role} • {t.business}
                    </span>
                  </div>
                </div>

                {/* Growth Impact Tag Badge */}
                <div className="px-3 py-1.5 rounded-lg bg-brand-green/10 border border-brand-green/20">
                  <span className="text-[10px] font-mono font-bold text-brand-green whitespace-nowrap uppercase">
                    {t.impactBadge}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Local Verification Statement */}
        <div className="mt-16 text-center max-w-xl mx-auto p-5 rounded-xl border border-white/5 bg-brand-dark">
          <div className="flex items-center justify-center gap-2 text-brand-cyan mb-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">
              VERACIDADE DOS DADOS GARANTIDA
            </span>
          </div>
          <p className="text-[11px] text-gray-500">
            Todos os depoimentos e melhorias de taxa de cliques (CTR) e ligações via WhatsApp são medidos de forma auditada no Google Analytics e nos faturamentos comprovados dos clientes.
          </p>
        </div>

      </div>
    </section>
  );
}
