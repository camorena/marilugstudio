#!/bin/bash

# setup-full-components.sh - Script to create all full component implementations
cat > setup-full-components.sh << 'EOF'
#!/bin/bash

echo "🧩 Creating full component implementations..."

# Create About component
cat > src/components/sections/About.tsx << 'ABOUT'
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t({ en: translations.en.about.title, es: translations.es.about.title })}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
            {t({ en: translations.en.about.description, es: translations.es.about.description })}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{t({ en: translations.en.about.location, es: translations.es.about.location })}</h3>
              <p className="text-gray-600 dark:text-gray-400">9057 Broderick Blvd, Inver Grove Heights, MN 55076</p>
            </div>
            
            <div className="card p-6">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{t({ en: translations.en.about.phone, es: translations.es.about.phone })}</h3>
              <p className="text-gray-600 dark:text-gray-400">612.308.4781</p>
            </div>
            
            <div className="card p-6">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{t({ en: translations.en.about.hours, es: translations.es.about.hours })}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t({ en: translations.en.about.hoursText, es: translations.es.about.hoursText })}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
ABOUT

# Create Services component
cat > src/components/sections/Services.tsx << 'SERVICES'
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import { services } from '../../data/services';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'men' | 'women'>('men');
  
  const filteredServices = services.filter(s => s.category === activeCategory || s.category === 'both');
  
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t({ en: translations.en.services.title, es: translations.es.services.title })}
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1">
            <button
              onClick={() => setActiveCategory('men')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === 'men'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {t({ en: translations.en.services.menServices, es: translations.es.services.menServices })}
            </button>
            <button
              onClick={() => setActiveCategory('women')}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === 'women'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {t({ en: translations.en.services.womenServices, es: translations.es.services.womenServices })}
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredServices.map((service) => (
            <div key={service.id} className="card p-6">
              <h3 className="font-semibold text-lg mb-2">{service.name[language]}</h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-accent">{service.price}</span>
                <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors text-sm">
                  {t({ en: translations.en.services.bookNow, es: translations.es.services.bookNow })}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
SERVICES

# Create Portfolio component
cat > src/components/sections/Portfolio.tsx << 'PORTFOLIO'
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import { portfolioItems } from '../../data/portfolio';

const Portfolio: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  return (
    <section id="portfolio" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t({ en: translations.en.portfolio.title, es: translations.es.portfolio.title })}
        </h2>
        
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {['all', 'haircuts', 'coloring', 'styling', 'beard'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {t({ 
                en: translations.en.portfolio[filter as keyof typeof translations.en.portfolio], 
                es: translations.es.portfolio[filter as keyof typeof translations.es.portfolio] 
              })}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={item.image}
                alt={item.title[language]}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-semibold">{item.title[language]}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
PORTFOLIO

# Create Promotions component
cat > src/components/sections/Promotions.tsx << 'PROMOTIONS'
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
import { promotions } from '../../data/promotions';

const Promotions: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="promotions" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t({ en: translations.en.promotions.title, es: translations.es.promotions.title })}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {promotions.map((promo) => (
            <div key={promo.id} className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg p-8 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{promo.title[language]}</h3>
                <span className="text-3xl font-bold text-primary">{promo.discount}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{promo.description[language]}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t({ en: translations.en.promotions.validUntil, es: translations.es.promotions.validUntil })}: {promo.validUntil}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
PROMOTIONS

# Create Contact component
cat > src/components/sections/Contact.tsx << 'CONTACT'
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '' ? 'Name is required' : '',
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'Invalid email' : '',
      phone: formData.phone.trim() === '' ? 'Phone is required' : '',
      message: formData.message.trim() === '' ? 'Message is required' : ''
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual EmailJS implementation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {t({ en: translations.en.contact.title, es: translations.es.contact.title })}
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 font-medium">
                {t({ en: translations.en.contact.name, es: translations.es.contact.name })}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-field"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block mb-2 font-medium">
                {t({ en: translations.en.contact.email, es: translations.es.contact.email })}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-field"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 font-medium">
              {t({ en: translations.en.contact.phone, es: translations.es.contact.phone })}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="input-field"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 font-medium">
              {t({ en: translations.en.contact.message, es: translations.es.contact.message })}
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="input-field"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary flex items-center space-x-2 mx-auto disabled:opacity-50"
            >
              <span>
                {isSubmitting 
                  ? t({ en: translations.en.contact.sending, es: translations.es.contact.sending })
                  : t({ en: translations.en.contact.send, es: translations.es.contact.send })
                }
              </span>
              <Send className="w-5 h-5" />
            </button>
            
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-600 dark:text-green-400">
                {t({ en: translations.en.contact.success, es: translations.es.contact.success })}
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-600 dark:text-red-400">
                {t({ en: translations.en.contact.error, es: translations.es.contact.error })}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
CONTACT

echo "✅ Full component implementations created!"
echo ""
echo "Note: Remember to update the main setup-project.sh to include this script"
echo "or run it separately after the initial setup."
EOF

# Make script executable
chmod +x setup-full-components.sh

echo "🎉 Component implementation script created!"
echo ""
echo "This script creates all the full component implementations"
echo "for the sections that were stubbed in the basic setup."