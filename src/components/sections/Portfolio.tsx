import { ArrowRight } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { PrimaryButton } from '../ui/PrimaryButton';
import { getWhatsAppLink } from '../../config/site';

export function Portfolio() {
  const ctaLink = getWhatsAppLink("Olá, vi o projeto da Clínica Paixão e quero um projeto focado em resultados.");

  return (
    <section id="portfolio" className="py-24 bg-slate-900 px-6 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 w-full relative" aria-hidden="true">
          {/* Minimalist browser mockup representation */}
          <div className="bg-slate-800 rounded-t-xl p-3 flex gap-2 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="bg-white rounded-b-xl overflow-hidden min-h-[300px] border border-slate-700 border-t-0 p-8 flex flex-col items-center justify-center text-slate-900 text-center relative aspect-video">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
            <div className="relative z-10 space-y-4 max-w-sm">
              <span className="text-4xl" role="img" aria-label="Dente representativo">🦷</span>
              <h4 className="text-2xl font-bold text-slate-900">Clínica Paixão</h4>
              <p className="text-slate-600 font-medium pb-4 border-b border-slate-300">
                Estrutura digital com foco em agendamentos fáceis.
              </p>
              <a 
                href="https://clinicapaixao.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-4 px-6 py-2 bg-slate-900 text-white font-bold rounded-lg text-sm hover:scale-105 transition-transform shadow-lg shadow-slate-400/50"
              >
                Acessar projeto real
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Prova de Execução: <br/>
            <GradientText>A Clínica Paixão.</GradientText>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Eles precisavam de mais credibilidade online e uma forma de captar e organizar avaliações odontológicas sem transformar o WhatsApp da secretária em um caos.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            Nós projetamos e entregamos uma página veloz, limpa e com hierarquia visual totalmente pensada para o paciente leigo entender o valor da clínica e agendar a avaliação em poucos passos.
          </p>
          <div className="pt-4">
             <PrimaryButton href={ctaLink} icon={ArrowRight}>
               Quero um projeto nível Clínica Paixão
             </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
