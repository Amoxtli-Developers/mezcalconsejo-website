'use client';

import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const FoundersSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const founders = [
    {
      name: 'Omar',
      role: t('founders.omar.role'),
      description: t('founders.omar.description'),
      image: '/api/placeholder/400/500'
    },
    {
      name: 'Luna',
      role: t('founders.luna.role'),
      description: t('founders.luna.description'), 
      image: '/api/placeholder/400/500'
    }
  ];

  return (
    <section className="section-padding bg-gray-50/30">
      <div className="container-notion">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="divider-minimal mb-6"></div>
            <span className="text-caption text-gray-500 uppercase tracking-widest block mb-4">
              {t('founders.subtitle')}
            </span>
            <h2 className="heading-primary text-gray-900 mb-6">
              {t('founders.title')}
            </h2>
            <p className="text-body text-gray-600">
              {t('founders.description')}
            </p>
          </motion.div>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="founder-card-minimal group"
            >
              <div className="founder-image-minimal">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-minimal">
                <div>
                  <h3 className="heading-secondary text-gray-900 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-body-small text-brand-primary font-medium">
                    {founder.role}
                  </p>
                </div>
                
                <p className="text-body-small text-gray-600">
                  {founder.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-100 pt-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-accent text-gray-900 mb-6">
              &quot;{t('founders.vision')}&quot;
            </blockquote>
            <div className="divider-minimal mx-auto mb-4"></div>
            <p className="text-caption text-gray-500 uppercase tracking-widest">
              {t('founders.foundersTitle')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoundersSection;
