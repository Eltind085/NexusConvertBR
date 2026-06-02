export interface Niche {
  id: string;
  name: string;
  category: string;
  icon: string; // Lucide icon name
  conversionBoost: string;
  statsLabel: string;
  recommendedFeatures: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  quote: string;
  avatarUrl: string;
  impactBadge: string;
}

export interface BentoCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  niche: string;
  conversionRate: string;
  resultLabel: string;
  description: string;
  imageUrl: string;
  highlights: string[];
  features: string[];
}

