export interface Service {
  id: string;
  name: { en: string; es: string };
  price: string;
  duration?: string;
  category: 'men' | 'women' | 'both';
}

export interface PortfolioItem {
  id: string;
  title: { en: string; es: string };
  category: string;
  image: string;
}

export interface Promotion {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  discount: string;
  validUntil: string;
}

export type Language = 'en' | 'es';
export type Theme = 'light' | 'dark';
