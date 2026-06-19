import { AlertTriangle, MessageCircle, ShieldCheck, Smartphone } from 'lucide-react';

const problems = [
  {
    title: "Atendimento no Improviso",
    description: "As pessoas entram em contato, você demora para responder, perde horas tirando dúvidas básicas no WhatsApp e o cliente acaba desistindo e não fecha.",
    icon: MessageCircle,
    color: "red",
  },
  {
    title: "Refém do Instagram",
    description: "Seu Instagram sozinho não sustenta a operação. Um bloqueio de conta e você perde 100% da sua captação de clientes da noite pro dia. Você não tem controle.",
    icon: Smartphone,
    color: "orange",
  },
  {
    title: "Falta de Confiança",
    description: "Seu negócio cobra um serviço de alto valor, mas sua apresentação na internet parece amadora. O cliente não sente segurança para transferir o dinheiro.",
    icon: ShieldCheck,
    color: "slate",
  }
];

export function Problems() {
  return (
    <section id="problema" className="py-24 bg-slate-900 px-6 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Você está deixando dinheiro na mesa todos os dias.</h2>
          <p className="text-lg text-slate-400">Enquanto você improvisa nas vendas, seu concorrente organizado está fechando os contratos que deveriam ser seus.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            // Estilos dinâmicos mapeados de forma estática para garantir que o Tailwind faça o parser.
            const colorClasses = {
              red: {
                border: "border-red-900/30",
                iconBg: "bg-red-500/10",
                iconText: "text-red-400",
                bgText: "text-red-500"
              },
              orange: {
                border: "border-orange-900/30",
                iconBg: "bg-orange-500/10",
                iconText: "text-orange-400",
                bgText: "text-orange-500"
              },
              slate: {
                border: "border-slate-800",
                iconBg: "bg-slate-800",
                iconText: "text-slate-400",
                bgText: "text-slate-500"
              }
            }[item.color as "red" | "orange" | "slate"];

            return (
              <article key={index} className={`bg-slate-950 p-8 rounded-2xl border ${colorClasses.border} relative overflow-hidden group`}>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true">
                  <AlertTriangle className={`w-24 h-24 ${colorClasses.bgText}`} />
                </div>
                <div className={`w-12 h-12 ${colorClasses.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${colorClasses.iconText}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
