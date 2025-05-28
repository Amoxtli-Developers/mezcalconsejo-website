'use client';

import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const QuoteSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-gray-50/30">
      <div className="container-notion">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="divider-minimal mx-auto mb-8"></div>
          
          <blockquote className="text-accent text-gray-900 mb-8">
            {t('quote.text')}
          </blockquote>
          
          <div className="divider-minimal mx-auto mb-4"></div>
          
          <p className="text-caption text-gray-500 uppercase tracking-widest">
            {t('quote.author')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
