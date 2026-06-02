import { motion } from "motion/react";
import { ArrowUpRight, Flame, Star, CheckCircle, Shield } from "lucide-react";

export default function Hero() {
  const handleScrollToCalculator = () => {
    const target = document.getElementById("simulador-roi");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col items-center justify-center overflow-hidden bg-brand-dark bg-grid-pattern">
      {/* Background gradients for radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Animated tag bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
          </span>
          <span className="text-xs font-mono tracking-wide text-gray-300 uppercase">
            MÉTODO VALIDADO • ALTA CONVERSÃO 2026
          </span>
        </motion.div>

        {/* Dynamic Titles with stagger */}
        <div className="max-w-4xl mx-auto mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1]"
          >
            Sua Landing Page Premium com <span className="text-glow-green text-brand-green font-extrabold">Agendamento Automático</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Aceleramos seu faturamento com páginas rápidas de alta conversão. Transforme cliques em clientes qualificados direto no seu WhatsApp.
          </motion.p>
        </div>

        {/* Pulsating Trigger CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={handleScrollToCalculator}
            className="w-full sm:w-auto relative group inline-flex items-center justify-center px-8 py-4 font-display font-bold uppercase tracking-wider text-xs rounded-full bg-brand-green text-brand-dark transition-all duration-300 transform hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Agendar Minha Estratégia <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="absolute -inset-1 rounded-full bg-brand-green opacity-30 blur-sm animate-pulse"></span>
          </button>

          <a
            href="#comunidades"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("comunidades")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-display font-medium text-xs uppercase tracking-wider text-white border border-white/10 rounded-full hover:border-brand-cyan hover:bg-white/5 transition-all duration-200"
          >
            Ver Modelos por Segmento
          </a>
        </motion.div>

        {/* Floating elements / Performance mock container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative max-w-5xl mx-auto rounded-2xl border border-white/5 bg-brand-grid/40 p-2 backdrop-blur-xl glow-cyan"
        >
          <div className="rounded-xl border border-white/10 bg-brand-dark/90 overflow-hidden shadow-2xl relative">
            {/* Window header decoration */}
            <div className="px-4 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="text-[10px] font-mono text-gray-400">
                https://nexusconvert.br/performance-ideal
              </div>
              <div className="w-10" />
            </div>

            {/* Dashboard Mock Grid / Conversion Demonstration */}
            <div className="p-4 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {/* Speed Metric */}
              <div className="p-5 rounded-lg border border-white/5 bg-white/[0.01]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-brand-green uppercase font-semibold">
                    Velocidade de Acesso
                  </span>
                  <Flame className="w-4 h-4 text-brand-green" />
                </div>
                <div className="font-display font-bold text-4xl text-white">
                  Menos de 1s
                </div>
                <p className="mt-2 text-xs text-gray-400">
                  Carregamento instantâneo. Não perca clientes e deixe de gastar com anúncios ineficientes.
                </p>
                {/* Horizontal Bar */}
                <div className="mt-4 w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="w-full h-full bg-brand-green rounded-full shadow-[0_0_8px_#39FF14]"></div>
                </div>
              </div>

              {/* Conversion Level */}
              <div className="p-5 rounded-lg border border-white/5 bg-white/[0.01]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-brand-cyan uppercase font-semibold">
                    Geração de Contatos
                  </span>
                  <Star className="w-4 h-4 text-brand-cyan" />
                </div>
                <div className="font-display font-bold text-4xl text-white">
                  Alta Conversão
                </div>
                <p className="mt-2 text-xs text-gray-400">
                  Copy voltada a agendamentos diretos. Otimize os cliques direto para seu WhatsApp de contato.
                </p>
                {/* Horizontal Bar */}
                <div className="mt-4 w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="w-[95%] h-full bg-brand-cyan rounded-full shadow-[0_0_8px_#00E5FF]"></div>
                </div>
              </div>

              {/* Security and Stability */}
              <div className="p-5 rounded-lg border border-white/5 bg-white/[0.01]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-purple-400 uppercase font-semibold">
                    Estabilidade Absoluta
                  </span>
                  <Shield className="w-4 h-4 text-purple-400" />
                </div>
                <div className="font-display font-bold text-4xl text-white">
                  100% Blindado
                </div>
                <p className="mt-2 text-xs text-gray-400">
                  Seu site no ar e seguro 24h por dia. Esqueça quedas ou travamentos repentinos.
                </p>
                {/* Horizontal Bar */}
                <div className="mt-4 w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="w-[100%] h-full bg-violet-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative side items */}
          <div className="absolute -bottom-6 -right-6 bg-brand-green text-brand-dark px-4 py-2 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg hidden sm:block">
            🔋 CARREGAMENTO EM 0.4s
          </div>
          <div className="absolute -top-6 -left-6 bg-brand-cyan text-brand-dark px-4 py-2 rounded-lg font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg hidden sm:block">
            🎯 FOCO 100% AGENDAMENTOS
          </div>
        </motion.div>
      </div>
    </section>
  );
}
