import { Instagram } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { siteConfig, getWhatsAppLink } from '../../config/site';

export function Navbar() {
  const budgetLink = getWhatsAppLink("Olá, gostaria de solicitar um orçamento para meu negócio.");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter leading-none italic select-none">
            NEXUS
            <GradientText className="ml-1 select-none">CONVERT BR</GradientText>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mt-1 select-none">
            {siteConfig.slogan}
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#problema" className="hover:text-white transition-colors">A Realidade</a>
          <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Prova Real</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <a 
            href={siteConfig.links.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Instagram da Nexus Convert BR"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href={budgetLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-2.5 bg-slate-100 text-slate-950 font-bold rounded-md hover:bg-white hover:scale-105 transition-transform text-sm"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </nav>
  );
}
