export interface Service {
  id: string;
  name: { en: string; es: string };
  price: string;
  duration?: string;
  category: 'men' | 'women' | 'both';
}

export const services: Service[] = [
  // Men's services
  {
    id: '1',
    name: { en: "Regular Men's Cut", es: 'Corte regular caballero' },
    price: '$25',
    duration: '30 min',
    category: 'men',
  },
  {
    id: '2',
    name: { en: "Men's & Kids Fade Cut", es: 'Corte fade caballero y niños' },
    price: '$30',
    duration: '45 min',
    category: 'men',
  },
  {
    id: '4',
    name: { en: 'Beard Trim', es: 'Barba' },
    price: '$15',
    duration: '20 min',
    category: 'men',
  },
  {
    id: '6',
    name: { en: 'Eyebrow & Beard Lining', es: 'Delineado ceja y barba' },
    price: '$20',
    duration: '30 min',
    category: 'men',
  },
  {
    id: '7',
    name: {
      en: 'Warm Towel Shave & Facial',
      es: 'Afeitado con toalla caliente y tratamiento facial',
    },
    price: '$35',
    duration: '45 min',
    category: 'men',
  },
  {
    id: '8',
    name: { en: 'Beard Coloring', es: 'Pintado de barba' },
    price: '$10',
    duration: '20 min',
    category: 'men',
  },
  {
    id: '10',
    name: { en: 'Ear Wax Cleaning', es: 'Limpieza de oídos con wax' },
    price: '$12',
    duration: '10 min',
    category: 'men',
  },
  {
    id: '11',
    name: { en: 'Nose Wax Cleaning', es: 'Limpieza de nariz con wax' },
    price: '$12',
    duration: '10 min',
    category: 'men',
  },

  // Women's services
  {
    id: '12',
    name: { en: 'Ladies Cut', es: 'Corte para dama' },
    price: '$35',
    duration: '45 min',
    category: 'women',
  },
  {
    id: '13',
    name: { en: 'Blow Dry', es: 'Cepillado' },
    price: '$55',
    duration: '45 min',
    category: 'women',
  },
  {
    id: '14',
    name: { en: 'Flat Iron', es: 'Planchado' },
    price: '$55',
    duration: '45 min',
    category: 'women',
  },
  {
    id: '15',
    name: { en: 'Cut & Blow Dry', es: 'Corte y cepillado para dama' },
    price: '$70',
    duration: '1.5 hrs',
    category: 'women',
  },
  {
    id: '16',
    name: { en: 'Hair Color', es: 'Color de cabello' },
    price: '$120',
    duration: '2 hrs',
    category: 'women',
  },
  {
    id: '17',
    name: { en: 'Highlights', es: 'Rayitos' },
    price: '$120',
    duration: '2.5 hrs',
    category: 'women',
  },
  {
    id: '18',
    name: { en: 'Base Color & Highlights', es: 'Color base y rayitos' },
    price: '$220',
    duration: '3 hrs',
    category: 'women',
  },
  {
    id: '19',
    name: { en: 'Keratin Treatment', es: 'Tratamiento de keratina' },
    price: '$180',
    duration: '3 hrs',
    category: 'women',
  },
  {
    id: '20',
    name: { en: 'Hydrating Treatment', es: 'Tratamiento hidratante' },
    price: '$90',
    duration: '1 hr',
    category: 'women',
  },
  {
    id: '21',
    name: { en: 'Ladies Waxing', es: 'Depilación con cera para dama' },
    price: '$20',
    duration: '30 min',
    category: 'women',
  },
  {
    id: '22',
    name: { en: 'Mustache Waxing', es: 'Depilación de bigote' },
    price: '$15',
    duration: '15 min',
    category: 'women',
  },
  {
    id: '23',
    name: { en: 'Eyebrow Shading', es: 'Sombreado de ceja' },
    price: '$15',
    duration: '20 min',
    category: 'women',
  },

  // Both gender services
  {
    id: '3',
    name: { en: 'Perm', es: 'Permanente' },
    price: '$85',
    duration: '2 hrs',
    category: 'both',
  },
  {
    id: '5',
    name: { en: 'Eyebrow Waxing', es: 'Cejas con cera' },
    price: '$15',
    duration: '15 min',
    category: 'both',
  },
  {
    id: '9',
    name: { en: 'Shampoo', es: 'Shampoo' },
    price: '$10',
    duration: '15 min',
    category: 'both',
  },
];
