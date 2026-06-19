import { ArrowRight } from 'lucide-react';
import { PrimaryButton } from '../ui/PrimaryButton';
import { getWhatsAppLink } from '../../config/site';

export function Closing() {
  const ctaLink = getWhatsAppLink("Olá, estou decidido, quero meu site para vender agora.");

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950 -z-20" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-gradient-to-r from-cyan-600/20 to-green-600/20 blur-3xl -z-10 rounded-full" aria-hidden="true" />
      
      <div className="max-w-4xl mx-auto text-center border border-slate-800/50 rounded-3xl p-12 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Pare de deixar dinheiro <br className="hidden md:block" /> para o seu concorrente.
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Cada dia sem uma apresentação profissional, é um cliente bom e pagador que desiste do seu negócio por falta de confiança.
        </p>
        <PrimaryButton href={ctaLink} icon={ArrowRight} className="text-lg px-10 py-5 w-full sm:w-auto">
          Quero meu site para vender agora
        </PrimaryButton>
      </div>
    </section>
  );
}
