export const siteConfig = {
  name: "NEXUS CONVERT BR",
  description: "Sites feitos para vender. Construímos páginas e estruturas digitais com um único objetivo: transformar visitantes em contatos, clientes e faturamento para sua empresa.",
  slogan: "Sites feitos para vender",
  links: {
    instagram: "https://www.instagram.com/nexusconvertbr/",
    whatsapp: "5585920015464", // Número sem os caracteres especiais
  },
};

export const getWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.links.whatsapp}?text=${encodedMessage}`;
};
