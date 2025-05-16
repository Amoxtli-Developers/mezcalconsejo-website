'use client';

import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';

const QuoteSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-notion">
        <div ref={ref} className="text-center max-w-4xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-gray-100 italic leading-relaxed mb-8"
          >
            {t('quote.text')}
          </motion.blockquote>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            {t('quote.author')}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 w-24 h-0.5 bg-gray-300 dark:bg-gray-700 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
