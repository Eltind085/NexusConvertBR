import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    q: "Eu já tenho Instagram engajado, ainda preciso de site?",
    a: "Sim. O Instagram atrai a atenção, mas o site retém a conversão e dá segurança. Além disso, a rede social não é sua propriedade. Sua estrutura digital oficial deve ser um ambiente sem distrações (concorrentes), desenhado 100% para você realizar vendas."
  },
  {
    q: "Isso serve para uma empresa bem pequena?",
    a: "Principalmente. No meio digital, não importa o tamanho do seu escritório físico, importa a sua apresentação. Uma página extremamente profissional faz o seu pequeno negócio parecer uma grande autoridade, cobrando preços melhores desde o primeiro dia."
  },
  {
    q: "Preciso entender de tecnologia para gerenciar depois?",
    a: "Zero. Entregamos a máquina montada e operando. Para lojas e agendamentos, o painel de uso no dia a dia é tão simples quanto usar um aplicativo comum no celular."
  },
  {
    q: "Em quanto tempo meu projeto vai pro ar?",
    a: "Entendemos que tempo é faturamento perdido. Nosso foco são projetos ágeis focados no essencial de vendas, fugindo de prazos de meses comuns de agências tradicionais. Prazos específicos são definidos logo na primeira proposta."
  }
];

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-900 px-6 border-y border-slate-800/50">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Dúvidas Frequentes</h2>
          <p className="text-slate-400">Tudo claro e às claras, antes de você tomar a decisão.</p>
        </header>

        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <div key={i} className="border border-slate-800 rounded-xl bg-slate-950 overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-slate-950 hover:bg-slate-900/50 transition-colors"
                aria-expanded={openFaq === i}
              >
                <span className="font-bold text-white text-lg">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-cyan-500 transition-transform ${openFaq === i ? "rotate-180" : ""}`} 
                  aria-hidden="true" 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                aria-hidden={openFaq !== i}
              >
                <p className="text-slate-400 leading-relaxed border-t border-slate-800 pt-4 mt-2">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
