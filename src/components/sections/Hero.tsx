import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Sparkles, Scissors } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 dark:bg-slate-900 transition-colors duration-500"
    >
      {/* Dynamic gradient orbs with glow effects */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20 dark:from-purple-900/10 dark:via-slate-900 dark:to-pink-900/10" />

        {/* Animated gradient orbs */}
        <div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-600 rounded-full filter blur-[128px] opacity-50 dark:opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-pink-600 rounded-full filter blur-[128px] opacity-50 dark:opacity-30"
          style={{
            transform: `translate(${-mousePosition.x * 2}px, ${-mousePosition.y * 2}px)`,
            animation: 'pulse 4s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500 rounded-full filter blur-[200px] opacity-30 dark:opacity-20"
          style={{
            transform: `translate(-50%, -50%) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`,
          }}
        />
      </div>

      {/* Parallax grid pattern */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatUp ${15 + Math.random() * 20}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Animated scissors decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-20 opacity-10"
          style={{
            animation: 'float 8s ease-in-out infinite',
            transform: `rotate(${45 + mousePosition.x * 0.5}deg)`,
          }}
        >
          <Scissors className="w-24 h-24 text-purple-300" />
        </div>
        <div
          className="absolute bottom-20 left-20 opacity-10"
          style={{
            animation: 'float 10s ease-in-out infinite',
            animationDelay: '3s',
            transform: `rotate(${-30 + mousePosition.x * 0.3}deg)`,
          }}
        >
          <Scissors className="w-32 h-32 text-pink-300" />
        </div>
      </div>

      {/* Hero background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/hero-bg.svg')`,
          transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0001})`,
          filter: 'brightness(0.3)',
          opacity: 0.4,
        }}
      />

      {/* Content container with glassmorphism effect */}
      <div className="relative container mx-auto px-4 text-center z-10">
        {/* Animated badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-300 font-light tracking-wide">
            {t({ en: translations.en.hero.welcome, es: translations.es.hero.welcome })}
          </span>
        </div>

        {/* Main title with split animation */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
          <span className="block overflow-hidden">
            <span
              className={`inline-block transition-all duration-1000 ${
                isLoaded ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'gradient 3s ease infinite',
                }}
              >
                Marilu G
              </span>
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className={`inline-block transition-all duration-1000 ${
                isLoaded ? 'translate-y-0' : 'translate-y-full'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="text-white font-light tracking-wider">Studio</span>
            </span>
          </span>
        </h1>

        {/* Animated subtitle with typewriter effect */}
        <div
          className={`text-xl md:text-3xl text-gray-300 mb-12 font-light tracking-wide transition-all duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <span className="inline-block bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            {t({ en: translations.en.hero.subtitle, es: translations.es.hero.subtitle })}
          </span>
        </div>

        {/* CTA section with advanced hover effects */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          {/* Primary CTA with liquid effect */}
          <a
            href="#contact"
            className="group relative px-10 py-5 overflow-hidden rounded-full transition-all duration-500 hover:scale-105"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />

            {/* Liquid hover effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div
                className="absolute -inset-10 bg-white/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  animation: 'liquidMove 3s ease-in-out infinite',
                }}
              />
            </div>

            {/* Content */}
            <span className="relative flex items-center gap-3 text-white font-medium">
              {t({ en: translations.en.hero.cta, es: translations.es.hero.cta })}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
          </a>

          {/* Secondary info with animated stars */}
          <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <div className="relative">
              {[...Array(3)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 absolute"
                  style={{
                    animation: `starPulse 2s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                    left: `${i * 20}px`,
                  }}
                  fill="currentColor"
                />
              ))}
              <div className="w-16 h-5" /> {/* Spacer for stars */}
            </div>
            <span className="text-sm font-light text-gray-300">
              {t({ en: translations.en.hero.experience, es: translations.es.hero.experience })}
            </span>
          </div>
        </div>

        {/* Modern scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="relative w-6 h-10">
            <div className="absolute inset-0 border-2 border-white/30 rounded-full" />
            <div
              className="absolute left-1/2 top-2 w-1 h-3 bg-white/60 rounded-full -translate-x-1/2"
              style={{
                animation: 'scrollDown 2s ease-in-out infinite',
              }}
            />
            <div className="absolute -inset-2 border border-white/10 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
