import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import { portfolioItems, categories } from '../../data/portfolio';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  // Dynamic card widths for visual interest
  const getCardWidth = (index: number) => {
    const widths = ['w-72', 'w-96', 'w-80', 'w-[22rem]'];
    return widths[index % widths.length];
  };

  // Mouse drag to scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Smooth scroll with wheel
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        element.scrollLeft += e.deltaY;
      }
    };

    element.addEventListener('wheel', handleWheel, { passive: false });
    return () => element.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section
      id="portfolio"
      className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* Minimal header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 dark:text-white mb-8">
            {t({ en: translations.en.portfolio.title, es: translations.es.portfolio.title })}
          </h2>

          {/* Simple category filters */}
          <div className="flex gap-6 text-sm">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                {t({ en: category.name.en, es: category.name.es })}
                {activeCategory === category.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-gray-900 dark:bg-white transition-all duration-300 origin-left scale-x-100"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic scrolling grid */}
        <div className="relative -mx-4 px-4">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className={`overflow-x-auto overflow-y-hidden scrollbar-hide ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            <div className="flex gap-4 pb-4">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`${getCardWidth(index)} flex-shrink-0 group opacity-0 animate-fadeIn`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="relative h-96 overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      draggable="false"
                    />

                    {/* Minimal overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Simple text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white text-lg font-light mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm font-extralight">
                        {t({
                          en:
                            categories.find((c) => c.id === item.category)?.name.en ||
                            item.category,
                          es:
                            categories.find((c) => c.id === item.category)?.name.es ||
                            item.category,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* End padding for smooth scroll */}
              <div className="w-4 flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Minimal scroll indicator */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-1">
            {[...Array(Math.min(5, filteredItems.length))].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-700" />
            ))}
          </div>
        </div>

        {/* Subtle hint for mobile users */}
        <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400 md:hidden">
          <p className="font-light">
            ←{' '}
            {t({
              en: translations.en.portfolio.swipeToExplore,
              es: translations.es.portfolio.swipeToExplore,
            })}{' '}
            →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
