import { Niche, Testimonial, PortfolioItem } from "./types";

export const CATEGORIES = [
  { id: "all", name: "Todos os Negócios" },
  { id: "saude", name: "Saúde & Clínicas" },
  { id: "servicos", name: "Serviços & Escritórios" },
  { id: "estetica", name: "Beleza & Estética" },
  { id: "comercio", name: "Comércio & Locais" },
  { id: "tecnologia", name: "Outros Segmentos" }
];

export const NICHES: Niche[] = [
  // Saúde & Clínicas
  {
    id: "dentistas",
    name: "Clínicas Odontológicas / Dentistas",
    category: "saude",
    icon: "Stethoscope",
    conversionBoost: "+125%",
    statsLabel: "Aumento nos agendamentos diretos via WhatsApp",
    recommendedFeatures: [
      "Agendamento Integrado em Tempo Real",
      "Galeria de Fotos (Antes & Depois em conformidade com CFO)",
      "Seção de Perguntas Frequentes (FAQ)",
      "Mapa de Localização Integrado e Rotas"
    ],
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "psicologos",
    name: "Psicólogos & Clínicas de Psicologia",
    category: "saude",
    icon: "Heart",
    conversionBoost: "+110%",
    statsLabel: "Início de primeiro contato terapêutico facilitado",
    recommendedFeatures: [
      "Visual Clean e Acolhedor",
      "Perfil Profissional Detalhado (CRP em destaque)",
      "Esclarecimento sobre Sigilo / Primeira Sessão",
      "Botão de agendamento discreto e seguro"
    ],
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "medicos",
    name: "Médicos & Clínicas Médicas (Geral/Derma/Neuro)",
    category: "saude",
    icon: "Activity",
    conversionBoost: "+140%",
    statsLabel: "Conversão de pacientes particulares via tráfego pago",
    recommendedFeatures: [
      "Foco na Especialidade e CRM visível",
      "Acordo de Privacidade e LGPD estruturada",
      "Indicação de Convênios ou Reembolso",
      "Instruções pré-consulta automatizadas"
    ],
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fisioterapeutas",
    name: "Fisioterapeutas & Pilates/Yoga",
    category: "saude",
    icon: "Sparkles",
    conversionBoost: "+95%",
    statsLabel: "Contatos de pacientes com dor aguda em busca de alívio",
    recommendedFeatures: [
      "Depoimentos de pacientes recuperados",
      "Exemplicação gráfica das terapias",
      "Integração rápida para atendimento de emergência",
      "Diferenciais de atendimento domiciliar ou clínica"
    ],
    imageUrl: "https://images.unsplash.com/photo-1597851065532-055f97d12e47?auto=format&fit=crop&q=80&w=600"
  },

  // Serviços & Escritórios
  {
    id: "advogados",
    name: "Advogados & Escritórios de Advocacia",
    category: "servicos",
    icon: "Scale",
    conversionBoost: "+150%",
    statsLabel: "Captação de leads qualificados para causas específicas",
    recommendedFeatures: [
      "Copywriting Sórbrio e Autoritário",
      "Áreas de Atuação Filtradas e Claras",
      "Formulário Avançado de Triagem de Caso",
      "Publicações Médias de Autoridade (OAB visível)"
    ],
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "contadores",
    name: "Contadores & Assessorias Contábeis",
    category: "servicos",
    icon: "Calculator",
    conversionBoost: "+85%",
    statsLabel: "Conversão de empresas buscando troca de contador",
    recommendedFeatures: [
      "Simulador de economia tributária",
      "Diferenciais de contabilidade digital",
      "Depoimentos de empresários da região",
      "Botão focado em abertura grátis de empresa"
    ],
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "arquitetos",
    name: "Arquitetos, Engenheiros & Construtoras",
    category: "servicos",
    icon: "Ruler",
    conversionBoost: "+130%",
    statsLabel: "Conversão de orçamentos de obras e projetos de alto valor",
    recommendedFeatures: [
      "Portfólio Interativo de Projetos (Bento Grid)",
      "Galeria de Imagens em Altíssima Resolução",
      "Seção Explicativa das Etapas da Obra",
      "Garantias e certificações de engenharia"
    ],
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "imobiliarias",
    name: "Imobiliárias & Corretores de Imóveis",
    category: "servicos",
    icon: "Briefcase",
    conversionBoost: "+160%",
    statsLabel: "Agendamento de visitas para lançamentos ou locações",
    recommendedFeatures: [
      "Destaque visual do imóvel com Vídeo Integrado",
      "Ficha técnica rápida e copiável",
      "Cálculo de parcelas ou financiamento estimado",
      "Formulário de cadastro rápido para proprietários"
    ],
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600"
  },

  // Beleza & Estética
  {
    id: "barbearias",
    name: "Barbearias & Salões de Beleza / Depilação",
    category: "estetica",
    icon: "Scissors",
    conversionBoost: "+200%",
    statsLabel: "Cliques diretos para agendamento online de horários",
    recommendedFeatures: [
      "Link para sistemas de reserva direta ou WhatsApp",
      "Tabela de preços interativa com serviços visualizáveis",
      "Fotos do ambiente (Moderno / Retro / Premium)",
      "Mapa e horário de funcionamento em destaque"
    ],
    imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "tatuadores",
    name: "Studios de Tatuagem & Piercing",
    category: "estetica",
    icon: "Palette",
    conversionBoost: "+145%",
    statsLabel: "Solicitações de orçamento para artes personalizadas",
    recommendedFeatures: [
      "Galeria estilo fita infinita com trabalhos recentes",
      "Indicação rigorosa de higiene, tintas e alvará da ANVISA",
      "Formulário de envio de referências de arte",
      "Guia de cuidados pós-tatuagem para engajamento"
    ],
    imageUrl: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=600"
  },

  // Comércio & Locais
  {
    id: "restaurantes",
    name: "Restaurantes, Bares, Cafés & Eventos",
    category: "comercio",
    icon: "Utensils",
    conversionBoost: "+115%",
    statsLabel: "Cliques no cardápio online e chamadas para reserva",
    recommendedFeatures: [
      "Cardápio interativo e responsivo",
      "Seção especial para reservas de mesas e eventos",
      "Depoimentos do TripAdvisor ou Google integrados",
      "Localização, estacionamento e acessibilidade"
    ],
    imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "academias",
    name: "Academias & Estúdios de Personal Trainer",
    category: "comercio",
    icon: "Dumbbell",
    conversionBoost: "+170%",
    statsLabel: "Matrículas ou agendamentos de aulas experimentais",
    recommendedFeatures: [
      "Exibição dos planos mensais x anuais",
      "Fotos dos equipamentos modernos e professores",
      "Destaque para horário estendido de funcionamento",
      "Botão de WhatsApp para ativação de aula teste"
    ],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
  },

  // Outros Segmentos
  {
    id: "fotografos",
    name: "Fotógrafos & Produtores de Conteúdo",
    category: "tecnologia",
    icon: "Camera",
    conversionBoost: "+105%",
    statsLabel: "Orçamentos de ensaios fotográficos e eventos",
    recommendedFeatures: [
      "Layout minimalista que valoriza contraste da imagem",
      "Projetos divididos por categorias (Fotos de família, casamento, marcas)",
      "Tabela de pacotes clara e explicativa",
      "Espaço para agendamento de chamada de alinhamento"
    ],
    imageUrl: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "servicos_gerais",
    name: "Serviços Gerais (Mecânicas, Petshop, Limpeza)",
    category: "tecnologia",
    icon: "Wrench",
    conversionBoost: "+120%",
    statsLabel: "Chamadas diretas para emergências ou cotações de serviços",
    recommendedFeatures: [
      "Botão flutuante gigante de WhatsApp focado em emergência",
      "Transparência de preços estimados ou serviços",
      "Lista de marcas ou bairros atendidos",
      "Avaliações com 5 estrelas em destaque"
    ],
    imageUrl: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "estetica_avancada",
    name: "Clínicas de Estética Avançada & Botox",
    category: "estetica",
    icon: "Sparkles",
    conversionBoost: "+185%",
    statsLabel: "Agendamentos diretos e seguros de pacotes estéticos de alto ticket",
    recommendedFeatures: [
      "Galeria Elegante de Resultados Clínicos",
      "Perguntas Frequentes e Tire Suas Dúvidas",
      "Instruções e Indicação de Segurança Clínica",
      "Botão de Reservas Rápido de Sessões"
    ],
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dra. Carolina Mendes",
    role: "Diretora Clínica",
    business: "Mendes Odontologia Integrada",
    quote: "A estrutura mudou nosso jogo. Antes dependíamos só de boca a boca. Hoje nossa página ultra rápida nos traz novos clientes todos os dias de forma automática via anúncios.",
    impactBadge: "+143% faturamento",
    avatarUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "2",
    name: "Dr. Gustavo Siqueira",
    role: "Sócio Fundador",
    business: "Siqueira & Advogados Associados",
    quote: "Nosso design exclusivo traz mais autoridade. O formulário inteligente otimizou o atendimento. A taxa de conversão saltou de 3% para 18% já no primeiro mês.",
    impactBadge: "+18% taxa de conversão",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "3",
    name: "Felipe Castanhari",
    role: "Proprietário",
    business: "Vanguard Barber & Studio",
    quote: "Link na bio + página premium foi a receita do sucesso para nós. Design maravilhoso, botões que funcionam sem travar, agenda lotada toda semana.",
    impactBadge: "Agenda 95% Ocupada",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "mariana-vasconcellos",
    title: "Clínica de Estética Integrada Facial",
    niche: "Estética Avançada & Dermatologia",
    conversionRate: "+210% em Atendimentos Particulares",
    resultLabel: "42 novos agendamentos de alto ticket no primeiro mês",
    description: "Criamos uma página focada em converter leads em agendamentos imediatos no WhatsApp. Layout exclusivo e premium para elevar o status e autoridade da médica.",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
    highlights: [
      "Carregamento do site em incríveis 0.3 segundos",
      "Experiência mobile-first focada no clique do polegar",
      "Neuropromessa focada em rejuvenescimento natural seguro"
    ],
    features: [
      "Galeria refinada de procedimentos autorizados",
      "Perguntas frequentes que eliminam o medo da aplicação de botox",
      "Botão de agendamento prioritário visível e flutuante"
    ]
  },
  {
    id: "marcelo-fonseca",
    title: "Odontologia de Alta Performance",
    niche: "Implantes Integrados & Próteses Premium",
    conversionRate: "+175% de Conversão de Tráfego Pago",
    resultLabel: "Preenchimento total da agenda de procedimentos cirúrgicos",
    description: "Trabalhamos o design de alto padrão e objeções comuns de medo do cliente. Tudo para facilitar cliques diretamente pro WhatsApp com ticket alto.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    highlights: [
      "Design de luxo focado em tratamento humanizado",
      "Prova social com depoimentos marcantes em destaque",
      "Estabilidade total que garante o recebimento de leads 24h"
    ],
    features: [
      "Seção especial detalhando a qualidade dos materiais importados",
      "Fluxo simplificado de 2 toques para falar com a recepção",
      "Mapa interativo de localização integrado com rotas inteligentes"
    ]
  },
  {
    id: "vargas-advocacia",
    title: "Advocacia Empresarial & Patrimonial",
    niche: "Direito de Família e Patrimonial para Alta Renda",
    conversionRate: "+190% Leads Selecionados e Validados",
    resultLabel: "Triagem automatizada que eliminou leads desqualificados",
    description: "Design clássico para o setor jurídico. Substituímos formulários enrolados por filtros ágeis que pré-qualificam cada caso antes do consultor.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600",
    highlights: [
      "Copywriting exclusivo sem juridiquês desgastante",
      "Navegação por abas intuitivas de especialização jurídica",
      "Apresentação premium dos sócios fundadores com credenciais"
    ],
    features: [
      "Filtro inteligente de gravidade de caso técnico",
      "Termos e conformidade rígida com a LGPD e regras da OAB",
      "Botão vip para consulta imediata de casos urgentes"
    ]
  },
  {
    id: "studio-lumini",
    title: "Studio de Micropigmentação de Sobrancelhas",
    niche: "SPA Facial & Visagismo de Luxo",
    conversionRate: "+230% de Agendamentos pela Bio do Instagram",
    resultLabel: "87 novas clientes fiéis recorrentes no primeiro ciclo de anúncios",
    description: "Um estilo altamente requintado que valoriza imagens de excelente definição, sendo crucial para os fechamentos do segmento da beleza em curtíssimo prazo.",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
    highlights: [
      "Layout imersivo que remete a uma experiência vip de hotelaria",
      "Ganchos visuais para acelerar reservas imediatas",
      "Abertura em telefones antigos com fluidez total"
    ],
    features: [
      "Portfólio visual ampliado que mostra o excelente acabamento",
      "Manual rápido sobre cuidados pós-procedimento",
      "Integração com ferramenta inteligente de agenda online"
    ]
  }
];

