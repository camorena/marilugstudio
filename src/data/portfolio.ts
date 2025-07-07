export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Category {
  id: string;
  name: {
    en: string;
    es: string;
  };
}

export const categories: Category[] = [
  {
    id: 'all',
    name: {
      en: 'All',
      es: 'Todo',
    },
  },
  {
    id: 'haircuts',
    name: {
      en: 'Haircuts',
      es: 'Cortes',
    },
  },
  {
    id: 'coloring',
    name: {
      en: 'Coloring',
      es: 'Coloración',
    },
  },
  {
    id: 'styling',
    name: {
      en: 'Styling',
      es: 'Peinados',
    },
  },
  {
    id: 'beard',
    name: {
      en: 'Beard Work',
      es: 'Barbería',
    },
  },
];

export const portfolioItems: PortfolioItem[] = [
  // Haircuts
  {
    id: 'haircut-1',
    title: 'Modern Fade',
    category: 'haircuts',
    image: '/images/haircut-1.jpg',
  },
  {
    id: 'haircut-2',
    title: 'Classic Cut',
    category: 'haircuts',
    image: '/images/haircut-2.jpg',
  },
  {
    id: 'haircut-3',
    title: 'Textured Style',
    category: 'haircuts',
    image: '/images/haircut-3.jpg',
  },
  {
    id: 'haircut-4',
    title: 'Long Layers',
    category: 'haircuts',
    image: '/images/haircut-4.jpg',
  },

  // Coloring
  {
    id: 'coloring-1',
    title: 'Balayage Blonde',
    category: 'coloring',
    image: '/images/coloring-1.jpg',
  },
  {
    id: 'coloring-2',
    title: 'Vibrant Highlights',
    category: 'coloring',
    image: '/images/coloring-2.jpg',
  },
  {
    id: 'coloring-3',
    title: 'Natural Ombre',
    category: 'coloring',
    image: '/images/coloring-3.jpg',
  },
  {
    id: 'coloring-4',
    title: 'Fashion Colors',
    category: 'coloring',
    image: '/images/coloring-4.jpg',
  },

  // Styling
  {
    id: 'styling-1',
    title: 'Wedding Updo',
    category: 'styling',
    image: '/images/styling-1.jpg',
  },
  {
    id: 'styling-2',
    title: 'Elegant Waves',
    category: 'styling',
    image: '/images/styling-2.jpg',
  },
  {
    id: 'styling-3',
    title: 'Special Event',
    category: 'styling',
    image: '/images/styling-3.jpg',
  },

  // Beard Work
  {
    id: 'beard-1',
    title: 'Shaped Beard',
    category: 'beard',
    image: '/images/beard-1.jpg',
  },
  {
    id: 'beard-2',
    title: 'Clean Shave',
    category: 'beard',
    image: '/images/beard-2.jpg',
  },
];
