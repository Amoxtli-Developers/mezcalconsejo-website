'use client';

import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const VideoSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-white">
      <div className="container-notion">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-gray-50">
                <img
                  src="/api/placeholder/600/750"
                  alt="Más que un mezcal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 order-1 lg:order-2 space-section"
          >
            <div className="space-minimal">
              <div className="divider-minimal mb-6"></div>
              <span className="text-caption text-gray-500 uppercase tracking-widest">
                {t('video.subtitle')}
              </span>
            </div>

            <h2 className="heading-primary text-gray-900 mb-6">
              {t('video.title')}
            </h2>

            <p className="text-body text-gray-600 mb-8">
              {t('video.description')}
            </p>

            {/* Values - Minimal */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-1 h-8 bg-brand-primary flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="heading-small text-gray-900 mb-1">
                    Tradición Ancestral
                  </h4>
                  <p className="text-body-small text-gray-600">
                    {t('video.point1')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-1 h-8 bg-brand-secondary flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="heading-small text-gray-900 mb-1">
                    Calidad Excepcional
                  </h4>
                  <p className="text-body-small text-gray-600">
                    {t('video.point2')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-1 h-8 bg-gray-900 flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="heading-small text-gray-900 mb-1">
                    Compromiso Social
                  </h4>
                  <p className="text-body-small text-gray-600">
                    {t('video.point3')}
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                const aboutElement = document.getElementById('about');
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-minimal group"
            >
              {t('video.cta')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
