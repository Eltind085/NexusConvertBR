import { CheckCircle2, ChevronDown, LineChart, Target } from 'lucide-react';
import { GradientText } from '../ui/GradientText';

const benefits = [
  "Páginas pensadas para antecipar e quebrar objeções de compra",
  "Comunicação direta para atrair contato, não apenas visualizações",
  "Estrutura otimizada para quem faz anúncios no Google e Meta Ads",
  "Layout construído para gerar autoridade imediata no cliente final"
];

export function Solution() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            A resposta não é "fazer um site". <br />
            <GradientText>É criar uma estrutura de conversão.</GradientText>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Na NEXUS CONVERT BR, nós não gastamos tempo criando efeitos inúteis. Aplicamos psicologia e arquitetura de vendas na tela para facilitar uma única coisa: <strong>a decisão do cliente.</strong>
          </p>
          
          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-300 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex-1 w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-500/20 blur-3xl rounded-full" />
          
          <div className="flex flex-col gap-4 relative z-10">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-xl flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 mb-1">Visualizações</p>
                <p className="text-xl font-bold text-white">12.450</p>
              </div>
              <LineChart className="w-8 h-8 text-slate-600" />
            </div>
            
            <div className="flex justify-center my-2">
              <ChevronDown className="w-6 h-6 text-slate-600" />
            </div>
            
            <div className="bg-gradient-to-r from-cyan-900/40 to-green-900/40 border border-cyan-500/30 p-6 rounded-xl shadow-2xl">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-bold text-cyan-400">Contatos e Agendamentos</p>
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-3xl font-black text-white">+482%</p>
              <p className="text-xs text-slate-300 mt-2">Diferença clara entre um "site institucional" e uma Landing Page comercial.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
