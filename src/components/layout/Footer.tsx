import React, { useState } from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { translations } from '../../utils/translations';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [logoError, setLogoError] = useState(false);

  // Use logos from the logos folder
  const logoSrc =
    theme === 'light' ? '/images/logos/logo-light.png' : '/images/logos/logo-dark.png';

  return (
    <footer className="py-20 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="mb-6">
              {!logoError ? (
                <img
                  src={logoSrc}
                  alt="Marilu G Studio"
                  className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-opacity duration-300 hover:opacity-80"
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
                <div className="text-2xl sm:text-2xl md:text-3xl font-light tracking-wider text-gray-900 dark:text-white">
                  MARILU G STUDIO
                </div>
              )}
            </div>
            <p className="text-sm font-light text-gray-600 dark:text-gray-300 mb-6">
              {t({
                en: 'Where Beauty Meets Excellence',
                es: 'Donde la Belleza se Encuentra con la Excelencia',
              })}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/marilugstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 dark:border-slate-700 rounded-full hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href="https://instagram.com/marilugstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 dark:border-slate-700 rounded-full hover:border-pink-500 dark:hover:border-pink-400 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-light text-sm tracking-wider mb-6 text-gray-900 dark:text-white flex items-center">
              <Phone className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
              {t({ en: 'CONTACT', es: 'CONTACTO' })}
            </h4>
            <div className="space-y-4">
              <a href="tel:7632093716" className="flex items-start space-x-3 group cursor-pointer">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                <div>
                  <p className="text-sm font-light text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    763.209.3716
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@marilugstudio.com"
                className="flex items-start space-x-3 group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-gray-400 mt-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                <div>
                  <p className="text-sm font-light text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    marilugstudio@icloud.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-light text-sm tracking-wider mb-6 text-gray-900 dark:text-white flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
              {t({ en: 'LOCATION', es: 'UBICACIÓN' })}
            </h4>
            <a
              href="https://maps.google.com/?q=9057+Broderick+Blvd+Inver+Grove+Heights+MN+55076"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-3 group cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
              <div>
                <p className="text-sm font-light text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  9057 Broderick Blvd
                  <br />
                  Inver Grove Heights
                  <br />
                  MN 55076
                </p>
              </div>
            </a>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-light text-sm tracking-wider mb-6 text-gray-900 dark:text-white flex items-center">
              <Clock className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
              {t({ en: 'HOURS', es: 'HORARIO' })}
            </h4>
            <div className="space-y-2 text-sm font-light text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span>{t({ en: 'Mon - Fri', es: 'Lun - Vie' })}</span>
                <span className="text-purple-600 dark:text-purple-400">9:00 - 19:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t({ en: 'Saturday', es: 'Sábado' })}</span>
                <span className="text-purple-600 dark:text-purple-400">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>{t({ en: 'Sunday', es: 'Domingo' })}</span>
                <span className="text-gray-400 dark:text-gray-500">
                  {t({ en: 'Closed', es: 'Cerrado' })}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-800 pt-8">
          <div className="text-center">
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              &copy; 2025 Marilu G Studio.{' '}
              {t({ en: translations.en.footer.rights, es: translations.es.footer.rights })}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              {t({ en: 'Website by ', es: 'Sitio web por ' })}
              <a
                href="https://"
                className="text-purple-600 dark:text-purple-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datelica{' '}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
