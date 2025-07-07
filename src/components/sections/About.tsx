import React, { useState, useEffect } from 'react';
import { Award, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Award,
      title: { en: '15+ Years', es: '15+ Años' },
      subtitle: { en: 'of Excellence', es: 'de Excelencia' },
      description: {
        en: 'Mastering the art of beauty with passion and precision',
        es: 'Dominando el arte de la belleza con pasión y precisión',
      },
    },
    {
      icon: Users,
      title: { en: 'Expert Team', es: 'Equipo Experto' },
      subtitle: { en: 'Dedicated Professionals', es: 'Profesionales Dedicados' },
      description: {
        en: 'Skilled artists committed to your transformation',
        es: 'Artistas expertos comprometidos con tu transformación',
      },
    },
    {
      icon: Sparkles,
      title: { en: 'Premium', es: 'Premium' },
      subtitle: { en: 'Experience', es: 'Experiencia' },
      description: {
        en: 'Where luxury meets personalized care',
        es: 'Donde el lujo se encuentra con el cuidado personalizado',
      },
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 bg-gray-50 dark:bg-slate-900 overflow-hidden transition-colors duration-500"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Elegant gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-purple-200 dark:bg-purple-900/10 rounded-full filter blur-[100px] animate-pulse" />
        <div
          className="absolute -bottom-48 -left-48 w-96 h-96 bg-pink-200 dark:bg-pink-900/10 rounded-full filter blur-[100px] animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main content with asymmetric layout */}
        <div className="max-w-7xl mx-auto">
          {/* Header with elegant typography */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-gray-900 dark:text-white mb-6 leading-tight">
                {t({
                  en: translations.en.about.whereBeauty,
                  es: translations.es.about.whereBeauty,
                })}
                <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-600 dark:text-gray-400 mt-2">
                  {t({
                    en: translations.en.about.meetsExcellence,
                    es: translations.es.about.meetsExcellence,
                  })}
                </span>
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-purple-600 to-pink-600 mb-8" />
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl">
                {t({
                  en: translations.en.about.description,
                  es: translations.es.about.description,
                })}
              </p>
            </div>
          </div>

          {/* Features with staggered cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isHovered = hoveredFeature === index;

              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 100}ms`,
                  }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div
                    className={`relative h-full p-8 lg:p-10 rounded-2xl border transition-all duration-500 ${
                      isHovered
                        ? 'border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800/50 shadow-2xl scale-105'
                        : 'border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/30'
                    }`}
                  >
                    {/* Subtle gradient background on hover */}
                    <div
                      className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 dark:from-purple-600/10 dark:to-pink-600/10 rounded-2xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with elegant animation */}
                      <div className="mb-6">
                        <div
                          className={`inline-flex p-4 rounded-2xl transition-all duration-500 ${
                            isHovered
                              ? 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rotate-3'
                              : 'bg-gray-100 dark:bg-slate-700/50'
                          }`}
                        >
                          <Icon
                            className={`w-8 h-8 transition-all duration-500 ${
                              isHovered
                                ? 'text-purple-600 dark:text-purple-400 scale-110'
                                : 'text-gray-600 dark:text-gray-400'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Text content */}
                      <h3 className="text-3xl font-light text-gray-900 dark:text-white mb-1">
                        {t(feature.title)}
                      </h3>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-light uppercase tracking-wider mb-4">
                        {t(feature.subtitle)}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        {t(feature.description)}
                      </p>

                      {/* Decorative element */}
                      <div
                        className={`absolute -bottom-2 -right-2 w-24 h-24 transition-all duration-700 ${
                          isHovered ? 'opacity-20' : 'opacity-0'
                        }`}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-full filter blur-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Owner signature - elegant touch */}
          <div
            className={`text-center mt-20 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-sm text-gray-500 dark:text-gray-500 font-light italic">
              — Marilu Garcia,{' '}
              {t({ en: translations.en.about.founder, es: translations.es.about.founder })} —
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
