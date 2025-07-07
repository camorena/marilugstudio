import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Sparkles,
  Crown,
  Heart,
  Clock,
  Phone,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import { services } from '../../data/services';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'men' | 'women'>('men');
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(0);

  const filteredServices = services.filter(
    (s) => s.category === activeCategory || s.category === 'both'
  );

  // Desktop: 3 columns x 2 rows = 6 cards per page
  // Mobile: 1 column x 2 rows = 2 cards per page
  const [cardsPerPage, setCardsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(2);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(4);
      } else {
        setCardsPerPage(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(filteredServices.length / cardsPerPage);
  const paginatedServices = filteredServices.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const handleCardClick = (serviceId: string) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page);
      setFlippedCards(new Set()); // Reset flipped cards on page change
    }
  };

  const getServiceIcon = (index: number) => {
    const icons = [Scissors, Sparkles, Crown, Heart];
    return icons[index % icons.length];
  };

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-slate-800 relative overflow-hidden transition-colors duration-500"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-20"
          style={{ animation: 'blob 7s infinite' }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl opacity-20"
          style={{ animation: 'blob 7s infinite', animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-300 dark:bg-purple-800/20 rounded-full filter blur-3xl opacity-10"
          style={{ animation: 'blob 7s infinite', animationDelay: '4s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            <Sparkles
              className="w-6 h-6 mx-4 text-purple-600 dark:text-purple-400"
              style={{ animation: 'spin-slow 4s linear infinite' }}
            />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4 text-gray-900 dark:text-white">
            {t({ en: translations.en.services.title, es: translations.es.services.title })}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            {t({
              en: translations.en.services.clickToDiscover,
              es: translations.es.services.clickToDiscover,
            })}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex shadow-xl rounded-full p-1 bg-gray-50 dark:bg-slate-700">
            <button
              onClick={() => {
                setActiveCategory('men');
                setCurrentPage(0);
                setFlippedCards(new Set());
              }}
              className={`px-8 py-3 text-sm font-medium tracking-wide rounded-full transition-all duration-500 ${
                activeCategory === 'men'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              {t({
                en: translations.en.services.menServices,
                es: translations.es.services.menServices,
              })}
            </button>
            <button
              onClick={() => {
                setActiveCategory('women');
                setCurrentPage(0);
                setFlippedCards(new Set());
              }}
              className={`px-8 py-3 text-sm font-medium tracking-wide rounded-full transition-all duration-500 ${
                activeCategory === 'women'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              {t({
                en: translations.en.services.womenServices,
                es: translations.es.services.womenServices,
              })}
            </button>
          </div>
        </div>

        {/* Services Grid with 2 rows */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          {totalPages > 1 && (
            <>
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 0}
                className={`absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-50 dark:bg-slate-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  currentPage === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-110 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                className={`absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 z-10 p-3 bg-gray-50 dark:bg-slate-700 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  currentPage === totalPages - 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:scale-110 hover:bg-purple-50 dark:hover:bg-purple-900/20'
                }`}
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </>
          )}

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedServices.map((service, index) => {
              const Icon = getServiceIcon(index);
              return (
                <div key={service.id} style={{ perspective: '1000px' }}>
                  <div
                    className={`relative h-56 transition-all duration-700 cursor-pointer`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flippedCards.has(service.id) ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    }}
                    onClick={() => handleCardClick(service.id)}
                  >
                    {/* Front of card */}
                    <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                      <div className="h-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-2xl p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        {/* Enhanced decorative background */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full transform rotate-45"></div>
                        </div>

                        {/* Decorative corner icon */}
                        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                          <div className="absolute top-4 right-4">
                            <Icon className="w-16 h-16 text-purple-600 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                          </div>
                        </div>

                        <div className="relative z-10">
                          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                            {service.name[language]}
                          </h3>
                          {service.duration && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-light flex items-center">
                              <Clock className="inline w-4 h-4 mr-1" />
                              {service.duration}
                            </p>
                          )}
                        </div>

                        <div className="flex justify-between items-end relative z-10">
                          <span className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                            {service.price}
                          </span>
                          <div className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                            {t({
                              en: translations.en.services.clickToFlip,
                              es: translations.es.services.clickToFlip,
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back of card */}
                    <div
                      className="absolute inset-0"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div className="h-full bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden">
                        {/* Enhanced decorative pattern */}
                        <div className="absolute inset-0">
                          <div className="absolute top-0 left-0 w-full h-full opacity-10">
                            <div
                              className="w-full h-full"
                              style={{
                                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
                              }}
                            ></div>
                          </div>
                          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                          <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        </div>

                        <div className="relative z-10">
                          <Icon className="w-8 h-8 mb-4 opacity-90" />
                          <h3 className="text-xl font-medium mb-4">{service.name[language]}</h3>
                          <p className="text-sm font-light opacity-90 leading-relaxed">
                            {t({
                              en: translations.en.services.premiumService,
                              es: translations.es.services.premiumService,
                            })}
                          </p>
                        </div>

                        <a
                          href="tel:7632093716"
                          className="relative z-10 w-full py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-medium tracking-wide flex items-center justify-center space-x-2 group"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone className="w-4 h-4 group-hover:animate-pulse" />
                          <span>
                            {t({
                              en: translations.en.services.bookNow,
                              es: translations.es.services.bookNow,
                            })}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced page indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? 'w-8 h-2 bg-gradient-to-r from-purple-600 to-pink-600'
                      : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
