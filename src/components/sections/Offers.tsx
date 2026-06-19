import { CheckCircle2 } from 'lucide-react';
import { PrimaryButton } from '../ui/PrimaryButton';
import { getWhatsAppLink } from '../../config/site';

export function Offers() {
  return (
    <section id="ofertas" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Qual é a sua urgência atual?</h2>
          <p className="text-lg text-slate-400">Escolha o caminho mais alinhado com o seu foco comercial para iniciarmos o projeto rápido.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col hover:border-cyan-500/30 transition-all">
            <h3 className="text-xl font-black text-white mb-2">Começar a Captar</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">Para quem quer rodar anúncios e captar leads amanhã.</p>
            <div className="mb-8">
              <span className="text-cyan-400 font-black text-2xl border-b border-slate-800 pb-2 w-full block">Landing Page</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" aria-hidden="true" /> 
                Foco único em conversão (1 botão principal)
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" aria-hidden="true" /> 
                Copy persuasiva orientada à dor do cliente
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" aria-hidden="true" /> 
                Link direto com seu WhatsApp ou formulário
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" aria-hidden="true" /> 
                Ultra veloz (ótimo para pontuação no Google Ads)
              </li>
            </ul>
            <a 
              href={getWhatsAppLink("Olá, gostaria de solicitar um orçamento para uma Landing Page.")}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full text-center py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Solicitar Orçamento
            </a>
          </article>

          {/* Card 2 - Highlight */}
          <article className="bg-slate-900 border border-cyan-500/50 rounded-2xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(6,182,212,0.1)] transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-green-500 text-slate-950 font-bold px-4 py-1 rounded-full text-sm">Mais Escolhido</div>
            <h3 className="text-xl font-black text-white mb-2 mt-2">Organizar & Elevar</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">Para serviços presenciais, estéticas e consultórios.</p>
            <div className="mb-8">
              <span className="text-white font-black text-2xl border-b border-slate-800 pb-2 w-full block">Site + Agenda Online</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" aria-hidden="true" /> 
                Todas as vantagens da Landing Page
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" aria-hidden="true" /> 
                Sistema nativo de agendamento 24h
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" aria-hidden="true" /> 
                Abas institucionais geradoras de confiança
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" aria-hidden="true" /> 
                O cliente marca a consulta sem precisar do seu tempo
              </li>
            </ul>
            <PrimaryButton 
              href={getWhatsAppLink("Olá, quero organizar e elevar meu negócio com Site e Agenda Online.")}
              className="w-full text-center"
            >
              Falar Agora no WhatsApp
            </PrimaryButton>
          </article>

          {/* Card 3 */}
          <article className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col hover:border-green-500/30 transition-all">
            <h3 className="text-xl font-black text-white mb-2">Vender Online</h3>
            <p className="text-slate-400 text-sm mb-6 h-10">Para quem comercializa produtos e quer escalar.</p>
            <div className="mb-8">
              <span className="text-green-400 font-black text-2xl border-b border-slate-800 pb-2 w-full block">E-commerce Pró</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" aria-hidden="true" /> 
                Loja virtual completa 100% gerenciável
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" aria-hidden="true" /> 
                Integração com meios de pagamento
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" aria-hidden="true" /> 
                Controle de inventário e cálculo frete
              </li>
              <li className="flex gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" aria-hidden="true" /> 
                Organização de vitrine por psicologia de compra
              </li>
            </ul>
            <a 
              href={getWhatsAppLink("Olá, gostaria de solicitar um orçamento para um E-commerce.")}
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full text-center py-4 bg-slate-800 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
            >
              Solicitar Orçamento
            </a>
          </article>

        </div>
      </div>
    </section>
  );
}
