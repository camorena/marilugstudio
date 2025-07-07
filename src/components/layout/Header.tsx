import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = Object.entries(translations.en.nav).map(([key]) => ({
    key,
    label: t({
      en: translations.en.nav[key as keyof typeof translations.en.nav],
      es: translations.es.nav[key as keyof typeof translations.es.nav],
    }),
    href: `#${key}`,
  }));

  // Use logos from the logos folder
  const logoSrc =
    theme === 'light' ? '/images/logos/logo-light.png' : '/images/logos/logo-dark.png';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gray-50/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg'
          : 'bg-gray-50/80 dark:bg-slate-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {!logoError ? (
              <img
                src={logoSrc}
                alt="Marilu G Studio"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-all duration-300 hover:scale-105"
                onError={() => setLogoError(true)}
                loading="eager"
                decoding="async"
                style={{
                  imageRendering: 'crisp-edges',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                }}
              />
            ) : (
              <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light tracking-wider text-gray-900 dark:text-white">
                MARILU G STUDIO
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map(({ key, label, href }) => (
              <a
                key={key}
                href={href}
                className="relative text-sm lg:text-base font-light tracking-wide text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3 md:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-sm font-light border border-gray-300 dark:border-slate-700 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105"
              aria-label="Toggle language"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden mt-4 space-y-1 transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          {navItems.map(({ key, label, href }) => (
            <a
              key={key}
              href={href}
              className="block py-3 px-4 text-sm font-light text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
