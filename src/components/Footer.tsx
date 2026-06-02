import { ArrowUp, ArrowUpRight, Github, Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark border-t border-white/5 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top bar with logo and back to top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-white/5 pb-10 mb-10 text-center sm:text-left">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1a1a1a] border border-white/10">
              <svg className="w-5 h-5 filter drop-shadow-[0_0_4px_#39FF14]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L9 13L14 16L20 7" stroke="url(#logo-grad-foot)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="4" cy="18" r="2.5" fill="#00E5FF" />
                <circle cx="20" cy="7" r="2.5" fill="#39FF14" />
                <defs>
                  <linearGradient id="logo-grad-foot" x1="4" y1="18" x2="20" y2="7" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00E5FF" />
                    <stop offset="1" stopColor="#39FF14" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-tight text-white">
                NEXUS <span className="text-brand-cyan">CONVERT</span> BR
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#444] block -mt-1 block">
                CÓDIGO PURO 2026
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 text-gray-400 hover:text-white transition cursor-pointer flex items-center gap-2 text-xs font-mono uppercase"
          >
            Subir ao Topo <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Link directories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-left">
          {/* Direct Address / Contact info */}
          <div className="md:col-span-2">
            <span className="text-[10px] font-mono uppercase text-gray-500 block tracking-wider mb-4 font-bold">
              CONTATO DIRETO
            </span>
            <p className="text-sm text-gray-400 max-w-sm mb-6 leading-relaxed">
              Criamos páginas rápidas e direto ao ponto para faturar mais. Entre em contato e acelere suas vendas hoje.
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:nexusconvertbr@hotmail.com" 
                className="flex items-center gap-2.5 text-xs text-gray-400 hover:text-brand-cyan transition"
              >
                <Mail className="w-4 h-4 text-brand-cyan" /> nexusconvertbr@hotmail.com
              </a>
              <a 
                href="https://wa.me/5585920015464?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20landing%20pages"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-gray-400 hover:text-brand-green transition"
              >
                <Phone className="w-4 h-4 text-brand-green" /> WhatsApp: (85) 92001-5464
              </a>
              <a 
                href="https://www.instagram.com/nexusconvertbr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-gray-400 hover:text-pink-500 transition"
              >
                <svg className="w-4 h-4 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram: @nexusconvertbr
              </a>
            </div>
          </div>

          {/* Quick links map */}
          <div>
            <span className="text-[10px] font-mono uppercase text-gray-500 block tracking-wider mb-4 font-bold">
              MAPA DO SITE
            </span>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#diferenciais" className="hover:text-white transition">Diferenciais Técnicos</a>
              </li>
              <li>
                <a href="#comunidades" className="hover:text-white transition">Nossos Segmentos</a>
              </li>
              <li>
                <a href="#simulador-roi" className="hover:text-white transition">Simulador Financeiro ROI</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition">Resultados Comprovados</a>
              </li>
            </ul>
          </div>

          {/* Standards & Certifications badge */}
          <div>
            <span className="text-[10px] font-mono uppercase text-gray-500 block tracking-wider mb-4 font-bold">
              ESTABILIDADE & PADRÕES
            </span>
            <div className="space-y-4">
              <div className="flex items-start gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3">
                <ShieldCheck className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    HOSPEDAGEM ULTRA RÁPIDA
                  </span>
                  <span className="block text-[10px] text-gray-500 mt-1">
                    Páginas estáveis no ar com máxima velocidade de abertura e segurança.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-white/[0.02] border border-white/5 rounded-xl p-3">
                <ShieldCheck className="w-4 h-4 text-brand-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                    LGPD COMPLIANT
                  </span>
                  <span className="block text-[10px] text-gray-500 mt-1">
                    Termos de privacidade adequados às novas regras federais em saúde e advocacia.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom bar with copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="text-xs text-gray-500">
            © Copyright 2026 <span className="text-white font-bold">Nexus Convert BR</span>. Todos os direitos reservados.
          </div>
          <div className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            Aceleração e Conversão Inteligente
          </div>
        </div>

      </div>
    </footer>
  );
}
