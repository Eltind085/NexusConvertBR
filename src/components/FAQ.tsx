import { useState } from "react";
import { ChevronDown, HelpCircle, HelpCircleIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "O que exatamente está incluso no serviço?",
    answer: "Está incluso o estudo estratégico do seu público-alvo local, copywriting persuasivo de alta conversão, design customizado alinhado à sua marca, imagens profissionais em altíssima qualidade, estruturação de SEO básico local para o Google, integração rápida com WhatsApp, formulários de contato inteligentes de triagem e configuração do seu domínio próprio de forma profissional."
  },
  {
    question: "Eu terei de pagar alguma taxa ou mensalidade perpétua para terceiros?",
    answer: "Não! Diferente das agências tradicionais que forçam você a hospedar em servidores WordPress lentos cobrando R$ 50-R$ 100 por mês, nós utilizamos infraestrutura estática moderna (CDNs). A hospedagem básica do seu site pode sair totalmente gratuita ou custar centavos por ano, dependendo do volume. Você só paga pela aquisição anual do seu domínio (.com.br) diretamente ao Registro.br."
  },
  {
    question: "Por que uma página em código puro é melhor que WordPress ou Wix?",
    answer: "Pelo tripé de sucesso: Velocidade, Segurança e Custo. Sites construídos com Elementor ou Wix demoram 4-10 segundos para carregar no celular do cliente em conexões 4G, fazendo você perder até 50% do seu dinheiro investido em anúncios. Nosso código limpo abre em menos de 0.5 segundo, é 100% livre de invasões e hacks de plugins ultrapassados, e roda sem mensalidades pesadas."
  },
  {
    question: "O código-fonte será de minha propriedade?",
    answer: "Sim, absolutamente sem letras miúdas. Todo o arquivo da página é de propriedade integral sua. Nós entregamos a estrutura completa com as chaves de acesso definitivo do seu patrimônio digital diretamente ao seu domínio, de forma totalmente independente e segura."
  },
  {
    question: "Como funciona a manutenção ou futuras alterações de preços/textos?",
    answer: "Como programadores, documentamos todas as seções de forma limpa. Para pequenas alterações eventuais (como mudar uma foto, número de telefone ou tabela de preços), oferecemos planos de manutenção sob demanda super em conta ou pacotes de alteração imediata. É rápido, sem burocracia e direto comigo."
  },
  {
    question: "O site já vem pronto para eu anunciar no Google e Instagram?",
    answer: "Sim! Já entregamos a sua landing page com o código estruturado para receber o Meta Pixel (anúncios de Instagram/Facebook) e as tags do Google Ads. Além disso, criamos a página seguindo as regras oficiais de qualidade do Google, o que reduz substancialmente o custo de clique (CPC) dos seus anúncios."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark/50 border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-mono tracking-[0.25em] text-brand-green uppercase font-bold bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            PERGUNTAS RESOLVIDAS
          </span>
          <h2 className="mt-6 font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Dúvidas Frequentes de <span className="text-brand-cyan">Empresários locais</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-gray-400">
            Trabalhamos com transparência radical e dados reais. Se a sua pergunta não estiver abaixo, sinta-se à vontade para nos chamar diretamente no canal de estratégia rápida.
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "border-brand-cyan bg-[#1c1c1c]/50" 
                    : "border-white/10 bg-brand-grid/30 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? 'text-brand-cyan' : 'text-gray-500'}`} />
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-cyan' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
