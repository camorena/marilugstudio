export interface Promotion {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  discount: string;
  validUntil: string;
}

export const promotions: Promotion[] = [
  {
    id: '1',
    title: { en: 'New Client Special', es: 'Especial Nuevo Cliente' },
    description: { en: '20% off your first service', es: '20% de descuento en tu primer servicio' },
    discount: '20%',
    validUntil: '2025-12-31'
  },
  {
    id: '2',
    title: { en: 'Referral Discount', es: 'Descuento por Referido' },
    description: { en: 'Bring a friend and both get 15% off', es: 'Trae un amigo y ambos reciben 15% de descuento' },
    discount: '15%',
    validUntil: '2025-12-31'
  },
  {
    id: '3',
    title: { en: 'Tuesday Special', es: 'Especial de Martes' },
    description: { en: '10% off all services on Tuesdays', es: '10% de descuento en todos los servicios los martes' },
    discount: '10%',
    validUntil: '2025-12-31'
  },
  {
    id: '4',
    title: { en: 'Birthday Month', es: 'Mes de Cumpleaños' },
    description: { en: 'Get 25% off any service during your birthday month', es: 'Obtén 25% de descuento en cualquier servicio durante tu mes de cumpleaños' },
    discount: '25%',
    validUntil: '2025-12-31'
  }
];
