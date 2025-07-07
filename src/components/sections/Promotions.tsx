import React, { useState } from 'react';
import { Gift, Users, Calendar, Cake, Star, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

interface Promotion {
  id: string;
  icon: React.ElementType;
  title: { en: string; es: string };
  description: { en: string; es: string };
  discount: string;
  validUntil: { en: string; es: string };
  accentColor: string;
}

const promotions: Promotion[] = [
  {
    id: 'new-client',
    icon: Star,
    title: {
      en: 'New Client Special',
      es: 'Especial Cliente Nuevo',
    },
    description: {
      en: 'Your first visit deserves VIP treatment',
      es: 'Tu primera visita merece tratamiento VIP',
    },
    discount: '20%',
    validUntil: {
      en: 'No expiration',
      es: 'Sin expiración',
    },
    accentColor: 'purple',
  },
  {
    id: 'referral',
    icon: Users,
    title: {
      en: 'Referral Rewards',
      es: 'Recompensas por Referencia',
    },
    description: {
      en: 'Share the beauty, earn rewards',
      es: 'Comparte la belleza, gana recompensas',
    },
    discount: '15%',
    validUntil: {
      en: 'Ongoing program',
      es: 'Programa continuo',
    },
    accentColor: 'pink',
  },
  {
    id: 'tuesday',
    icon: Calendar,
    title: {
      en: 'Tuesday Specials',
      es: 'Especiales de Martes',
    },
    description: {
      en: 'Make your Tuesday beautiful',
      es: 'Haz tu martes hermoso',
    },
    discount: '10%',
    validUntil: {
      en: 'Every Tuesday',
      es: 'Todos los martes',
    },
    accentColor: 'purple',
  },
  {
    id: 'birthday',
    icon: Cake,
    title: {
      en: 'Birthday Month',
      es: 'Mes de Cumpleaños',
    },
    description: {
      en: 'Celebrate in style with us',
      es: 'Celebra con estilo con nosotros',
    },
    discount: '25%',
    validUntil: {
      en: 'Your birthday month',
      es: 'Tu mes de cumpleaños',
    },
    accentColor: 'pink',
  },
];

const Promotions: React.FC = () => {
  const { t, language } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getAccentClasses = (color: string, isHovered: boolean) => {
    if (color === 'purple') {
      return {
        text: isHovered ? 'text-purple-600 dark:text-purple-400' : 'text-gray-400',
        bg: 'bg-purple-100 dark:bg-purple-900/20',
        border: isHovered
          ? 'border-purple-200 dark:border-purple-800'
          : 'border-gray-200 dark:border-gray-800',
        iconBg: 'bg-purple-100 dark:bg-purple-900/30',
        iconText: 'text-purple-600 dark:text-purple-400',
      };
    }
    return {
      text: isHovered ? 'text-pink-600 dark:text-pink-400' : 'text-gray-400',
      bg: 'bg-pink-100 dark:bg-pink-900/20',
      border: isHovered
        ? 'border-pink-200 dark:border-pink-800'
        : 'border-gray-200 dark:border-gray-800',
      iconBg: 'bg-pink-100 dark:bg-pink-900/30',
      iconText: 'text-pink-600 dark:text-pink-400',
    };
  };

  return (
    <section
      id="promotions"
      className="py-24 bg-white dark:bg-slate-800 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* Minimal header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 dark:text-white mb-4">
            {t({ en: translations.en.promotions.title, es: translations.es.promotions.title })}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-light">
            {t({
              en: translations.en.promotions.subtitle,
              es: translations.es.promotions.subtitle,
            })}
          </p>
        </div>

        {/* Minimal grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {promotions.map((promo) => {
            const Icon = promo.icon;
            const isHovered = hoveredCard === promo.id;
            const classes = getAccentClasses(promo.accentColor, isHovered);

            return (
              <div
                key={promo.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(promo.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onMouseMove={handleMouseMove}
              >
                <div
                  className={`
                    relative h-full p-6 rounded-2xl border transition-all duration-500
                    ${classes.border}
                    bg-gray-50 dark:bg-slate-700/50
                    hover:shadow-xl hover:scale-[1.02]
                  `}
                >
                  {/* Subtle spotlight effect */}
                  {isHovered && (
                    <div
                      className="absolute pointer-events-none opacity-20"
                      style={{
                        left: mousePosition.x - 100,
                        top: mousePosition.y - 100,
                        width: '200px',
                        height: '200px',
                        background: `radial-gradient(circle, ${promo.accentColor === 'purple' ? 'rgb(147, 51, 234)' : 'rgb(236, 72, 153)'} 0%, transparent 70%)`,
                        filter: 'blur(60px)',
                      }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${classes.iconBg} flex items-center justify-center mb-4 transition-colors duration-300`}
                    >
                      <Icon className={`w-6 h-6 ${classes.iconText}`} />
                    </div>

                    {/* Discount */}
                    <div className="absolute top-6 right-6">
                      <span
                        className={`text-2xl font-light ${isHovered ? classes.iconText : 'text-gray-900 dark:text-white'} transition-colors duration-300`}
                      >
                        {promo.discount}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">OFF</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      {promo.title[language]}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-light mb-4">
                      {promo.description[language]}
                    </p>

                    {/* Valid until */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{promo.validUntil[language]}</span>
                    </div>

                    {/* Subtle CTA */}
                    <div
                      className={`mt-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <a
                        href="tel:7632093716"
                        className={`text-sm ${classes.text} font-light hover:underline underline-offset-4`}
                      >
                        {t({
                          en: translations.en.promotions.claimOffer,
                          es: translations.es.promotions.claimOffer,
                        })}{' '}
                        →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-16">
          <a
            href="tel:7632093716"
            className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 group"
          >
            <Gift className="w-4 h-4" />
            <span className="font-light">
              {t({
                en: translations.en.promotions.callToBook,
                es: translations.es.promotions.callToBook,
              })}
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
