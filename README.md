# NEXUS CONVERT BR - Plataforma de Vendas e Conversão

NEXUS CONVERT BR é uma Landing Page moderna, focada em alta conversão e otimizada para capturar leads provenientes de campanhas de tráfego pago. A aplicação atua como um cartão de visitas de alto impacto, oferecendo serviços de desenvolvimento web voltados exclusivamente para vendas (Landing pages, e-commerce, agendas online).

## 🚀 Proposta do Sistema

Ao invés de entregar "apenas um site institucional", o projeto entrega uma *máquina de vendas*. Todo o conteúdo visual e estrutural foi pensado para aplicar conceitos de arquitetura de vendas e psicologia de conversão, reduzindo as objeções do visitante e encurtando o caminho para um contato via WhatsApp.

## 🛠 Tecnologias e Stack

- **React (v18)** - Biblioteca base para construção da interface.
- **TypeScript** - Tipagem estática para maior previsibilidade e manutenção.
- **Vite** - Bundler ultrarrápido para desenvolvimento e build.
- **Tailwind CSS** - Framework CSS de utilitários para estilização rápida, responsiva e alinhada ao design premium.
- **Motion (Framer Motion)** - Biblioteca para animações fluidas baseadas em física e interações.
- **Lucide React** - Pacote de ícones minimalistas e consistentes.

## 📁 Estrutura do Projeto

O projeto foi refatorado seguindo boas práticas de modularização (Clean Code), separando UI, Layouts, Seções e Configuração global:

```
src/
├── components/          # Componentização visual e estrutural
│   ├── layout/          # Componentes globais de estrutura (Navbar, Footer)
│   ├── sections/        # Seções de negócio (Hero, FAQ, Portfolio, Services...)
│   └── ui/              # Componentes base reutilizáveis (PrimaryButton, GradientText)
├── config/              # Centralização de configurações globais
│   └── site.ts          # Links (Instagram, WhatsApp) e copywriting básico
├── App.tsx              # Componente raiz, orquestra os Layouts e Sections
├── main.tsx             # Ponto de entrada do app React
└── index.css            # Importação e configuração do Tailwind CSS
```

## 🔐 Segurança e Boas Práticas Adotadas

Por se tratar de um site estático focado fundamentalmente em conversão externa (redirecionamentos pro Whatsapp ou plataformas externas):

- **Sanitização de Links Externos:** Links de transição para o WhatsApp e outras redes contam com os atributos `target="_blank" rel="noopener noreferrer"` para impedir vulnerabilidades de Reverse Tabnabbing.
- **Semântica HTML:** O código foi estruturado com uso consistente de tags semânticas (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`), que, além do SEO, beneficiam leitores de tela e tecnologias assistivas.
- **Melhorias de Acessibilidade (a11y):** Inclusão de `aria-hidden` em artefatos puramente visuais, e uso de `aria-label` e `aria-expanded` para interações de botão e componentes como o FAQ.
- **Dados Centralizados e Codificação Segura:** Links com propriedades passadas via QueryString (ex: URLs do WhatsApp) são processados com `encodeURIComponent`, evitando falhas de parser em URLs construídas no cliente.

## 💿 Executando o Projeto Localmente

### Pré-requisitos
- Node.js (versão LTS recomendada, 18+ ou 20+)
- Gerenciador de dependências de sua escolha (`npm`, `yarn` ou `pnpm`)

### Comandos para instalação e arranque

1. Instale as dependências:
```bash
npm install
```

2. Execute o ambiente de desenvolvimento local:
```bash
npm run dev
```

A aplicação será iniciada. O terminal exibirá a URL (geralmente `http://localhost:5173` ou `http://localhost:3000` via VITE) para acompanhamento no navegador.

### Build (Produção)

Para gerar os artefatos otimizados de produção:

```bash
npm run build
```

Isso compilará os arquivos dentro do diretório `/dist`, prontos para serem transportados para qualquer serviço de hospedagem estática (Vercel, Netlify, Cloudflare Pages, S3).
