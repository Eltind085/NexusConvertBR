import { ArrowRight, CalendarCheck, Globe, MousePointerClick, ShoppingCart } from 'lucide-react';
import { getWhatsAppLink } from '../../config/site';

const servicesList = [
  {
    title: "Landing Pages para Anúncios",
    description: "Páginas de alta performance, sem distrações. Feitas para receber o tráfego do Instagram ou Google Ads e transformar esse clique em um pedido de orçamento direto no seu WhatsApp.",
    icon: MousePointerClick,
    linkText: "Começar a captar",
    linkHref: getWhatsAppLink("Olá, quero saber mais sobre as Landing Pages para captação."),
    theme: "cyan"
  },
  {
    title: "Sites Comerciais & Institucionais",
    description: "A \"sede oficial\" da sua empresa na internet. Cria autoridade profunda para negócios de alto ticket. O cliente pesquisa seu nome, acessa uma estrutura premium e percebe o seu valor na hora.",
    icon: Globe,
    linkText: "Profissionalizar presença",
    linkHref: getWhatsAppLink("Olá, quero profissionalizar minha presença digital com um site."),
    theme: "green"
  },
  {
    title: "Sistemas de Agendamento",
    description: "Fim do roteiro exaustivo: \"Tem horário terça? E quarta?\". O cliente acessa, vê seus serviços, escolhe o horário disponível e agenda (ou até paga) sozinho 24 horas por dia.",
    icon: CalendarCheck,
    linkText: "Organizar atendimentos",
    linkHref: getWhatsAppLink("Olá, tenho interesse em um sistema de agendamento."),
    theme: "cyan"
  },
  {
    title: "Loja Online / E-commerce",
    description: "Para quem vende produtos físicos ou digitais e quer sair da dependência de vender pelo direct. Controle de estoque, cálculo de frete automático e painel gerenciável simples.",
    icon: ShoppingCart,
    linkText: "Vender 24h por dia",
    linkHref: getWhatsAppLink("Olá, quero montar minha loja online(e-commerce)."),
    theme: "green"
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-slate-900 px-6 border-y border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">O que nós construímos para você.</h2>
          <p className="text-lg text-slate-400">Soluções diretas ao ponto, projetadas para o nível de necessidade atual da sua operação.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isCyan = service.theme === "cyan";
            const hoverBorder = isCyan ? "hover:border-cyan-500/50" : "hover:border-green-500/50";
            const iconBg = isCyan ? "bg-cyan-500/10" : "bg-green-500/10";
            const textColor = isCyan ? "text-cyan-400" : "text-green-400";

            return (
              <article key={index} className={`bg-slate-950 border border-slate-800 p-8 rounded-2xl ${hoverBorder} transition-colors group flex flex-col`}>
                <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${textColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow">
                  {service.description}
                </p>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href={service.linkHref} 
                  className={`${textColor} font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto w-fit`}
                >
                  {service.linkText} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
