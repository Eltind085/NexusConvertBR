import { motion } from "motion/react";

const BENEFITS = [
  "CARREGAMENTO ZERO EM 0.4s",
  "HTML5 / CSS3 CÓDIGO LIMPO",
  "NENHUM PLUGIN PARA ATUALIZAR",
  "OTIMIZADO PARA GOOGLE MAPS & LOCAL SEO",
  "ANÁLISES E TELEMETRIA POWER BI",
  "AUTOMAÇÕES INTELIGENTES DE COPYS COM IA",
  "BACKUPS SEGUROS COM CONTROLE DE VERSÃO",
  "SUPORTE ULTRA-PRESTÁVEL EM CANAL INDIVIDUAL"
];

export default function AuthorityMarquee() {
  const repeatedBenefits = [...BENEFITS, ...BENEFITS, ...BENEFITS];

  return (
    <div className="relative py-8 bg-[#161616] border-y border-white/5 overflow-hidden w-full flex">
      {/* Decorative side fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      {/* Loop Track using infinite motion */}
      <div className="flex w-max relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
          className="flex gap-16 whitespace-nowrap px-8"
        >
          {repeatedBenefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {/* Custom tiny glowing neon cyan indicator dot */}
              <div className="w-2 h-2 rounded-full bg-brand-cyan hover:bg-brand-green transition duration-300 shadow-[0_0_8px_#00E5FF]" />
              <span className="font-display font-medium text-xs tracking-[0.15em] text-gray-300 uppercase">
                {benefit}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
