export function TargetAudience() {
  const audiences = [
    "Clínicas e Consultórios", 
    "Prestadores de Serviços", 
    "Infoprodutores", 
    "Advogados", 
    "Corretores de Imóveis", 
    "Agências", 
    "Mentorias de Alto Ticket", 
    "E-commerces em Crescimento"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8">Para quem a NEXUS gera mais resultado?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((tag, i) => (
            <span key={i} className="px-5 py-2.5 bg-slate-900 border border-slate-700/50 rounded-full text-slate-300 font-medium text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
