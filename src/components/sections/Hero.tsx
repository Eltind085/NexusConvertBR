import { motion } from 'motion/react';
import { ArrowRight, Target } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';
import { getWhatsAppLink } from '../../config/site';

export function Hero() {
  const ctaLink = getWhatsAppLink("Olá, vim pelo site e quero estruturar meu negócio digital.");

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 -z-10" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-green-500/10 to-transparent blur-3xl -z-10" aria-hidden="true" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-cyan-400 text-sm font-medium"
        >
          <Target className="w-4 h-4" aria-hidden="true" /> Para negócios que precisam faturar mais
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Seu negócio não precisa de um site bonito.<br className="hidden md:block"/> Precisa de uma <GradientText>máquina de vendas.</GradientText>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
        >
          Construímos páginas e estruturas digitais com um único objetivo: transformar visitantes em contatos, clientes e faturamento para sua empresa.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
        >
          <PrimaryButton icon={ArrowRight} href={ctaLink} className="w-full sm:w-auto">
            Quero estruturar meu negócio
          </PrimaryButton>
          <SecondaryButton href="#portfolio" className="w-full sm:w-auto">
            Ver Resultados Reais
          </SecondaryButton>
        </motion.div>
      </div>
    </section>
  );
}
