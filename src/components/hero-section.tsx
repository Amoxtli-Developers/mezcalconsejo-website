'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/images/hero.jpg'

const HeroSection = () => {
  const { t } = useTranslation();

  const hero = {
    title: t('hero.title1'),
    subtitle: t('hero.subtitle1'),
    primaryCta: t('hero.cta1'),
    secondaryCta: t('hero.cta2'),
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt="Mezcal artesanal"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-notion section-padding">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            {hero.title.split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="text-brand-secondary">{hero.title.split(' ').slice(2).join(' ')}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl"
          >
            {hero.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => {
                const shopElement = document.getElementById('shop');
                if (shopElement) {
                  shopElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-brand-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 focus-ring"
            >
              {hero.primaryCta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const aboutElement = document.getElementById('about');
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-brand-secondary rounded-full hover:bg-brand-secondary hover:text-gray-900 transition-all duration-300 focus-ring"
            >
              {hero.secondaryCta}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 text-brand-secondary animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
