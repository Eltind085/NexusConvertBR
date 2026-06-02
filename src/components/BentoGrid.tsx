import { motion } from "motion/react";
import { Zap, Clock, Palette, ShieldCheck, Award, Sparkles } from "lucide-react";

export default function BentoGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="diferenciais" className="py-24 bg-brand-dark/50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 scroll-mt-24">
          <span className="text-[11px] font-mono tracking-[0.25em] text-brand-cyan uppercase font-bold bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            DIFERENCIAIS DA LANDING PAGE PREMIUM
          </span>
          <h2 className="mt-6 font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Engenharia de Conversão para <span className="text-brand-green">Alavancar seu Negócio</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Diga adeus a sites lentos ou plataformas genéricas que travam. Entregamos a estrutura focada na conversão rápida do seu cliente.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          {/* Card 1: Criação de Landing Pages de Alta Performance (Row-span-2) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 rounded-2xl border border-white/10 bg-brand-grid/40 p-8 flex flex-col justify-between relative group overflow-hidden glow-cyan transition-all duration-300"
          >
            {/* Ambient hover glow */}
            <div className="absolute -inset-x-20 -inset-y-25 bg-gradient-to-r from-brand-cyan/5 to-transparent rounded-full blur-[80px] pointer-events-none group-hover:opacity-100 transition duration-300" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-6 text-brand-cyan">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-brand-cyan uppercase font-bold">
                MÁXIMA VELOCIDADE E CONVERSÃO
              </span>
              <h3 className="mt-3 font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Estrutura de Alto Valor e Velocidade Real
              </h3>
              <p className="mt-3 text-sm text-gray-400 max-w-lg leading-relaxed">
                Páginas ultra-rápidas que abrem em menos de 1 segundo. Garanta que seus clientes não desistam do contato pela demora de carregamento no celular.
              </p>
            </div>

            {/* Micro visual indicator representation */}
            <div className="mt-6 flex flex-wrap gap-2 relative z-10">
              <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-md font-mono text-[10px] text-gray-300">
                • Abertura Imediata
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-md font-mono text-[10px] text-gray-300">
                • Copywriting Psicológico
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-md font-mono text-[10px] text-gray-300">
                • Design de Luxo
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/5 rounded-md font-mono text-[10px] text-gray-300">
                • Foco Comercial
              </span>
            </div>
          </motion.div>

          {/* Card 2: Ferramentas de Agendamento */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-white/10 bg-brand-grid/40 p-6 flex flex-col justify-between relative group overflow-hidden hover:border-brand-green/30 transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-4 text-brand-green">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg text-white">
                Agendamento Facilitado
              </h4>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Botões diretos para o WhatsApp ou seu sistema atual, encurtando o caminho para o paciente marcar a consulta.
              </p>
            </div>
            <div className="font-mono text-[10px] text-brand-green font-semibold mt-4">
              Menos Cliques • Mais Agendamentos
            </div>
          </motion.div>

          {/* Card 3: Padrão Visual de Luxo */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-white/10 bg-brand-grid/40 p-6 flex flex-col justify-between relative group overflow-hidden hover:border-brand-cyan/30 transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 text-brand-cyan">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg text-white">
                Identidade Premium
              </h4>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Design refinado que fortalece sua autoridade, justificando o alto valor que você cobra pelo seu serviço.
              </p>
            </div>
            <div className="font-mono text-[10px] text-brand-cyan font-semibold mt-4">
              Design Focado em Tickets Elevados
            </div>
          </motion.div>

          {/* Card 4: Foco Estrito em Conversão */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-white/10 bg-brand-grid/40 p-6 flex flex-col justify-between relative group overflow-hidden hover:border-brand-cyan/20 transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 text-violet-400">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg text-white">
                Textos que Vendem
              </h4>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Usamos roteiros persuasivos. Criamos desejo, removemos objeções e forçamos o cliente a querer entrar em contato.
              </p>
            </div>
            <div className="font-mono text-[10px] text-violet-400 font-semibold mt-4">
              Copys • Gatilhos Mentais
            </div>
          </motion.div>

          {/* Card 5: Estabilidade Absoluta */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-white/10 bg-brand-grid/40 p-6 flex flex-col justify-between relative group overflow-hidden hover:border-brand-green/20 transition-all duration-300 animate-glow"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-4 text-brand-green">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg text-white">
                Hospedagem Blindada
              </h4>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Sem quedas ou telas em branco. Sua estrutura rodando 100% online, recepcionando as campanhas que você já investiu em tráfego.
              </p>
            </div>
            <div className="font-mono text-[10px] text-brand-green font-semibold mt-4">
              Site Estável • 24 Horas
            </div>
          </motion.div>

          {/* Card 6: Totalmente Otimizada para Celular */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-white/10 bg-brand-grid/40 p-6 flex flex-col justify-between relative group overflow-hidden hover:border-brand-cyan/20 transition-all duration-300"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-4 text-brand-cyan">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-lg text-white">
                Perfeito para Celular
              </h4>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                Criamos para a tela do smartphone primeiro, com navegação natural que direciona direto pro botão de contato final.
              </p>
            </div>
            <div className="font-mono text-[10px] text-brand-cyan font-semibold mt-4">
              90% dos Leads vêm do Mobile
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
