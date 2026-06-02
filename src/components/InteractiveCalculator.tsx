import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, ArrowUpRight, HelpCircle, PhoneCall, BarChart } from "lucide-react";

export default function InteractiveCalculator() {
  const [ticketValue, setTicketValue] = useState(250); // Average service value in R$
  const [currentLeads, setCurrentLeads] = useState(15); // Current monthly client count
  const [customNiche, setCustomNiche] = useState("Clínica / Serviços");

  // Calculated metrics
  // conservative conversion increase of 40% with high-performing page
  const conversionIncreasePercent = 40; 
  const additionalClients = Math.ceil(currentLeads * (conversionIncreasePercent / 100));
  const incrementalRevenue = additionalClients * ticketValue;
  const annualIncrease = incrementalRevenue * 12;

  // Investment cost estimation (e.g. typical premium landing page around R$ 1.500 single investment)
  const estimatedInvestment = 1500;
  const roiMultiplier = ((incrementalRevenue - estimatedInvestment) / estimatedInvestment) * 100;

  const getWhatsAppLink = () => {
    const text = `Olá Nexus Convert! Fiz a simulação de ROI para meu negócio (${customNiche}) com ticket de R$ ${ticketValue} e atualmente captando ${currentLeads} clientes. Gostaria de entender como podemos garantir esse acréscimo de R$ ${incrementalRevenue.toLocaleString("pt-BR")} mensais!`;
    return `https://wa.me/5585920015464?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="simulador-roi" className="py-24 bg-brand-dark bg-grid-pattern relative border-y border-white/5 scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy and inputs */}
          <div className="lg:col-span-5 text-left">
            <span className="text-[11px] font-mono tracking-[0.25em] text-brand-green uppercase font-bold bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
              SIMULAÇÃO REALISTA • PREVISÃO DE CRESCIMENTO
            </span>
            <h2 className="mt-6 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Simule o Impacto no <span className="text-brand-green">Seu Faturamento</span>
            </h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Diferente de agências tradicionais que criam sites lentos ou complicados, nós desenvolvemos landing pages premium focadas inteiramente em **fazer as pessoas clicarem e entrarem em contato com você**. Faça sua simulação e veja o potencial invisível do seu negócio.
            </p>

            {/* Input range sliders */}
            <div className="mt-10 space-y-8">
              {/* Niche selector */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                  1. Qual é o seu nicho / profissão?
                </label>
                <input 
                  type="text"
                  placeholder="Ex: Clínica Odontológica, Advocacia, Estética..."
                  value={customNiche === "Clínica / Serviços" ? "" : customNiche}
                  onChange={(e) => setCustomNiche(e.target.value)}
                  className="w-full bg-[#1c1c1c] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-cyan placeholder:text-gray-600"
                />
              </div>

              {/* Slider 1: Ticket Médio */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    2. Ticket Médio do Serviço / Consulta
                  </label>
                  <span className="font-mono text-xs font-bold text-brand-cyan">
                    R$ {ticketValue.toLocaleString("pt-BR")}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={ticketValue}
                  onChange={(e) => setTicketValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-cyan"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-600 mt-1">
                  <span>R$ 50</span>
                  <span>R$ 5.000</span>
                </div>
              </div>

              {/* Slider 2: Clientes Atuais */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    3. Clientes Captados Atualmente / Mês
                  </label>
                  <span className="font-mono text-xs font-bold text-brand-green">
                    {currentLeads} clientes
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="150"
                  step="1"
                  value={currentLeads}
                  onChange={(e) => setCurrentLeads(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-green"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-600 mt-1">
                  <span>2 clientes</span>
                  <span>150 clientes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results and calculation board */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-brand-grid/40 p-6 sm:p-10 backdrop-blur-xl glow-green relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-brand-green/10 text-brand-green font-mono text-[9px] font-bold rounded-bl-xl border-l border-b border-white/5">
                ESTIMATIVA REALISTA 2026
              </div>

              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-brand-green" />
                <h3 className="font-display font-bold text-xl text-white">
                  Seu Crescimento Acelerado (Sem Pagar Mensalidades para Plataformas Genéricas)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-b border-white/5 pb-8">
                {/* Metric 1 */}
                <div className="p-4 rounded-xl border border-white/5 bg-[#121212]/60">
                  <span className="text-[10px] font-mono uppercase text-gray-400 block tracking-wider">
                    Novos Contatos Adicionais Estimados
                  </span>
                  <div className="mt-2 font-display font-extrabold text-3xl text-brand-cyan">
                    + {additionalClients} <span className="text-xs text-gray-400 font-sans font-normal">mensais</span>
                  </div>
                  <p className="mt-1 text-[10px] text-gray-500">
                    Estimativa conservadora de +40% na performance da página.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-xl border border-white/5 bg-[#121212]/60">
                  <span className="text-[10px] font-mono uppercase text-gray-400 block tracking-wider">
                    Faturamento Mensal Adicional
                  </span>
                  <div className="mt-2 font-display font-extrabold text-3xl text-brand-green">
                    R$ {incrementalRevenue.toLocaleString("pt-BR")} <span className="text-xs text-gray-400 font-sans font-normal">/ mês</span>
                  </div>
                  <p className="mt-1 text-[10px] text-gray-500 font-mono text-brand-green/80">
                    ▲ Impacto direto na sua margem líquida.
                  </p>
                </div>
              </div>

              {/* Annual projection */}
              <div className="mb-8 p-5 bg-[#161616] rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 block tracking-wider">
                    Projeção de Acréscimo Faturamento Anual
                  </span>
                  <p className="text-white text-xs mt-1">
                    Com a mesma estrutura estável de hospedagem de código estático rodando 24/7.
                  </p>
                </div>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-white text-right text-glow-green">
                  R$ {annualIncrease.toLocaleString("pt-BR")}
                </div>
              </div>

              {/* CTA trigger with simulated pre-fill info */}
              <div className="space-y-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 bg-brand-green hover:bg-brand-green/90 text-brand-dark rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(57,255,20,0.25)]"
                >
                  Garantir Meus Resultados pelo Whats <ArrowUpRight className="w-4 h-4 text-brand-dark" />
                </a>
                
                <p className="text-center text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                  ⚠️ <strong>Aviso de Escassez:</strong> Atendemos apenas 4 novos parceiros por mês na região para garantir o foco estratégico total e o design de luxo em cada entrega. Restam apenas 2 vagas para este mês.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
