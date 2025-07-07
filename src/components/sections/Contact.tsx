import React, { useState } from 'react';
import {
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../utils/translations';
//import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS integration would go here
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-800 relative overflow-hidden transition-colors duration-500"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/10 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 dark:bg-pink-900/10 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-6">
            {t({ en: translations.en.contact.title, es: translations.es.contact.title })}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
            {t({
              en: translations.en.contact.subtitle,
              es: translations.es.contact.subtitle,
            })}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Header */}
            <div>
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-2">
                {t({ en: 'Get in Touch', es: 'Contáctanos' })}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                {t({
                  en: "We're here to help you look and feel your best",
                  es: 'Estamos aquí para ayudarte a verte y sentirte mejor',
                })}
              </p>
            </div>

            {/* Contact Cards - Vertical Stack */}
            <div className="space-y-4">
              {/* Phone - Primary CTA */}
              <div className="group bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800/30">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                    <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                      {t({ en: 'Call or Text', es: 'Llama o Envía Mensaje' })}
                    </h4>
                    <a
                      href="tel:7632093716"
                      className="text-2xl font-light text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
                      763.209.3716
                    </a>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {t({
                        en: translations.en.contact.info.bookAppointment,
                        es: translations.es.contact.info.bookAppointment,
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group bg-gray-50 dark:bg-slate-700/30 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                    <MapPin className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      {t({ en: 'Visit Our Salon', es: 'Visita Nuestro Salón' })}
                    </h4>
                    <a
                      href="https://maps.google.com/?q=9057+Broderick+Blvd+Inver+Grove+Heights+MN+55076"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      <p className="font-light">9057 Broderick Blvd</p>
                      <p className="font-light">Inver Grove Heights, MN 55076</p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="group bg-gray-50 dark:bg-slate-700/30 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                    <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                      {t({ en: 'Business Hours', es: 'Horario de Atención' })}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          {t({ en: 'Monday - Friday', es: 'Lunes - Viernes' })}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          10:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          {t({ en: 'Saturday', es: 'Sábado' })}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          10:00 AM - 6:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          {t({ en: 'Sunday', es: 'Domingo' })}
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          10:00 AM - 6:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group bg-gray-50 dark:bg-slate-700/30 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                    <Mail className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                      {t({ en: 'Email Us', es: 'Correo Electrónico' })}
                    </h4>
                    <a
                      href="mailto:marilugstudio@icloud.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-light"
                    >
                      marilugstudio@icloud.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-gray-50 dark:bg-slate-700/50 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-slate-600">
              {/* Form Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-light text-gray-900 dark:text-white">
                  {t({ en: 'Send us a Message', es: 'Envíanos un Mensaje' })}
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    {t({ en: translations.en.contact.name, es: translations.es.contact.name })}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder={t({ en: 'John Doe', es: 'Juan Pérez' })}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    {t({ en: translations.en.contact.email, es: translations.es.contact.email })}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder={t({ en: 'john@example.com', es: 'juan@ejemplo.com' })}
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    {t({ en: translations.en.contact.phone, es: translations.es.contact.phone })}
                    <span className="text-gray-400 text-sm font-normal ml-2">
                      {t({ en: '(Optional)', es: '(Opcional)' })}
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder="(612) 555-0100"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    {t({
                      en: translations.en.contact.message,
                      es: translations.es.contact.message,
                    })}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-white"
                    placeholder={t({
                      en: 'Tell us how we can help you...',
                      es: 'Cuéntanos cómo podemos ayudarte...',
                    })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t({
                        en: translations.en.contact.sending,
                        es: translations.es.contact.sending,
                      })}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t({ en: translations.en.contact.send, es: translations.es.contact.send })}
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-2 text-green-700 dark:text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-light">
                      {t({
                        en: translations.en.contact.success,
                        es: translations.es.contact.success,
                      })}
                    </span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-2 text-red-700 dark:text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-light">
                      {t({ en: translations.en.contact.error, es: translations.es.contact.error })}
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
