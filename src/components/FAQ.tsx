import { useState } from "react";
import { ChevronDown, HelpCircle, HelpCircleIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Afinal, o que é uma 'Landing Page' (Página de Vendas)?",
    answer: "É um site de uma página só, direto ao ponto. Sites antigos têm muitas abas e o cliente acaba se perdendo. A nossa página é feita exclusivamente para uma coisa: convencer o seu visitante a clicar no botão de WhatsApp ou agendar um serviço com você. Sem distrações, gerando muito mais clientes reais."
  },
  {
    question: "Como funciona a Agenda de Horários no site?",
    answer: "Se você atende por horário (clínicas, estética, consultas, etc), nós embutimos uma agenda inteligente no seu site. O próprio cliente entra, escolhe o serviço, vê os dias e horários que você tem livre, e faz a marcação sozinho 24 horas por dia. Você não precisa ficar o dia inteiro respondendo mensagens para tentar marcar um horário."
  },
  {
    question: "O cliente pode pagar direto pelo site na hora de agendar?",
    answer: "Sim! Você é quem manda. Podemos deixar para ele apenas reservar a data e pagar pessoalmente, ou exigir que ele faça um pagamento online (como um sinal, ou valor total) no ato da marcação. É a melhor forma de acabar de vez com os cancelamentos e faltas de última hora."
  },
  {
    question: "Eu não entendo de tecnologia, vou conseguir usar?",
    answer: "Com toda a certeza! Nós construímos tudo pensando em tirar o seu trabalho, não em te dar mais dores de cabeça. As páginas ficam no ar prontas para receber clientes e a agenda envia os avisos mastigados para você no automático. Qualquer pessoa consegue usar."
  },
  {
    question: "Vou ter que pagar alguma mensalidade cara pro site ficar no ar?",
    answer: "Não! Após o pagamento inicial pelo desenvolvimento da sua página, você não terá mensalidades abusivas. Você pagará apenas uma taxa anual referente à hospedagem e renovação do seu domínio (o nome do seu site), tudo de forma transparente e justa para manter sua estrutura online funcionando com máxima velocidade."
  },
  {
    question: "E se eu precisar trocar uma foto, preço ou serviço no futuro?",
    answer: "Os horários e a sua agenda ficam em um painel bem fácil que você acessa até pelo celular para gerenciar o que precisar no seu dia a dia. Já para mudar um texto ou foto na estrutura do site, somos acessíveis: com as nossas pequenas manutenções avulsas, nós fazemos tudo rápido para você."
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
