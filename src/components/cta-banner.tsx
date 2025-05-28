'use client';

import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  return (
    <section className="section-padding bg-white">
      <div className="container-notion">
        <div ref={ref} className="relative overflow-hidden rounded-3xl bg-brand-primary p-12 text-center">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative text-white">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="heading-primary text-white mb-6"
            >
              {t('cta.title')}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-body-large text-white/90 mb-8 max-w-2xl mx-auto"
            >
              {t('cta.subtitle')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => {
                  const contactElement = document.getElementById('contact');
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group btn-primary bg-white text-red-800 rounded-full hover:bg-gray-100 px-8 py-4 text-button transform hover:scale-105"
              >
                {t('cta.button')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const shopElement = document.getElementById('shop');
                  if (shopElement) {
                    shopElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 text-button text-white border-2 border-white rounded-full hover:bg-white hover:text-red-800 transition-all duration-300 focus-ring"
              >
                {t('cta.secondaryButton')}
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto"
            >
              <div className="text-center">
                <div className="heading-tertiary text-white">1,000+</div>
                <div className="text-caption text-white/80">{t('cta.stats.customers')}</div>
              </div>
              <div className="text-center">
                <div className="heading-tertiary text-white">50+</div>
                <div className="text-caption text-white/80">{t('cta.stats.products')}</div>
              </div>
              <div className="text-center">
                <div className="heading-tertiary text-white">25</div>
                <div className="text-caption text-white/80">{t('cta.stats.experience')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
