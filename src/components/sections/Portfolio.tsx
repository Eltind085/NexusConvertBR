import { ArrowRight } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { PrimaryButton } from '../ui/PrimaryButton';
import { getWhatsAppLink } from '../../config/site';

export function Portfolio() {
  const ctaLink = getWhatsAppLink("Olá, vi o projeto da Clínica Paixão e quero um projeto focado em resultados.");

  return (
    <section id="portfolio" className="py-24 bg-slate-900 px-6 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 w-full flex flex-col items-center justify-center relative" aria-hidden="true">
          {/* iPhone 17 Pro Max Device Frame Mockup */}
          <div className="relative w-full max-w-[320px] aspect-[9/19.5] bg-slate-950 rounded-[50px] p-3 border-4 border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),_0_0_40px_rgba(6,182,212,0.15)] ring-1 ring-slate-700/50">
            {/* Speaker lines and hardware elements */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-slate-800 rounded-full z-30" />
            
            {/* Side Buttons representation */}
            <div className="absolute left-[-6px] top-28 w-[2px] h-8 bg-slate-800 rounded-l" />
            <div className="absolute left-[-6px] top-40 w-[2px] h-12 bg-slate-800 rounded-l" />
            <div className="absolute left-[-6px] top-56 w-[2px] h-12 bg-slate-800 rounded-l" />
            <div className="absolute right-[-6px] top-36 w-[2px] h-16 bg-slate-800 rounded-r" />

            {/* Inner mobile screen */}
            <div className="relative w-full h-full bg-slate-950 rounded-[38px] overflow-hidden border border-slate-900/50 shadow-inner flex flex-col justify-end">
              {/* Dynamic Island */}
              <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-between px-2.5 shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800/40 relative flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-900/50" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              </div>

              {/* Real-time Mobile Iframe */}
              <iframe 
                src="https://clinicapaixao.com.br" 
                className="absolute inset-0 border-0 bg-slate-950 select-none" 
                title="Clínica Paixão Real-time Mobile Preview"
                style={{ 
                  contentVisibility: 'auto',
                  width: '142.86%',
                  height: '142.86%',
                  transform: 'scale(0.7)',
                  transformOrigin: 'top left'
                }}
              />

              {/* iPhone Home Indicator */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full z-20 pointer-events-none" />

              {/* Action Button Overlay */}
              <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center px-4">
                <a 
                  href="https://clinicapaixao.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full px-4 py-3 bg-white text-slate-950 font-bold rounded-xl text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] flex items-center justify-center gap-1.5"
                >
                  Acessar projeto real
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Prova de Execução: <br/>
            <GradientText>A Clínica Paixão.</GradientText>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            É um exemplo de projeto voltado para a apresentação profissional de serviços de fisioterapia, estética e massoterapia, com foco em transmitir confiança, organizar as informações com clareza e facilitar o contato com novos clientes.
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
