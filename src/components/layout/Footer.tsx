import { Instagram } from 'lucide-react';
import { GradientText } from '../ui/GradientText';
import { siteConfig, getWhatsAppLink } from '../../config/site';

export function Footer() {
  const contactLink = getWhatsAppLink("Olá, Gostaria de entrar em contato.");

  return (
    <footer className="bg-black py-12 px-6 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-2xl font-black tracking-tighter leading-none italic text-white select-none">
            NEXUS<GradientText className="ml-1 select-none">CONVERT BR</GradientText>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 mt-2 block select-none">
            {siteConfig.slogan}
          </span>
        </div>
        
        <nav className="flex items-center gap-6 text-sm text-slate-500" aria-label="Rodapé">
          <a 
            href={siteConfig.links.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" aria-hidden="true" />
            <span>Instagram</span>
          </a>
          <a 
            href={contactLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            Contato
          </a>
        </nav>
        
        <p className="text-xs text-slate-600 mt-6 md:mt-0">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
